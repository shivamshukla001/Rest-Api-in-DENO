async function searchRpute(req: Request){
    const file = await Deno.readTextFile('./movie.json');
    const movies = JSON.parse(file);
    const url = new URL(req.url);

    const method = req.method;
     const pattern = new URLPattern({
        pathname: '/movie'
     })

     const searched = url.searchParams.get("genres");
     console.log(searched);
     

     if(searched!== null && method === 'GET'){
        const data = [];
        for(const movie of movies){
            if(movie.genres === searched){
                data.push(movie)
            }
        }
        return new Response(JSON.stringify(data),{
            headers: {
                'content-type':'application/json'
            }
        })
     }
     

     if(pattern.test(url)&& method === 'GET'){
        return new Response(JSON.stringify(movies),{
            headers: {
                'content-type':'application/json'
            }
        })
     }

     return new Response(null, {status:404})
}

Deno.serve(searchRpute)