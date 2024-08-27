interface user {
    id: number,
    first_name: string,
    last_name: string,
   email: string
    Country: string
}

async function handler(req: Request){
    const file = await Deno.readTextFile('./users.json')
    const users: user[] = JSON.parse(file);

    const url = new URL(req.url);

    const singleUser = new URLPattern({
        pathname: '/user/:id'
    })

    if(singleUser.test(url)){
        const match = singleUser.exec(url)
        const lookforit = Number(match?.pathname.groups.id);
        const MatchingUsers = users.find( (user) => user.id === lookforit)
        // console.log(MatchingUsers);
        
         
        return new Response(JSON.stringify(MatchingUsers), {
            headers:{
                "Content-type": "application/json"
            }
        })
    }
        return new Response("no user Found")
    
}

Deno.serve(handler)