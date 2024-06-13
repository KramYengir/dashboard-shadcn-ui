"use client";
import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";

import {
  LayoutDashboard,
  Newspaper,
  Folders,
  Settings,
  User,
  CreditCard,
  MoveRight,
  MoveLeft,
  AlignRight,
  ArrowRightCircle,
  ArrowRight,
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  let displayState = isOpen ? "block" : "hidden";
  let buttonPosition = isOpen ? "right-0" : "left-0";

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className={`${buttonPosition} md:hidden fixed top-[60vh] z-20 `}
      >
        {isOpen ? <ArrowLeftToLineIcon /> : <ArrowRightToLineIcon />}
      </Button>
      <Command
        className={`${displayState} md:block absolute z-10 md:relative min-w-[100vw] md:min-w-0 md:max-w-[300px] min-h-[100vh] bg-secondary rounded-none`}
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/" onClick={() => setIsOpen(!isOpen)}>
                Dashboard
              </Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <Link href="/posts" onClick={() => setIsOpen(!isOpen)}>
                Posts
              </Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/categories" onClick={() => setIsOpen(!isOpen)}>
                Categories
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <Link href="/profile" onClick={() => setIsOpen(!isOpen)}>
                Profile
              </Link>
              <CommandShortcut>Cmd+P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <Link href="/billing" onClick={() => setIsOpen(!isOpen)}>
                Billing
              </Link>
              <CommandShortcut>Cmd+B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <Link href="/settings" onClick={() => setIsOpen(!isOpen)}>
                Settings
              </Link>
              <CommandShortcut>Cmd+S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
};

export default Sidebar;
