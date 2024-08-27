function handler(req:Request){
    const url = new URL(req.url);

    const roarPatter = new URLPattern({
        pathname:"/roar"
    })
    const meowPattern = new URLPattern({
        pathname:"/meow"
    })

    const animalPattern = new URLPattern({
        pathname: '/animal/:username'
    })

    if(roarPatter.test(url)){
        return new Response("sherrrrrrrrrrrr")
    }
     else if(meowPattern.test(url)){
        return new Response("meowwwwwwwwwww")
    }else if(animalPattern.test(url)){
        const matches = animalPattern.exec(url);
        console.log(matches);
        
        const animalName = matches?.pathname.groups.username
        return new Response(animalName)
    }
    else{
        return new Response("not found")
    }
}

Deno.serve(handler)