// src/app/sellers/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SellerPage() {
  // Ensure getServerSession is used for server-side session retrieval
  const session = await getServerSession();

  // Redirect if the session is missing or the user is not a seller
  if (!session || !session.user?.isSeller) {
    redirect("/"); // Redirect to homepage if not a seller
  }

  return (
    <div>
      <h1>Seller Profile</h1>
      <p>Welcome, {session.user.name}</p>
      <nav>
        <ul>
          <li>
            <Link href="/sellers/gallery">My Gallery</Link>
          </li>
          <li>
            <Link href="/sellers/add-product">Add New Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
