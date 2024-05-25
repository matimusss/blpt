import Script from 'next/script'

export default  async function Layout({ children }) {
        const headerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=header`);
     const footerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=footer`);
   
     const headerData = await headerRes.json();
     const footerData = await footerRes.json();

     console.log(headerData);
   console.log(footerData);
   console.log(headerData.data);
   console.log(footerData.data);
   //8/
   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd
   //8/   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd
   //8/   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd
   //8/   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd   //8/
   ///as/da/sd/asd/asd
   //8/
   ///as/da/sd/asd/asd
     return (
    <html lang="en">
    <head>
    <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" /> 
    </head>
    <body >
<div>  
<div dangerouslySetInnerHTML={{ __html: headerData.data[0].html_code }} />
</div>   

      <div>
      {children}
     </div>
    
      <div>   

<div dangerouslySetInnerHTML={{ __html: footerData.data[0].html_code }} />
</div>
    </body>  </html>
  );
}