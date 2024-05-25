import Script from 'next/script'

export default  async function RootLayout({ children }) {
 
    
        const headerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=header`);

      const footerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=footer`);
 

  return (
    <html lang="en">
    <head>
    <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" /> 
    </head>
    <body >
<div>  
<div dangerouslySetInnerHTML={{ __html: headerRes.data[0].html_code }} />
</div>   

      <div>
      {children}
     </div>
    
      <div>   

<div dangerouslySetInnerHTML={{ __html: footerRes.data[0].html_code }} />
</div>
    </body>  </html>
  );
}