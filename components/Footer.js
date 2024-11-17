// Include the New Gear Day, Subscriptions. and the footer

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewGearDay from "./NewGearDay";
import GearExchange from "./GearExchange";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <>
      <NewGearDay />
      <GearExchange />
      <FooterLinks />
    </>
  );
}
