// src/app/sellers/SellerGalleryServer.tsx
import { db } from "../../../lib/db";
import SellerGallery from "./SellerGallery";

export default async function SellerGalleryServer() {
  const result = await db`
    SELECT seller_id, name, bio FROM sellers
  `;

  const sellers = result.rows.map((row) => ({
    seller_id: row.seller_id,
    name: row.name,
    bio: row.bio,
  }));

  // Pass fetched data as props to the Client Component
  return <SellerGallery sellers={sellers} />;
}
