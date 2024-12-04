// src/app/products/[id]/page.tsx
import { db } from "../../../lib/db";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // Obtener producto por ID
  const product = await db`
    SELECT * FROM products WHERE id = ${id}
  `;

  if (product.rows.length === 0) {
    return notFound();
  }

  const reviews = await db`
    SELECT * FROM reviews WHERE product_id = ${id}
  `;

  return (
    <div>
      <h1>{product.rows[0].title}</h1>
      <p>{product.rows[0].description}</p>
      <img src={product.rows[0].image_url} alt={product.rows[0].title} />
      <p>Precio: ${product.rows[0].price}</p>
      <h2>Reseñas</h2>
      {reviews.rows.length === 0 ? (
        <p>No hay reseñas todavía.</p>
      ) : (
        reviews.rows.map((review: any) => (
          <div key={review.id}>
            <p><strong>Calificación:</strong> {review.rating}</p>
            <p><strong>Comentario:</strong> {review.comment}</p>
          </div>
        ))
      )}
      <h3>Deja tu reseña:</h3>
      <form>
        <label>
          Calificación:
          <input type="number" min="1" max="5" />
        </label>
        <textarea placeholder="Escribe tu comentario"></textarea>
        <button type="submit">Enviar reseña</button>
      </form>
    </div>
  );
}
