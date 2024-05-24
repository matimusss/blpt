


export async function generateStaticParams() {
  const response = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json());
  return response.data.map((post) => ({
      slug: post.slug,
      css: post.css_code,
    }));
}




  export default function Page({ params }) {
 const css = params.css;


    return (
      <div>           
        probando generateStaticParams...
        NAME es : {params.css}
        NAME es : {css}
        
      
      </div>
    );
  }
  