interface log {
  title: string;
  director: string;
  genres: string;
  id: number;
}
async function handler(req: Request) {
  const file = await Deno.readTextFile("./movie.json");
  const movies: log[] = JSON.parse(file);
  const url = new URL(req.url);
  const methed = req.method;
  const moviePattern = new URLPattern({
    pathname: "/movie",
  });
  if (methed === "GET") {
    if (moviePattern.test(url)) {
      return new Response(JSON.stringify(movies), {
        headers: { "content-type": "application/json" },
      });
    }
    return new Response("not methed method", { status: 404 });
  }
  return new Response("not methed method", { status: 404 });
}
Deno.serve(handler);
