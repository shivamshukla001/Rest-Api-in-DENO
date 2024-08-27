async function handler(req: Request) {
    const url = new URL(req.url);
    const use = new URLPattern({ pathname: '/user/:id' });
  
    if (use.test(url) && req.method === 'PATCH') {
      const userbody = await req.json();
      const id =Number(userbody["id"]);
      const file = await Deno.readTextFile("users.json");
      const users = JSON.parse(file);
      for (let i = 0; i< users.length; i++) {
        
        if (users[i].id === id) {
           users[i] = {...users[i], ...userbody}
          await Deno.writeTextFile("users.json", JSON.stringify(users));
          return new Response(JSON.stringify(userbody), {
            status: 201,
            headers: { "content-type": "application/json" },
          });
        }
      }
    }
  
    return new Response(null, { status: 404 });
  }
  
  Deno.serve({port: 3000},handler);
  