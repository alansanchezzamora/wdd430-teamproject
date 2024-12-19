// src/app/sellers/gallery/page.tsx
import { db } from "../../../lib/db";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
}

export default async function SellerGallery() {
  const session = await getSession();

  if (!session || !session.user.isSeller) {
    return redirect("/");
  }

  const result = await db`
    SELECT * FROM products WHERE seller_id = ${session.user.id}
  `;

  const products: Product[] = result.rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    image_url: row.image_url,
    price: row.price,
  }));

  return (
    <div>
      <h1>My Product Gallery</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Image src={product.image_url} alt={product.title} />
            <p>Price: ${product.price}</p>
            <Link href={`/products/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
