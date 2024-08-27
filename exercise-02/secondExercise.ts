function handler(req: Request) {
  const url = new URL(req.url);
  const register = new URLPattern({
    pathname: "/register",
  });
  const login = new URLPattern({
    pathname: "/login",
  });
  const logout = new URLPattern({
    pathname: "/logout",
  });

  if (register.test(url)) {
    return new Response("Register page");
  } else if (login.test(url)) {
    return new Response("login page");
  } else if (logout.test(url)) {
    return new Response("logout PAge");
  } else {
    return new Response("404 not found");
  }
}

Deno.serve(handler);
