"use client"
import Script from 'next/script'
export default function RootLayout({ children }) {
  const fetchData = async () => {
    const headerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=header`);
    const headerData = await headerRes.json();
    // Aquí puedes hacer algo con headerData si es necesario
    const footerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=footer`);
    const footerData = await footerRes.json();
    // Aquí puedes hacer algo con footerData si es necesario
  };
  return (
    <html lang="en">
    <head>
    <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" /> 
    </head>
    <body >
<div>  
<style dangerouslySetInnerHTML={{ __html: headerData.data[0].css_code }} />
<div dangerouslySetInnerHTML={{ __html: headerData.data[0].html_code }} />
</div>   

      <div>
      {children}
     </div>
    
      <div>   
      <style dangerouslySetInnerHTML={{ __html: footerData.data[0].css_code }} />
<div dangerouslySetInnerHTML={{ __html: footerData.data[0].html_code }} />
</div>
    </body>  </html>
  );
}