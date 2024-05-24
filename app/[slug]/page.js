export async function generateStaticParams() {
 
    const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json())
 
    return posts.data.map((post) => ({
      slug: post.slug,
    }))
}










export default async function Page({ params }) {
  const slugs = {params}
  async function fetching2() {
    const response2 = await  fetch(`https://sonicjs-cf2.pages.dev/v1/pages?filters[slug][$eq]=${params}`).then((res) => res.json());
    return response2.data.map((post2) => ({
      slug: post2.slug,
      name: post2.name,
      css: post2.css_code,
      html: post2.html_code,
    }));}
    const respuesta2 = await fetching2();
    return (
    <div>           
   {response2.slug}
   {response2.name}
   {response2.html}
   {response2.css}
    </div>
  );
}