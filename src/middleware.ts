import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublicPath =
    path === "/" || path === "/register" || path === "/verifyemail";

  const home = path === "/";

  const tokken = req.cookies.get("tokken")?.value || "";

  if (isPublicPath && tokken && !home) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }
  if (!isPublicPath && !tokken && home) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/register", "/verifyemail"],
};
