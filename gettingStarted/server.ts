
// function DenoServer(req:Request, res:Response){

//     return new Response('Hello!')
// }


function newDenoServ(req:Request,){
    const method = req.method;
    const url = req.url;
    const responseString = `${method} ${url}`
    const urlObj = new URL(req.url)
    const pathname = urlObj.pathname;
    console.log(`${method} ${pathname}`);
    return new Response(responseString)
}

Deno.serve({port:5000}, newDenoServ);