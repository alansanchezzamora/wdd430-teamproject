// src/app/users/catalog/page.tsx
import { db } from "../../lib/db";
import ClientCatalogPage from "./ClientCatalogPage";

interface Product {
  product_id: string;
  name: string;
  description: string;
  image_filename: string;
  product_price: number;
  seller_id: string;
  name_seller: string;
}

export default async function CatalogPage() {
  const result = await db`
    SELECT a.product_id, a.name, a.description, b.image_filename, a.product_price, a.seller_id, c.name AS name_seller
      FROM 
        products a 
      INNER JOIN 
        product_images b ON (a.product_id = b.product_id)
      INNER JOIN
        sellers c ON (c.seller_id = a.seller_id)
  `;

  // Safely map rows to the Product type
  const products: Product[] = result.rows.map((row) => ({
    product_id: row.product_id,
    name: row.name,
    description: row.description,
    image_filename: row.image_filename,
    product_price: row.product_price,
    seller_id: row.seller_id,
    name_seller: row.name_seller,
  }));

  return <ClientCatalogPage initialProducts={products} />;
}
