"use client"
//import Image from "next/image";
import { ContactUs} from '../../components/ContactUs/ContactUs';
import {CarouselCard} from '../../components/CarouselCard/CarouselCard';
import {HeaderTabs} from '../../lib/HeaderTabs/HeaderTabs';
import {FooterLinks} from '../../lib/FooterLinks/FooterLinks';
import {TableSort} from '../../lib/TableSort/TableSort';


export default function Home() {
  return (
   <div>
<div><HeaderTabs /></div>          
<div><FooterLinks /></div>
  </div>


  );
}
