import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.url.includes("?token=")) {
	  return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/manager",
};
