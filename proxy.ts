import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all request paths except for:
  // - API routes
  // - _next static files and image optimization files
  // - Static assets (images, icons, etc. ending in file extensions)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
