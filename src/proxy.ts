import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

function preferredLocale(request: NextRequest): Locale {
  const savedLocale = request.cookies.get("alvara-locale")?.value;
  if (savedLocale && isLocale(savedLocale)) return savedLocale;

  const accepted = request.headers.get("accept-language") ?? "";
  const languages = accepted
    .split(",")
    .map((entry) => {
      const [tag, quality = "q=1"] = entry.trim().split(";");
      return { locale: tag.toLowerCase().split("-")[0], quality: Number(quality.replace("q=", "")) || 0 };
    })
    .sort((a, b) => b.quality - a.quality);

  return languages.find(({ locale }) => isLocale(locale))?.locale as Locale ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameLocale = pathname.split("/")[1];
  if (isLocale(pathnameLocale)) return NextResponse.next();

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.svg|.*\\..*).*)"],
};
