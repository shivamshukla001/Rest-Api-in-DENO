// async function handler(req: Request){
//     const url = new URL(req.url);
//     const matchPath = new URLPattern({pathname:'/users'})

//     if(matchPath.test(url) && req.method === 'POST'){
        
//         const file = await Deno.readTextFile('./use.json')
//         let users = JSON.parse(file);
//         console.log(users);
//         const id = Math.floor(Math.random()*1000);
//         const userbody = await req.json();
//         const newUser =[id, ...userbody];
//         users = [...users, newUser];

//        await Deno.writeTextFile('./use.json', JSON.stringify(users))
//        return new Response(JSON.stringify(newUser), {status:201})
//     } 
//     return new Response(null, {status:404})
// }

// Deno.serve({port:2000},handler)

async function handler(req: Request) {
    const url = new URL(req.url);
    const matchPath = new URLPattern({ pathname: '/users' });

    if (matchPath.test(url) && req.method === 'POST') {
        // Read and parse the JSON file
        const file = await Deno.readTextFile('./use.json');
        let users = JSON.parse(file);
        
        // Create a new user
        const id = Math.floor(Math.random() * 1000);
        const userbody = await req.json();

        if(userbody.username && userbody.age && userbody.email){

            const newUser = { id, ...userbody }; // Ensure it's an object
            
            // Add the new user to the array
            users = [...users, newUser];
            
            // Write the updated users array back to the file
            await Deno.writeTextFile('./use.json', JSON.stringify(users, null, 2));
            
            // Respond with the newly created user
            return new Response(JSON.stringify(newUser), { status: 201 });
        }
    }

    return new Response(null, { status: 404 });
}

Deno.serve({ port: 2000 }, handler);