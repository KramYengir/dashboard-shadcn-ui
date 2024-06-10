import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between text-white bg-primary dark:bg-slate-700 py-2 px-5 ">
      <Link href={"/"}>
        <Image src={Logo} alt="RigneyMade Logo" width={40}></Image>
      </Link>
    </div>
  );
};

export default Navbar;
