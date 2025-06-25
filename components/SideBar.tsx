"use client";
import { sidebarlinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideBar() {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-secondary p-6 pt-12 text-secondary-foreground max-sm:hidden lg:w-[264px]">
   

      <div className="flex flex-col gap-3">
         <div className="relative w-40 h-10">
          <h1
    className="object-contain cursor-pointer transition-transform duration-200 hover:scale-105 text-foreground font-extrabold  sm:text-lg lg:text-4xl"
          >
           EASE 
  </h1>
   
  
</div>
      {sidebarlinks.map((link) => {
  const normalize = (path: string) => path.replace(/^\/+/, ''); 
  const isActive =
    normalize(pathname) === normalize(link.route) ||
    normalize(pathname).startsWith(normalize(link.route) + '/');

  return (
    <Link
      href={link.route}
      key={link.label}
      className={cn(
        "flex gap-4 items-center p-3 hover:bg-accent hover:text-accent-foreground font-semibold rounded-lg justify-start",
        { "bg-accent": isActive }
      )}
    >
      <Image src={link.imgUrl} width={24} height={24} alt={link.label} />
      <p className="text-lg font-semibold max-lg:hidden">
        {link.label}
      </p>
    </Link>
  );
})}
      </div>
    </section>
  );
}

export default SideBar;
