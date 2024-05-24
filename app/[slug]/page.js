export async function fetching() {
  const response = await fetch('https://sonicjs-cf2.pages.dev/v1/pages').then((res) => res.json());
  return response.data.map((post) => ({
    slug: post.slug,
    name: post.name,
  }));
}

export async function generateStaticParams() {
  const respuesta = await fetching();
  const allSlugs = respuesta.map((rta) => rta.slug);
  const allNames = respuesta.map((rta) => rta.name);
  return allSlugs;
}

export default function Page({ params }) {
  const [slugs, setSlugs] = useState([]);

  useEffect(() => {
    generateStaticParams().then((slugs) => {
      setSlugs(slugs);
    });
  }, []);

  return (
    <div>           
      probando generateStaticParams...
      {slugs.map((slug, index) => (
        <div key={index}>
          Slug {index}: {slug}
        </div>
      ))}
    </div>
  );
}
