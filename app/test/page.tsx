"use client"
//import Image from "next/image";
import { ContactUs} from '../../components/ContactUs/ContactUs';
import {CarouselCard} from '../../components/CarouselCard/CarouselCard';
import {HeaderTabs} from '../../lib/HeaderTabs/HeaderTabs';
import {FooterLinks} from '../../lib/FooterLinks/FooterLinks';
import {TableSort} from '../../lib/TableSort/TableSort';
import {CarouselCard} from '../components/CarouselCard/CarouselCard';
import Link from "next/link";
import { Button } from '@mantine/core';

export default function Home() {
  return (
   <div> 
    <div><CarouselCard /></div>
<Button component={Link} href="/">  home link button  </Button>   
  </div>


  );
}
