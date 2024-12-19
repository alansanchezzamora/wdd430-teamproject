"use client";

interface Seller {
  seller_id: number;
  name: string;
  bio: string;
}

interface SellerGalleryProps {
  sellers: Seller[];
}

export default function SellerGallery({ sellers }: SellerGalleryProps) {
  return (
    <div className="container-seller">
      <h1>Sellers Summary</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Seller ID</th>
            <th>Name</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.seller_id}>
              <td>{seller.seller_id}</td>
              <td>{seller.name}</td>
              <td>{seller.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
