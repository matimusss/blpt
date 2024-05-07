//nextjs
//import type { Metadata } from "next";
//import { Inter } from "next/font/google";
//import "./globals.css";
//const inter = Inter({ subsets: ["latin"] });
//mntn
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
// AL PARECER, NI HOOKS NI FORMS...
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import {HeaderTabs} from '../lib/HeaderTabs/HeaderTabs';
import {FooterLinks} from '../lib/FooterLinks/FooterLinks';
//export const metadata: Metadata = {
//  title: "Prueba BOILERPLATE cf",
//  description: "satoriDev",
//};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <ColorSchemeScript />
    </head>
    <body >
      <MantineProvider>
      <div><HeaderTabs /></div>   
      {children}
      <div><FooterLinks /></div>
      </MantineProvider>
    </body>
  </html>
  );
}

