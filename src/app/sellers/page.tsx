// src/app/sellers/page.tsx
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from 'next/link';

export default async function SellerPage() {
  const session = await getSession();

  if (!session || !session.user.isSeller) {
    return redirect('/'); // Redirigir si no es vendedor
  }

  return (
    <div>
      <h1>Perfil de Vendedor</h1>
      <p>Bienvenido, {session.user.name}</p>
      <nav>
        <ul>
          <li><Link href="/sellers/gallery">Mi galería</Link></li>
          <li><Link href="/sellers/add-product">Añadir nuevo producto</Link></li>
        </ul>
      </nav>
    </div>
  );
}
