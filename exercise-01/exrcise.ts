function handler(req: Request) {
  const url = req.url;
  const method = req.method;
  const json = { url, method };
  const jsonString = JSON.stringify(json);
  console.log(jsonString);
  const header = new Headers;
  header.append('Content-type', 'application/json')

  return new Response(jsonString,{
    headers:header
  });
}

Deno.serve({ port: 4000 }, handler);
