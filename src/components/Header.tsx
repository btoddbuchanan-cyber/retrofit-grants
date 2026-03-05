"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CanadaFlag from "./CanadaFlag";
import { useDictionary } from "./DictionaryProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dict, locale } = useDictionary();
  const pathname = usePathname();

  // Build the language toggle URL: strip current locale, prepend the other
  const otherLocale = locale === "en" ? "fr" : "en";
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, "") || "/";
  const switchHref = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <header>
      {/* Government of Canada bar */}
      <div className="bg-gc-blue text-white">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CanadaFlag width={36} alt={dict.common.flagAlt} />
            <span className="text-sm font-semibold tracking-wide">
              {dict.nav.canadaCa}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link
              href={switchHref}
              className="text-white hover:underline no-underline"
              aria-label={dict.nav.switchLangLabel}
            >
              {dict.nav.switchLang}
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-gc-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href={`/${locale}`}
              className="text-gc-blue-light font-bold text-lg no-underline hover:no-underline"
            >
              <span className="text-gc-red">{dict.nav.siteNameAccent}</span>{" "}
              {dict.nav.siteName}
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link
                href={`/${locale}/grants`}
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                {dict.nav.grants}
              </Link>
              <Link
                href={`/${locale}/eligibility`}
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                {dict.nav.eligibility}
              </Link>
              <Link
                href={`/${locale}/apply`}
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                {dict.nav.apply}
              </Link>
              <Link
                href={`/${locale}/validation`}
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                {dict.nav.validation}
              </Link>
              <Link
                href={`/${locale}/dashboard`}
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                {dict.nav.dashboard}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={dict.nav.toggleMenu}
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-gc-border">
              <div className="flex flex-col gap-2 pt-4">
                <Link
                  href={`/${locale}/grants`}
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav.grants}
                </Link>
                <Link
                  href={`/${locale}/eligibility`}
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav.eligibility}
                </Link>
                <Link
                  href={`/${locale}/apply`}
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav.apply}
                </Link>
                <Link
                  href={`/${locale}/validation`}
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav.validation}
                </Link>
                <Link
                  href={`/${locale}/dashboard`}
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav.dashboard}
                </Link>
                <Link
                  href={switchHref}
                  className="px-3 py-2 text-gc-accent hover:bg-gc-gray-light rounded no-underline font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav.switchLang}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
