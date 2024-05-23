export async function generateStaticParams() {
    const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json());
  
    return posts.map((post) => ({
      slug: post.slug,
 
    }));
  }
  


  export default function Page({ params }) {
    const { slug } = params;
  
    return (
      <div>           
        probando generateStaticParams...
        slug es : {slug}
      
      </div>
    );
  }
  