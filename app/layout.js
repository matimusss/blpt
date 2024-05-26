export const dynamic = 'force-dynamic';
import Script from 'next/script'

export default  async function Layout({ children }) {
    const timestamp = new Date().getTime();
    const headerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=header&timestamp=${timestamp}`,
    {
			next: { revalidate: 0 } 
    })
    ;

    const footerRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/assets?filters[name][$eq]=footer&timestamp=${timestamp}`,
    {
			next: { revalidate: 0 } 
		}) ;


     const headerData = await headerRes.json();
     const footerData = await footerRes.json();

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