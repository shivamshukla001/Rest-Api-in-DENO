interface user {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  Country: string;
}

async function handler(req: Request) {
  const file = await Deno.readTextFile("./users.json");
  const users: user[] = JSON.parse(file);

  const url = new URL(req.url);

  const singleUser = new URLPattern({
    pathname: "/user/:id",
  });

  const countryParams = url.searchParams.get("country");
  // console.log(countryParams);
  if (countryParams !== null) {
    const ReturnCountry = [];
    for (const user of users) {
      if (user.Country === countryParams) {
        ReturnCountry.push(user);
      }
    }

    return new Response(JSON.stringify(ReturnCountry), {
      headers: { "content-type": "application/json" },
    });
  }

  if (singleUser.test(url)) {
    const match = singleUser.exec(url);
    const lookforit = Number(match?.pathname.groups.id);
    const MatchingUsers = users.find((user) => user.id === lookforit);
    // console.log(MatchingUsers);

    return new Response(JSON.stringify(MatchingUsers), {
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  return new Response("no user Found");
}

Deno.serve(handler);
