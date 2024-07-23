import React from 'react';
import Carousel from './carousel'

// Función para obtener los parámetros estáticos
export async function generateStaticParams() {
  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/product-min-details').then((res) => res.json());
  return posts.map((post) => ({ 
    slug: post.slug,
  }));
}

// Función para reemplazar los marcadores de posición en el HTML
function replacePlaceholders(htmlString, data) { 
  return htmlString.replace(/{{(.*?)}}/g, (_, key) => {
    return data[key.trim()] || ''; // Reemplaza los marcadores de posición con los valores del objeto de datos
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
  // Reemplaza los marcadores de posición con los valores del producto
  const htmlContent = replacePlaceholders(htmlTemplate, blogData);
  
  return (
<div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <div class="embla">
  <div class="embla__container">
    <div class="embla__slide">Slide 1</div>
    <div class="embla__slide">Slide 2</div>
    <div class="embla__slide">Slide 3</div>
  </div>
</div>                </div>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
    </div>
    
    {`
            document.addEventListener('DOMContentLoaded', function () {
              const emblaNode = document.querySelector('.embla');
              if (emblaNode) {
                const options = { loop: false };
                const emblaApi = EmblaCarousel(emblaNode, options);
                console.log(emblaApi.slideNodes()); // Access API
              }
            });
          `}
</div>
  );
}
