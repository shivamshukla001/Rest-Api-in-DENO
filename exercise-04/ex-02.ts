async function handler(req: Request) {
    const url = new URL(req.url);
    const animalPattern = new URLPattern({ pathname: "/animal" });
  
    if (animalPattern.test(url) && req.method === "POST") {
      const file = await Deno.readTextFile("./forest.json");
      let animal = JSON.parse(file);
      console.log(animal);
      const animalData = await req.json();
      const hasOwn = Object.hasOwn(animalData, "count");
      if(!hasOwn){
        const error = JSON.stringify({error: "count is required"})
        return new Response( error, {status: 400, headers: {
          'content-type': 'application/json'
        }})
      }
  
      const count = animalData["count"];
      if(!Number.isInteger(count)){
        const error = JSON.stringify({error: "count is needs to be integer"})
        return new Response( error, {status: 400, headers: {
          'content-type': 'application/json'
        }})
      }
  
      // if ( animalData.type && animalData.count) {
        const id = Math.floor(Math.random() * 1000);
        const newAnimal = { id, ...animalData };
        animal = [...animal, newAnimal];
        await Deno.writeTextFile("forest.json", JSON.stringify(animal));
        return new Response(JSON.stringify(newAnimal));
      // }
    }
  
    return new Response(null, { status: 404 });
  }
  
  Deno.serve(handler);
  