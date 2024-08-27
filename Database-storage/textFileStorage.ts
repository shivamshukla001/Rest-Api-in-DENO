async function handler(req:Request) {
    const url = req.url;

    const file = await Deno.readTextFile('./storage.json')
    console.log(file);
    
    return new Response("text-file")
}

Deno.serve(handler)