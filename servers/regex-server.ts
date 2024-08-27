function regexserv(req:Request){

    const url = new URL(req.url);

    if(url.pathname.match('/meow')){
        return new Response("hello kitty")
    }else if(url.pathname.match('/dog')){
        return new Response("dog surrender")
    }else{
        return new Response("please enter correct url")
    }
}

Deno.serve(regexserv)