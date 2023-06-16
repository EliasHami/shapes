import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const users = await prisma.users.findMany();

  return NextResponse.json({ users });
}
