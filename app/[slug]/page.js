export async function generateStaticParams() {
    const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json())
    return posts.data.map((post) => ({
      slug: post.slug,
    }))
}










export default async function Page({ params }) {
  const slug = params;
    const response2 = await
     fetch(`https://sonicjs-cf2.pages.dev/v1/pages?filters[slug][$eq]=${slug}`).then((res) =>
       res.json());
    const postData = response2.data; // Como la respuesta solo tiene un objeto, no necesitas mapear
  
    return (
     <div>       
          
   {params}
          
   {postData.name}
    </div>
  );
}