function handler(req:Request){
    
    const url = new URL(req.url);

    const profilePattern = new URLPattern({
        pathname: '/profile/:username'
    })

    const postPattern = new URLPattern({
        pathname:'/posts/:postid/:userid'
    })

     if(profilePattern.test(url)){
      const match  = profilePattern.exec(url);
      console.log(match);
      
      const username = match?.pathname.groups.username
      return new Response(`hiii ${username}`)
     }else if(postPattern.test(url)){
        const match = postPattern.exec(url)
        console.log(match);
        const data = match?.pathname.groups.postid
        const data2 = match?.pathname.groups.userid
        return new Response(`${data} ${data2}`)
        
     }
     else {
        return new Response("sorry")
     }
}

Deno.serve(handler)