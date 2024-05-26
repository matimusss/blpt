
export async function generateStaticParams() {
  var Slugify = require('slugifyjs').fromLocale('en');



  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/posts').then((res) => res.json())
    return posts.data.map((post) => ({ 
      slug: Slugify.parse(post.title),
    }))
}






export default async function Page({ params }) {
  const slug = params.slug;
const title = params.title
  const blogData = await 
  fetch(`https://sonicjs-cf2.pages.dev/v1/posts?filters[title][$eq]=${title}`).then((res) =>    res.json());
 


  return (
     <div>       
  <div dangerouslySetInnerHTML={{ __html: blogData.data[0].title }} />
  <div dangerouslySetInnerHTML={{ __html: blogData.data[0].body }} />
    </div>
  );
}