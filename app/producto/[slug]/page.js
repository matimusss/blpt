import React from 'react';

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
    return data[key.trim()] || '';
  });
}

// Componente para la página del producto
export default async function Page({ params }) {
  const slug = params.slug;
  const blogData = await fetch(`https://sonicjs-cf2.pages.dev/v1/getProductBySlug/${slug}`).then((res) => res.json());

  
  
  
  const productRes = await fetch(`https://sonicjs-cf2.pages.dev/v1/nc/assets?filters[name][$eq]=product`);
  const productData = await productRes.json();



  
  
  
  
  
  
  
  
  // HTML de ejemplo con marcadores de posición
  const htmlTemplate = `
    <div>
      <h1>{{product_name}}</h1>
      <p><strong>Descripción:</strong> {{product_description}}</p>
      <p><strong>SKU:</strong> {{sku}}</p>
      <p><strong>Precio de Venta:</strong> ${{sale_price}}</p>
      <p><strong>Precio Comparativo:</strong> ${{compare_price}}</p>
      <p><strong>Precio de Compra:</strong> ${{buying_price}}</p>
      <p><strong>Cantidad:</strong> {{quantity}}</p>
      <p><strong>Tipo de Producto:</strong> {{product_type}}</p>
    </div>
  `;

  // Reemplaza los marcadores de posición con los valores del producto
  const htmlContent = replacePlaceholders(productData, blogData);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
