import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get("auth");

  const usersJSON = await fetch("http://localhost:3000/sign-in/api");

  const users = (await usersJSON.json()).users;
  console.log("middleware", { users });
  if (!cookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  } else {
    // @ts-ignore
    if (!users.find((user) => user.Id === cookie?.value)) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    } else {
      return NextResponse.next();
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
