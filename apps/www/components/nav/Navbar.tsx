"use client";

import React from "react";
import MobileNavBar from "./MobileNavBar";
import MainNavBar from "./MainNavBar";
import { cn } from "@/lib/utils";

function Navbar() {
    return (
        <nav
            className={cn(
                "flex w-full h-16 items-center px-8 py-4 bg-[#070d23] text-light_text_black  dark:bg-dark_bg dark:text-dark_text_white",
            )}
        >
            <MainNavBar />
            <MobileNavBar />
        </nav>
    );
}

export default Navbar;
