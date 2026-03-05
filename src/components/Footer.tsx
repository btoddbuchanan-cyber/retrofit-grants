"use client";

import Link from "next/link";
import CanadaFlag from "./CanadaFlag";
import { useDictionary } from "./DictionaryProvider";

export default function Footer() {
  const { dict, locale } = useDictionary();

  return (
    <footer className="bg-gc-blue text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{dict.footer.siteTitle}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {dict.footer.siteDescription}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/grants`}
                  className="text-gray-300 hover:text-white no-underline"
                >
                  {dict.footer.availableGrants}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/eligibility`}
                  className="text-gray-300 hover:text-white no-underline"
                >
                  {dict.footer.checkEligibility}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/apply`}
                  className="text-gray-300 hover:text-white no-underline"
                >
                  {dict.footer.applyNow}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/validation`}
                  className="text-gray-300 hover:text-white no-underline"
                >
                  {dict.footer.submitValidation}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/dashboard`}
                  className="text-gray-300 hover:text-white no-underline"
                >
                  {dict.footer.myDashboard}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{dict.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{dict.footer.phone}</li>
              <li>{dict.footer.tty}</li>
              <li>
                <a
                  href={`mailto:${dict.footer.email}`}
                  className="text-gray-300 hover:text-white no-underline"
                >
                  {dict.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <CanadaFlag width={30} alt={dict.common.flagAlt} />
            <span className="text-sm">{dict.common.governmentOf}</span>
          </div>
          <div className="text-xs text-gray-400 flex gap-4">
            <a href="#" className="hover:text-white no-underline">
              {dict.footer.terms}
            </a>
            <a href="#" className="hover:text-white no-underline">
              {dict.footer.privacy}
            </a>
            <a href="#" className="hover:text-white no-underline">
              {dict.footer.accessibility}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
