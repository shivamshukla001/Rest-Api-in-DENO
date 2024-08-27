async function handler(req: Request) {
  const url = new URL(req.url);

  switch (url.pathname) {
    case "/meow": {
      return new Response("cat page boi");
    }
    case "/dog": {
      return new Response("dog page boi");
    }
    default: {
      return new Response("please enter correct url");
    }
  }
}
Deno.serve(handler);
