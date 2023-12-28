"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <div className="bg-white pt-5 pb-5">
        <nav className="container mx-auto flex items-center justify-between p-2 md:p-0">
          <div className="logo">
            <Link href="/">
              <span className="md:hidden">
                <Image
                  src={"/chillo-services.webp"}
                  alt={"chillo service"}
                  width={256}
                  height={70}
                />
              </span>
              <span className="hidden md:block">
                <Image
                  src={"/chillo-services.webp"}
                  alt={"chillo service"}
                  width={256}
                  height={70}
                />
              </span>
            </Link>
          </div>
          <div className="nav">
            <div className="sm-header-links md:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-7 w-7 font-extralight text-blue-700"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="md-header-links hidden md:flex">
              <Link
                className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                href="/#a-propos-de-nous"
              >
                Qui sommes nous ?
              </Link>
              <Link
                className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                href="/#notre-expertise"
              >
                Notre expertise
              </Link>
              <Link
                className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                href="/#ils-nous-font-confiance"
              >
                Nos références
              </Link>
              <Link
                className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                href="/coaching"
              >
                Coaching
              </Link>
              <Link
                className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                href="/formations"
              >
                Nos formations
              </Link>
              <Link
                className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                href="/nos-postes"
              >
                Rejoignez nous
              </Link>
              <Link
                className="block py-6 px-2 text-gray-500 font-light text-lg hover:text-green-500 transition duration-300"
                href="/nous-contacter"
              >
                Contactez nous
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center top-0 right-0 left-0 bottom-0 bg-white hidden h-0">
        <button type="button">
          <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300">
            Qui sommes nous ?
          </span>
        </button>
        <button type="button">
          <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300">
            Notre expertise
          </span>
        </button>
        <button type="button">
          <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300">
            Nos références
          </span>
        </button>
        <button type="button">
          <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300">
            Coaching
          </span>
        </button>
        <button type="button">
          <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300">
            Nos formations
          </span>
        </button>

        <button type="button">
          <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300">
            Rejoignez nous
          </span>
        </button>
        <button type="button">
          <span className="md:py-6 md:px-2 py-4 block text-gray-500 font-light text-lg hover:text-green-500 transition duration-300">
            Contactez nous
          </span>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
