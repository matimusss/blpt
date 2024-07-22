import React from 'react';

// Función para obtener los parámetros estáticos
export async function generateStaticParams() {
  const posts = await fetch('https://sonicjs-cf2.pages.dev/v1/product-min-details').then((res) => res.json());
  return posts.map((post) => ({ 
    slug: post.slug,
  }));
}

// Componente para la página del producto
export default async function Page({ params }) {
  const slug = params.slug;
  const blogData = await fetch(`https://sonicjs-cf2.pages.dev/v1/getProductBySlug/${slug}`).then((res) => res.json());

  return (
    <div>
      <h1>{blogData.product_name}</h1>
      <p><strong>Descripción:</strong> {blogData.product_description}</p>
      <p><strong>SKU:</strong> {blogData.sku}</p>
      <p><strong>Precio de Venta:</strong> ${blogData.sale_price}</p>
      <p><strong>Precio Comparativo:</strong> ${blogData.compare_price}</p>
      <p><strong>Precio de Compra:</strong> ${blogData.buying_price}</p>
      <p><strong>Cantidad:</strong> {blogData.quantity}</p>
      <p><strong>Tipo de Producto:</strong> {blogData.product_type}</p>

      <h2>Atributos del Producto</h2>
      <ul>
        {blogData.product_attributes.map((attr, index) => (
          <li key={index}><strong>{attr.attribute_name}:</strong> {attr.attribute_value}</li>
        ))}
      </ul>

      <h2>Etiquetas</h2>
      <ul>
        {blogData.tags.map((tag, index) => (
          <li key={index}><strong>{tag.tag_name}:</strong> {tag.tag_icon}</li>
        ))}
      </ul>

      <h2>Cupones</h2>
      <ul>
        {blogData.coupons.map((coupon, index) => (
          <li key={index}>
            <strong>Código:</strong> {coupon.code} <br />
            <strong>Valor de Descuento:</strong> ${coupon.discount_value} <br />
            <strong>Tipo de Descuento:</strong> {coupon.discount_type}
          </li>
        ))}
      </ul>

      <h2>Imágenes del Producto</h2>
      <ul>
        {blogData.product_images.map((image, index) => (
          <li key={index}>
            <p><strong>Imagen:</strong> {image.image}</p>
            <p><strong>Placeholder:</strong> {image.placeholder}</p>
            <p><strong>Thumbnail:</strong> {image.is_thumb}</p>
          </li>
        ))}
      </ul>

      <h2>Proveedores</h2>
      <ul>
        {blogData.suppliers.map((supplier, index) => (
          <li key={index}><strong>Proveedor:</strong> {supplier.supplier_name}</li>
        ))}
      </ul>

      <h2>Detalles de Variantes</h2>
      <ul>
        {blogData.variant_details.map((variant, index) => (
          <li key={index}>
            <p><strong>Opción de Variante:</strong> {variant.variant_option}</p>
            <p><strong>Título de Variante:</strong> {variant.variant_title}</p>
            <p><strong>ID de Imagen de Variante:</strong> {variant.variant_image_id}</p>
            <p><strong>Precio de Venta:</strong> ${variant.variant_sale_price}</p>
            <p><strong>Precio Comparativo:</strong> ${variant.variant_compare_price}</p>
            <p><strong>Precio de Compra:</strong> ${variant.variant_buying_price}</p>
            <p><strong>Cantidad:</strong> {variant.variant_quantity}</p>
            <p><strong>Activo:</strong> {variant.variant_active}</p>
            <h3>Atributos de Variante</h3>
            <ul>
              {variant.variant_attributes.map((attr, index) => (
                <li key={index}><strong>{attr.variant_attribute_name}:</strong> {attr.variant_attribute_value}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
