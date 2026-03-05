"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Government of Canada bar */}
      <div className="bg-gc-blue text-white">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              aria-hidden="true"
            >
              <rect width="8" height="20" fill="#FF0000" />
              <rect x="8" width="14" height="20" fill="#FFFFFF" />
              <rect x="22" width="8" height="20" fill="#FF0000" />
              <path
                d="M15 3 L16.5 7 L14 6 L12.5 8 L13 6 L11 6.5 L13 5 L12 3.5 L14 4.5 L15 3Z"
                fill="#FF0000"
              />
            </svg>
            <span className="text-sm font-semibold tracking-wide">
              Canada.ca
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <button className="hover:underline" aria-label="Switch to French">
              Fran&ccedil;ais
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-gc-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-gc-blue-light font-bold text-lg no-underline hover:no-underline"
            >
              <span className="text-gc-red">GreenHome</span> Canada
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link
                href="/grants"
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                Grants
              </Link>
              <Link
                href="/eligibility"
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                Eligibility
              </Link>
              <Link
                href="/apply"
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                Apply
              </Link>
              <Link
                href="/validation"
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                Validation
              </Link>
              <Link
                href="/dashboard"
                className="text-gc-blue hover:text-gc-accent no-underline"
              >
                My Dashboard
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
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
                  href="/grants"
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Grants
                </Link>
                <Link
                  href="/eligibility"
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Eligibility
                </Link>
                <Link
                  href="/apply"
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Apply
                </Link>
                <Link
                  href="/validation"
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Validation
                </Link>
                <Link
                  href="/dashboard"
                  className="px-3 py-2 text-gc-blue hover:bg-gc-gray-light rounded no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  My Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
