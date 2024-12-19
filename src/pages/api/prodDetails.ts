 
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from "../../lib/db";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { product_id } = req.query;

    if (!product_id) {
        return res.status(400).json({ error: 'Product ID is required' });
    }

    const productIdInt = parseInt(product_id as string, 10);

    if (isNaN(productIdInt)) {
      return res.status(400).json({ error: "Invalid product_id" });
    }

    const { rows } = await db
        `   
        SELECT a.product_id, a.name, a.description, b.image_filename, a.product_price, a.seller_id, c.name AS name_seller
                FROM 
                    products a 
                 INNER JOIN 
                    product_images b ON (a.product_id = b.product_id)
                INNER JOIN
                    sellers c ON (c.seller_id = a.seller_id)
            WHERE a.product_id = ${productIdInt};`
        ;

    if (rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
    }
    console.log(rows)
    res.status(200).json(rows);

  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: 'Failed to fetch product details' });
  }
}
