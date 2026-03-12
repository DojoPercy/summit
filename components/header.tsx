"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { motion as _motion, AnimatePresence } from "framer-motion";
import images from "@/lib/images";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Workaround for framer-motion + TS intrinsic element typing with React 19
const motion: any = _motion as any;

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programme & Awards", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {/* Thin gold accent bar at very top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent w-full" />
      <nav className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-display text-2xl font-bold hover:text-primary transition-colors"
        >
          <div className="relative h-20 w-60 sm:w-48">
            <Image
              src={images.logoGold}
              className="scale-150"
              alt="Hotelier Africa"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-widest font-bold transition-colors relative pb-1 ${
                pathname === item.href
                  ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-background border-l border-border p-0"
            >
              <SheetHeader className="p-6 border-b border-border">
                <SheetTitle className="text-left font-display text-xl font-bold text-accent">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-8 py-4 text-lg font-medium transition-colors border-l-2 ${
                      pathname === item.href
                        ? "text-accent border-accent bg-accent/5"
                        : "text-foreground/70 border-transparent hover:text-foreground hover:bg-secondary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="mt-8 px-8 py-4 flex items-center justify-between border-t border-border/50">
                  <span className="text-sm font-medium text-foreground/50">
                    Theme Mode
                  </span>
                  <ThemeToggle />
                </div>

                <div className="mt-auto p-8">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground"
                  >
                    <Link href="/contact">Register Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA Button */}
        <Button
          asChild
          className="hidden md:flex ml-4 bg-accent text-accent-foreground hover:bg-primary"
        >
          <Link href="/contact">Register Now</Link>
        </Button>
      </nav>
    </motion.header>
  );
}
