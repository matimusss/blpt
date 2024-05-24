async function fetching() {
  const response = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json());
  return response.data.map((post) => ({
    slug: post.slug,
    name: post.name,
  }));
  
  const respuesta = await fetching();
  const allSlugs = respuesta.map((rta) => rta.slug);
  const allNames = respuesta.map((rta) => rta.name);
}

export async function generateStaticParams() {
  return allSlugs;
}

export default function Page({ params }) {
  return (
    <div>           
  
    </div>
  );
}