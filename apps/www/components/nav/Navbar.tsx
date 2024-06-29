"use client";

import React from "react";
import MobileNavBar from "./MobileNavBar";
import MainNavBar from "./MainNavBar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Navbar() {
    const path = usePathname();

    const hiddenPaths = ["/stream", "/login", "/register", "/register/artist", "/register/fan"];
    const shouldHideNavbar = hiddenPaths.includes(path);
    if (shouldHideNavbar) {
        return null;
    }

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
