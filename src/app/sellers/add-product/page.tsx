// src/app/sellers/add-product/page.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ title, description, price, imageUrl, category, sellerId: 1 }), // Deberás obtener el ID del vendedor actual
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/sellers/gallery");
    } else {
      alert("Error al añadir el producto.");
    }
  };

  return (
    <div>
      <h1>Añadir Nuevo Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del producto</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Descripción</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Precio</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Imagen URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
          <label>Categoría</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit">Añadir Producto</button>
      </form>
    </div>
  );
}
