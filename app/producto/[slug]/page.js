import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// Componente EmblaCarousel
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}

// Función para obtener los parámetros estáticos
export async function generateStaticParams() {
  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/product-min-details').then((res) => res.json());
  return posts.map((post) => ({ 
    slug: post.slug,
  }));
}

// Función para reemplazar los marcadores de posición en el HTML y retornar elementos React
function replacePlaceholdersWithComponents(htmlString, data) {
  return ReactHtmlParser(htmlString, {
    replace: (domNode) => {
      if (domNode.type === 'tag' && domNode.name === 'div' && domNode.attribs && domNode.attribs.id === 'images_component') {
        return <EmblaCarousel />;
      }

      if (domNode.type === 'text' && domNode.data.includes('{{images_component}}')) {
        return <EmblaCarousel />;
      }

      if (domNode.type === 'text' && domNode.data.includes('{{')) {
        const key = domNode.data.replace('{{', '').replace('}}', '').trim();
        return data[key] || domNode.data;
      }
    },
  });
}

// Componente para la página del producto
export default async function Page({ params }) {
  const slug = params.slug;
  const blogData = await fetch(`https://sonicjs-cf2.pages.dev/v1/getProductBySlug/${slug}`).then((res) => res.json());

  // Fetch additional data if needed
  const productRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/nc/assets?filters[name][$eq]=product`);
  const productData = await productRes.json();
  
  // Extraer el código HTML desde la respuesta JSON
  const htmlTemplate = productData.data[0].html_code;
  
  console.log(htmlTemplate); // Verificar el contenido del HTML

  // Reemplaza los marcadores de posición con los valores del producto y componentes React
  const htmlContent = replacePlaceholdersWithComponents(htmlTemplate, blogData);

  // Renderiza el contenido reemplazado utilizando JSX
  return (
    <div>
      {htmlContent}
    </div>
  );
}
