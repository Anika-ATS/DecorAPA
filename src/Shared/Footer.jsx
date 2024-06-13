import React from "react";
import { Link } from "react-scroll";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
// import { BsGithub, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-3 bg-gradient-to-r from-cyan-900 to-teal-300 text-base-content rounded">
        <nav className="flex flex-col lg:flex-row justify-center gap-4  my-3">
          <li className="font-bold font-serif cursor-pointer flex items-center text-lg gap-2">
            <Link
              className="text-white text-2xl cursor-pointer"
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className="font-bold cursor-pointer flex items-center text-lg gap-2">
            <Link
              className="text-white text-2xl cursor-pointer"
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>

          <li className="font-bold cursor-pointer flex items-center text-lg gap-2">
            <Link
              className="text-white text-2xl cursor-pointer"
              activeClass="active"
              to="/products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Products
            </Link>
          </li>
        </nav>

        <nav className="flex flex-col md:flex-col lg:flex-col justify-center gap-4 lg:gap-3">
          <div className="flex justify-center gap-4 ">
            <a href="https://www.facebook.com/Anika.ATS?mibextid=ZbWKwL">
              <BiLogoFacebookCircle className="w-10 h-10"></BiLogoFacebookCircle>
            </a>
            <a href="https://instagram.com/tabassum___anika?igshid=OGQ5ZDc2ODk2ZA==">
              <BiLogoInstagramAlt className="w-10 h-10"></BiLogoInstagramAlt>
            </a>
            <a href="https://www.linkedin.com/in/anika-tabassum-052b7a291/">
              <BiLogoLinkedinSquare className="w-10 h-10"></BiLogoLinkedinSquare>
            </a>

            <a href="mailto:tabassumanika210@gmail.com">
              <MdOutlineMarkEmailUnread className="w-10 h-10"></MdOutlineMarkEmailUnread>
            </a>
          </div>

          <div className="flex justify-center gap-4 lg:gap-8 p-5">
            <div className="flex items-center ">
              <aside>
                <p>Copyright © 2024 - All right reserved by DecorAPA.</p>
              </aside>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
