import { db } from "../../../lib/db";
import Link from "next/link";
import Image from "next/image";

// Define the Product interface
interface Product {
  product_id: number;
  name: string;
  description: string;
  image_filename: string;
  product_price: number;
  seller_id: number;
  name_seller: string;
}

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

  // Cast the rows to the Product type
  const productList: Product[] = products.rows as Product[];

  return (
    <div>
      <h1>Product Catalog</h1>
      <div>
        <label>Filter by Artists: </label>
        <select>
          <option value="">Select</option>
          <option value="clothing">Clothing</option>
          <option value="jewelry">Jewelry</option>
          {/* Other filters */}
        </select>
      </div>

      <ul className="card-container">
        {productList.map((product) => (
          <li key={product.product_id} className="prod-card">
            <div className="prod-img">
              <Link href={`/product/details/${product.product_id}`}>
                <Image
                  src={`/images/${product.image_filename}`}
                  alt={`Product image of ${product.name}`}
                  width={500}
                  height={500}
                  className="prod-img"
                />
              </Link>
            </div>
            <div className="prod-details">
              <Link
                className="prod-name"
                href={`/product/details/${product.product_id}`}
              >
                <h2 className="prod-name">{product.name}</h2>
              </Link>
              <h3>{`$ ${product.product_price}`}</h3>
              <p>{product.description}</p>
              <p>{`${product.name_seller}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
