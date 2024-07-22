//generamos una pagian por cada producto

export async function generateStaticParams() {
 // var Slugify = require('slugifyjs').fromLocale('en');
  //slug: Slugify.parse(post.title),
  
  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/product-full-details').then((res) => res.json())
    return posts.data.map((post) => ({ 
      slug: post.slug,
    }))
}

//asdasd

export default async function Page({ params }) {

  const slug = params;
 // const blogData = await 
// const blogData = await fetch(`https://sonicjs-cf2.pages.dev/v1/nc/product_full_details?filters[slug][$eq]=${slug.slug}`).then((res) =>    res.json());
 const blogData = await fetch(`https://sonicjs-cf2.pages.dev/v1/product-full-details`).then((res) =>    res.json());

  return (
     <div>       
   <div dangerouslySetInnerHTML={{ __html: blogData.data[0].product_name }} />
  <div dangerouslySetInnerHTML={{ __html: blogData.data[0].product_description }} />
    </div>
  );
}