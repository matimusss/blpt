export async function generateStaticParams() {
  const response = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json());

  return response.data.map((post) => ({
      slug: post.slug,
      name: post.name,
      css: post.css_code,
      html: post.html_code,
      

  }));
}

  


  export default function Page({ params }) {
    return (
      <div>           
        probando generateStaticParams...
        NAME es : {params.name}
        slug es : {params.slug}
        css es : {params.css}
        html es : {params.html}
      
      </div>
    );
  }
  