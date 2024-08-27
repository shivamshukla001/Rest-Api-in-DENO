function newFile(req:Request){

const url = new URL(req.url);

// console.log(url);

// if(req.url==='http://localhost:8000/hello'){
//     return new Response("hello")
// }
// else if(req.url==='http://localhost:8000/bye'){
//     return new Response("bye")
// }
if(url.pathname==='/hello'){
    return new Response("hello");
}   else if(url.pathname==='/bye'){
    return new Response('see yaa')
}
else{
    return new Response("not matched")
}

}

Deno.serve(newFile)