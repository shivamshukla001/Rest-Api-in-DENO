async function render(req:Request){
    
   
   const file = await Deno.readTextFile('./new.html')
   
   
//    await Deno.writeTextFile('./new.html', "\nthis is the write file method now i go to add new line and add allow writefile in terminal ")
    return new Response(file,{
        headers: {
            "content-type": 'text/html'
        }
    })
}

Deno.serve({port:3000}, render)