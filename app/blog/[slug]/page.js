
export async function generateStaticParams() {
 // var Slugify = require('slugifyjs').fromLocale('en');
  //slug: Slugify.parse(post.title),
  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/posts').then((res) => res.json())
    return posts.data.map((post) => ({ 
      slug: post.slug,
    }))
}






export default async function Page({ params }) {

  const slug = params;
 // const blogData = await 
/ fetch(`https://sonicjs-cf2.pages.dev/v1/posts?filters[slug][$eq]=${slug.slug}`).then((res) =>    res.json());

  return (
     <div>       
   <div dangerouslySetInnerHTML={{ __html: blogData.data[0].title }} />
  <div dangerouslySetInnerHTML={{ __html: blogData.data[0].body }} />
    </div>
  );
}