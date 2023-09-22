import getCategories from "@/actions/get-categories";
import Link from "@/node_modules/next/link";
import React from "react";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import Container from "./ui/Container";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b ">
      <Container>
        <div className="relative p-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
