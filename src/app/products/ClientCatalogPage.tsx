"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// Define a Product type to avoid using `any`
interface Product {
  product_id: string;
  name: string;
  description: string;
  image_filename: string;
  product_price: number;
  name_seller: string;
}

export default function ClientCatalogPage({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const memoizedProducts = useMemo(() => initialProducts, [initialProducts]);

  const [sortedProducts, setSortedProducts] =
    useState<Product[]>(memoizedProducts);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const sorted = [...memoizedProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.product_price - b.product_price;
      } else {
        return b.product_price - a.product_price;
      }
    });
    setSortedProducts(sorted);
  }, [sortOrder, memoizedProducts]);

  return (
    <div className="product-main">
      <h1>Products Page</h1>

      <div className="sort-options">
        <label htmlFor="sort">Sort by Price: </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <ul className="card-container">
        {sortedProducts.map((product) => (
          <li key={product.product_id} className="prod-card">
            <div className="prod-img">
              <Link href={`/products/details/${product.product_id}`}>
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
                href={`/products/details/${product.product_id}`}
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
