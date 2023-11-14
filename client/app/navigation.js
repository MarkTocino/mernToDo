'use client'
import React,{ useState } from "react";
import {NavbarMenu, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import Link from "next/link"
import { CartContext } from "./CartContext/CartContext";
import { useContext } from "react";
import GetCar from "./helpers/cars";
export default function Navigation () {
  const cart = useContext(CartContext)
  const {isOpen,onOpen,onClose} = useDisclosure()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  const { getTotalCost } = useContext(CartContext)
  console.log(cart.items)
  const checkout = async() => {
    await fetch('https://enthusiastic-puce-dove.cyclic.app/checkout', {
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({items:cart.items})
    }).then((response) => {
     return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url);
      }
    })
  }
  const menuItems = [
    'Vehicles',
  ]
return (
    <Navbar className="justify-end" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent className="sm:justify-center">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand className="collapse sm:visible md:visible xl:36 w-16 sm:justify-start md:justify-start lg:justify-start">
        <a href="/" className="font-bold text-inherit">
            <img className="h-8 flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png"/>
        </a>
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent className="sm:flex gap-4 p-0" justify="end">
      <NavbarItem className="hidden sm:flex">
        <Link href="/vehicles">
          VEHICLES
        </Link>
      </NavbarItem>
      <NavbarItem className="hidden sm:flex">
        <Link href="/merchandise">
          MERCHANDISE
        </Link>
      </NavbarItem>
      <NavbarItem className="hidden sm:flex">
        <Link href="/accessories">
          ACCESSORIES
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button onPress={onOpen} className="text-md text-blue-500 p-0" color="">CART ({productsCount} Items)</Button>
        <Modal scrollBehavior="inside" size='sm' placement={"bottom"} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="flex max-h-height">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Shopping Cart</ModalHeader>
              <ModalBody>
                {productsCount > 0 ? 
                <div>
                <p>Items in your cart</p>
                {cart.items?.map((currentProduct,idx) => (
                  <GetCar key={idx} id={currentProduct.id} model={currentProduct.model} image={currentProduct.image} quantity={currentProduct.quantity}/>
                ))}
                <h1>Total : ${getTotalCost}</h1>
                </div> : "Shopping Cart Empty"}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary"  onClick={checkout}>
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