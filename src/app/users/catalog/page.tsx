// src/app/users/catalog/page.tsx
//import { useEffect, useState } from 'react';
import { db } from "../../../lib/db";
import Link from 'next/link';

import dynamic from 'next/dynamic';



export default async function CatalogPage() {
  const products = await db`
    SELECT * FROM products
  `;

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div>
        <label>Filtrar por categoría: </label>
        <select>
          <option value="">Seleccione</option>
          <option value="ropa">Ropa</option>
          <option value="joyeria">Joyería</option>
          {/* Otros filtros */}
        </select>
      </div>
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
