import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';

export async function GET() {
  const res = await db`SELECT * FROM products`;  // Consulta de todos los productos
  return NextResponse.json(res.rows);
}

export async function POST(request: Request) {
  const { title, description, price, imageUrl, category, sellerId } = await request.json();
  const res = await db`
    INSERT INTO products (title, description, price, image_url, category, seller_id)
    VALUES (${title}, ${description}, ${price}, ${imageUrl}, ${category}, ${sellerId})
    RETURNING *`;
  return NextResponse.json(res.rows[0]);
}
