'use client'
import React,{ useState } from "react";
import {NavbarMenu, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
export default function Navigation () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
      'Vehicles',
      'Shopping Tools',
      'Explore',
      'Compare',
    ]
return (
    <Navbar className="max-w-screen justify-end" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent className="sm:justify-center">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand className="flex lg:justify-end justify-center">
        <a href="/" className="font-bold text-inherit">
                <img className="h-8 flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png"/>
        </a>
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent className="hidden sm:flex gap-4 p-0" justify="end">
      <NavbarItem>
        <Link href="/vehicles">
          VEHICLES
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/shoppingtools'>SHOPPING TOOLS</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/explore">
          EXPLORE
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/compare">
        COMPARE
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full"
            href={`/${item.toLowerCase()}`}
            size="lg">
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  )
  }