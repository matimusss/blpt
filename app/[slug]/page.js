export async function generateStaticParams() {
  const response = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json());

  return response.data.map((post) => ({
      slug: post.slug,
  }));
}

  


  export default function Page({ params }) {
    const { slug } = params.slug;
    return (
      <div>           
        probando generateStaticParams...
        NAME es : {slug}
      
      </div>
    );
  }
  