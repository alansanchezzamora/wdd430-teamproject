import { sql } from "@vercel/postgres";
import { ReviewType } from "./definitions"; // Define a type for reviews

export async function fetchReviews() {
  try {
    console.log("Fetching reviews data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<ReviewType>`SELECT * FROM reviews`;

    console.log("Data fetch completed after 3 seconds.");

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch reviews data.");
  }
}
