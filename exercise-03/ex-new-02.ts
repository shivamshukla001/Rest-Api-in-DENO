async function handler(req: Request) {
  const file = await Deno.readTextFile("./movie.json");
  const movies = JSON.parse(file);

  const url = new URL(req.url);
  const method = req.method;

  const moviePattern = new URLPattern({
    pathname: "/movie/:id",
  });

  if (moviePattern.test(url) && method === "GET") {
    // const pathname = url.pathname;
    // console.log(pathname);
    const split = url.pathname.split("/");
    // console.log(split);
    const id = Number(split[2]);
    console.log(id);

    for (const movie of movies) {
      if (movie.id === id) {
        return new Response(JSON.stringify(movie), {
          headers: { "content-type": "application/json" },
        });
      }
    }
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
