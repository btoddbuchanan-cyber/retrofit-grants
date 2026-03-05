import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gc-blue text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">GreenHome Canada</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The Canada Greener Homes Retrofit Grant helps homeowners make
              energy-efficient upgrades to reduce emissions and save on energy
              costs.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/grants"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Available Grants
                </Link>
              </li>
              <li>
                <Link
                  href="/eligibility"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Check Eligibility
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/validation"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  Submit Validation
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>1-800-O-Canada (1-800-622-6232)</li>
              <li>TTY: 1-800-926-9105</li>
              <li>
                <a
                  href="mailto:info@greenhome.gc.ca"
                  className="text-gray-300 hover:text-white no-underline"
                >
                  info@greenhome.gc.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="16"
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
            <span className="text-sm">Government of Canada</span>
          </div>
          <div className="text-xs text-gray-400 flex gap-4">
            <a href="#" className="hover:text-white no-underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white no-underline">
              Privacy
            </a>
            <a href="#" className="hover:text-white no-underline">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
