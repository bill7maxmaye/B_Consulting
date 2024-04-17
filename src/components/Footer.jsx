/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

//images

//icons
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl border-t border-gray-400">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              className="h-16 w-16 rounded-full"
              src="/images/logo.jpg"
              alt="brandlogo"
            />
          </Link>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-700 leading-6">
              Welcome to Abd International Consulatancy, your trusted partner in
              the journey towards higher education in the world's top
              universities.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div className="hidden lg:block"></div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Services
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                >
                  Tax and Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                >
                  Investment
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                >
                  Business Consultancy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Company</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500"
                >
                  Our Consultants
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Support</p>
            <p className="text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-gray-500">
              If you have a general enquiry, please drop us an email Email:
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Headstart. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a className="text-gray-500 hover:text-[#2447f6fa] cursor-pointer text-2xl duration-300 transition-colors">
            <RiFacebookFill />
          </a>
          <a className="ml-4 text-gray-500 hover:text-[#26a7de] cursor-pointer text-2xl duration-300 transition-colors">
            <RiTwitterFill />
          </a>
          <a className="ml-4 text-gray-500 hover:text-[#e2457a] cursor-pointer text-2xl duration-300 transition-colors">
            <RiInstagramFill />
          </a>
          <a className="ml-4 text-gray-500 hover:text-[#CD201F] cursor-pointer text-2xl duration-300 transition-colors">
            <RiYoutubeFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
