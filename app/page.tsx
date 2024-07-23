"use client"

//import Image from "next/image";
export default async function Home() {
  const homeRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/nc/assets?filters[name][$eq]=home`);
  const homeData = await homeRes.json();
return (
<div>
<div>  
<div dangerouslySetInnerHTML={{ __html: homeData.data[0].html_code }} />
</div>   
</div>
  );
}