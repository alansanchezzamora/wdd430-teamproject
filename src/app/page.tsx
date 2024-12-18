// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{ color: "#2c3e50", fontSize: "2.5rem", marginBottom: "20px" }}
      >
        Welcome to the Artisan Platform
      </h1>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link
              href="/users/catalog"
              style={{
                color: "#3498db",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Explore Products
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link
              href="/sellers"
              style={{
                color: "#3498db",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Access as Seller
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
