
async function handler(req:Request) {
    
    const file = await Deno.readTextFile('./users.json')
    const users = JSON.parse(file);

    const url = new URL(req.url);

    const userRoute = new URLPattern({pathname:'/users'})

    if(userRoute.test(url)){
        const userString = JSON.stringify(users);
        return new Response(userString,{
            headers:{
                "content-type": "application/json"
            }
        })
    }
    return new Response("wrong Routes", {status: 404})
}

Deno.serve(handler)