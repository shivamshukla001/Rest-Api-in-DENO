async function handler(req:Request) {
    
    const url = new URL(req.url);
    const pathdata = new URLPattern({
        pathname: '/logout'
    })

    const userData = await req.json()
    if(pathdata.test(url) && req.method === 'POST'){
        console.log(userData);
        
        return new Response(JSON.stringify(userData), {status:201})
    }

    return new Response(null, {status: 404})
}

Deno.serve(handler)