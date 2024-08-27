async function  handler(req:Request) {
    const url = new URL(req.url);
    console.log(req.url);
    console.log(url);

    if(url.pathname === "/"){
        return new Response("homeapge")
    }else if(url.pathname=== "/cat"){
        return new Response("Cat page")
    }else if(url.pathname==="/dog"){
        return new Response("dog Homepage")
    }else{
        return new Response("chutiya  hai ky ky ky search krta rehta hai ")
    }
    
    
}

Deno.serve(handler)