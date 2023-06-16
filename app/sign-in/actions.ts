"use server";
import { cookies } from "next/headers";

import { prisma } from "@/db";

export const signIn = async (email: string, password: string) => {
  const user = await prisma.users.findFirst({
    where: {
      Email: email,
      Password: password,
    },
  });

  if (!user) {
    throw new Error("Invalid username or password");
  } else {
    cookies().set("auth", user.Id);
  }
};
