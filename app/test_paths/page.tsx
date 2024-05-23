// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
    name: post.name,
    code: post.html_code,
    style: post.css_code,
  }))
}

export default function Page({ params }) {
  const { slug } = params.slug;
  const { name } = params.name;
  const { code } = params.code;
  const { style } = params.style;
  
  return (
    <div>           
probando generateStaticParams...
slug es : {slug}
name es :{name}
code es :{code}
style es : {style}
   </div>
   );
}