// src/app/sellers/gallery/page.tsx
import { db } from "../../../lib/db";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from 'next/link';


export default async function SellerGallery() {
  const session = await getSession();

  if (!session || !session.user.isSeller) {
    return redirect('/');
  }

  const products = await db`
    SELECT * FROM products WHERE seller_id = ${session.user.id}
  `;

  return (
    <div>
      <h1>Mi Galería de Productos</h1>
      <ul>
        {products.rows.map((product: any) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.image_url} alt={product.title} />
            <p>Precio: ${product.price}</p>
            <Link href={`/products/${product.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
