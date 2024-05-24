export async function generateStaticParams() {
  const response = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json());

  return response.data.map((post) => ({
      id: post.ID.toString(),
      name: post.name,
      slug: post.slug,
      htmlCode: post.html_code,
      cssCode: post.css_code,
      createdOn: new Date(post.createdOn),
      updatedOn: new Date(post.updatedOn),
      total: post.total
  }));
}

  


  export default function Page({ params }) {
    const { slug } = params.slug;
  
    return (
      <div>           
        probando generateStaticParams...
        slug es : {slug}
      
      </div>
    );
  }
  