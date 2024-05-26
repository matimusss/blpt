 export async function generateStaticParams() {
    const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json())

    return posts.data.map((post) => ({
      slug: post.slug,
    }))



  }
export default async function Page({ params }) {
  const slug = params;
  //const pageRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/pages?filters[slug][$eq]=${slug.slug}`).then((res) =>    res.json(),
  //{
  //  next: { revalidate: 0 } 
  //});
  //const pageData = await pageRes.json();

// <style dangerouslySetInnerHTML={{ __html: response2.data[0].css_code }} />
// {response2.data[0].html_code} ese funca
//<div dangerouslySetInnerHTML={{ __html: pageData.data[0].html_code }} />
  return (
     <div>       

    </div>
  );
}