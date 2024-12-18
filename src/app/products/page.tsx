// src/app/users/catalog/page.tsx
//import { useEffect, useState } from 'react';
import { db } from "../../lib/db";
import Link from 'next/link';
import Image from 'next/image';

import dynamic from 'next/dynamic';



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
 //SELECT a.product_id, a.name, a.description, b.image_filename FROM products a INNER JOIN product_images b ON (a.product_id = b.product_id)
  return (
    <div className="product-main">

      <h1>Products Page</h1>
      {/* <div>
        <label>Filter by Artists: </label>
        <select>
          <option value="">Select</option>
          <option value="ropa">Ropa</option>
          <option value="joyeria">Joyería</option>
        </select>
      </div>  */}

      <ul className="card-container">
            {products.rows.map((product: any) => (
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
                <Link className="prod-name" href={`/product/details/${product.product_id}`}>
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


