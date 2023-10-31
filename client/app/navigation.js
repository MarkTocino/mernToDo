'use client'
import React,{ useState } from "react";
import {NavbarMenu, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { CartContext } from "./CartContext/CartContext";
import { useContext } from "react";
export default function Navigation () {
  const cart = useContext(CartContext)
  const {isOpen,onOpen,onOpenChange} = useDisclosure()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  const menuItems = [
    'Vehicles',
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
        <Button onPress={onOpen} className="text-md text-blue-500" color="">CART ({productsCount} Items)</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Shopping Cart</ModalHeader>
              <ModalBody>
                {productsCount > 0 ? 
                <>
                <p>Items in your cart</p>
                {cart.items.map((currentProduct,idx) => (
                  <h1>{currentProduct.id}</h1>
                ))}
                <h1>Total : ${cart.getTotalCost()}</h1>
                </> : ""}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Buy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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