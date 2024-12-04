// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a la plataforma de artesanos</h1>
      <nav>
        <ul>
          <li><Link href="/users/catalog">Explorar productos</Link></li>
          <li><Link href="/sellers">Acceder como vendedor</Link></li>
        </ul>
      </nav>
    </div>
  );
}
