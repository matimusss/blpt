
export async function generateStaticParams() {
  var Slugify = require('slugifyjs').fromLocale('en');
  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/posts').then((res) => res.json())
    return posts.data.map((post) => ({
      slug: Slugify.parse(post.title),
    }))
}
export default async function Page({ params }) {
  const slug = params;

  //const response2 = await fetch(`https://sonicjs-cf2.pages.dev/v1/posts?filters[title][$eq]=${slug.slug}`).then((res) =>    res.json());
  //const blogData = await response2.json();
  // {response2.data[0].html_code} ese funca


  //<div dangerouslySetInnerHTML={{ __html: blogData.data[0].title }} />
  //<div dangerouslySetInnerHTML={{ __html: blogData.data[0].body }} />

  return (
     <div>       
TODO
    </div>
  );
}