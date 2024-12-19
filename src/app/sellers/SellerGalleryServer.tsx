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
    <div className="container">
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
      <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #333;
        }
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 18px;
          text-align: left;
        }
        .styled-table th,
        .styled-table td {
          padding: 12px 15px;
        }
        .styled-table thead {
          background-color: #007bff;
          color: white;
        }
        .styled-table tbody tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .styled-table tbody tr:hover {
          background-color: #ddd;
        }
        .styled-table th {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
