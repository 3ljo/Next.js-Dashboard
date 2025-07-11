import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Header Section */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      {/* Main Content */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* Decorative Triangle */}
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-transparent border-b-black" />

          {/* Welcome Text */}
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a
              href="https://nextjs.org/learn/"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          {/* Login Button */}
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Hero Images Section */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Mobile Hero Image */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
            priority
          />

          {/* Desktop Hero Image */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority
          />
        </div>
      </div>
    </main>
  );
}
