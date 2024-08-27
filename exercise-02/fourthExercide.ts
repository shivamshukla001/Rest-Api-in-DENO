async function imgFile(req:Request){
    const url = new URL(req.url)
  const data = await Deno.readTextFile('./fourth.html')
  
  const imagePattern = new URLPattern({
    pathname:'/image'
  })
  
  if(imagePattern.test(url)){
    return new Response(data,{
        headers:{
            "content-type": "text/html"
        }
      })
  }else{
    return new Response("please enter correct iamge")
  }

  
}



Deno.serve(imgFile)