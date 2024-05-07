"use client"
//import Image from "next/image";
import { ContactUs} from '../components/ContactUs/ContactUs';
import {CarouselCard} from '../components/CarouselCard/CarouselCard';
import {HeaderTabs} from '../lib/HeaderTabs/HeaderTabs';
import {FooterLinks} from '../lib/FooterLinks/FooterLinks';
import {TableSort} from '../lib/TableSort/TableSort';
import {Link} from "next/link";

export default function Home() {
  return (
   <div>   
<div><HeaderTabs /></div>          
<div><ContactUs /></div>          
<div><CarouselCard /></div>
<div><TableSort /></div> 
<div><FooterLinks /></div>
  </div>
    <Button component={Link} href="/hello">
    Next link button
  </Button>
  );
}
