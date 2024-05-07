"use client"
//import Image from "next/image";
import { ContactUs} from '../components/ContactUs/ContactUs';
import Link from "next/link";
import { Button } from '@mantine/core';

export default function Home() {
  return (
   <div>           
<div><ContactUs /></div>          

<Button component={Link} href="/test">  Next link button  </Button>

  </div>

  );
}
