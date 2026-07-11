import logo from "../../assets/images/branding/logo.png"
export default function Footer() {
  return (
    <>
    <style>
      {`
        .footer a{
        display:block;
        font-size:11px;
        margin-bottom:8px;
        }
        
      `}
    </style>
      <footer className="footer bg-[#B36D671C] mt-16">
        {/* Main Footer */}
        <div className="px-6 pt-12 mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo */}
            <div className="m-auto lg:m-0">
              <img src={logo} alt="logo" className="w-36 mix-blend-multiply" />
            </div>

            {/* Our Info */}
            <div className="text-center lg:text-start">
              <ul className="space-y-3">
                <li>
                  <h3 className="mb-5 text-lg tracking-wide uppercase">
                    Our Info
                  </h3>

                  <a href="/about" className="transition hover:opacity-70">
                    About
                  </a>

                  <a href="/shop" className="transition hover:opacity-70">
                    Shop
                  </a>

                  <a href="/faq" className="transition hover:opacity-70">
                    FAQ
                  </a>

                  <a href="/find-store" className="transition hover:opacity-70">
                    Find Store
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="text-center lg:text-start">
              <ul className="space-y-3 ">
                <li>
                  <h3 className="mb-5 text-lg tracking-wide uppercase">
                    Policies
                  </h3>
                  <a
                    href="/privacy-policy"
                    className="transition hover:opacity-70"
                  >
                    Privacy Policy
                  </a>

                  <a
                    href="/refund-policy"
                    className="transition hover:opacity-70"
                  >
                    Return & Refund Policy
                  </a>

                  <a href="/terms" className="transition hover:opacity-70">
                    Terms Of Service
                  </a>

                  <a href="/contact" className="transition hover:opacity-70">
                    Contact Information
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="px-3.5 text-center lg:text-start">
              <h3 className="mb-4.5 text-lg uppercase tracking-wide">
                Contact Us
              </h3>

              <p className="mb-3 leading-relaxed">
                FOR ANY HELP YOU MAY CALL US AT
              </p>

              <div className="space-y-1 text-sm">
                <p>
                  <span className="mt-2 font-semibold">Phone:</span> +880
                  9639279955
                </p>

                <p>
                  <span className="mt-10 font-semibold">Email:</span>{" "}
                  Info@Voyagetm.Com
                </p>

                <p>Open 24 Hours A Day, 7 Days A Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden border-t border-black/10 lg:block" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 px-6 py-5 mx-auto max-w-7xl md:flex-row md:items-center md:justify-between">
          <p className="mt-2 mb-10 text-center lg:text-left">
            © Copyright Reserved to{" "}
            <span className="font-semibold">Voyage</span>
          </p>

          <div className="items-center justify-center hidden gap-3 lg:flex md:flex lg:justify-end">
            <img src=" " alt="Visa" className="w-auto h-8" />

            <img src="/ " alt="PayPal" className="w-auto h-8" />

            <img
              src=" "
              alt="MasterCard"
              className="w-auto h-8"
            />

            <img
              src=" "
              alt="American Express"
              className="w-auto h-8"
            />
          </div>
        </div>
      </footer>
    </>
  )
}
