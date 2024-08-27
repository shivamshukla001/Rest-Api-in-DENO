async function handler(req: Request){
    const url = new URL(req.url);
    const path = new URLPattern({
        pathname: '/hero'
    })

    if(path.test(url) && req.method === 'POST'){
        const body = await req.formData()
        const id = Math.floor(Math.random()*1000);
        const name = body.get("name");
        const cool = Boolean(body.get("cool"))
        const hero = {id, name, cool}
        console.log(hero);
        
        const file = await Deno.readTextFile('hero.json');
        let heroes = JSON.parse(file);
        heroes=[...heroes, hero];

        await Deno.writeTextFile('hero.json', JSON.stringify(heroes))
        return new Response(JSON.stringify(hero), {status: 201, headers:{
            'content-type': 'application/json'
        }})
    }

    return new Response("ok", {status: 404})
}


Deno.serve(handler)