

function handler(req:Request){

    const method = req.method
    console.log(method);

    if(method === 'GET'){
        return new Response("hello", {status: 200})
    }
    return new Response(null, {status: 404})
}

Deno.serve(handler)