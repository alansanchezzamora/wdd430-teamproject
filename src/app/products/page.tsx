// src/app/users/catalog/page.tsx
import { db } from "../../lib/db";
import ClientCatalogPage from "./ClientCatalogPage";

export default async function CatalogPage() {
  const products = await db`
    SELECT a.product_id, a.name, a.description, b.image_filename, a.product_price, a.seller_id, c.name AS name_seller
      FROM 
        products a 
      INNER JOIN 
        product_images b ON (a.product_id = b.product_id)
      INNER JOIN
        sellers c ON (c.seller_id = a.seller_id)
  `;

  return <ClientCatalogPage initialProducts={products.rows} />;
}
