import Script from 'next/script'

export default  function RootLayout({ children }) {
 
    async function fetchHeader() {
        const headerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=header`);
        const headerData = await headerRes.json();
        return { headerData};
      }    

      async function fetchFooter() {
      const footerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=footer`);
        const footerData = await footerRes.json();
      return {footerData };
      }    


      const headerData = fetchHeader();
  const footerData = fetchFooter();

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