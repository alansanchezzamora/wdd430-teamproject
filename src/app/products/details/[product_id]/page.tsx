"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';


// Define a Product type to avoid using `any`
interface Product {
    product_id: string;
    name: string;
    description: string;
    image_filename: string;
    product_price: number;
    name_seller: string;
  }

const ProductDetailsPage = ({ params }: { params: Promise<{ product_id: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [product_id, setProductId] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params;
        setProductId(resolvedParams.product_id);
      } catch {
        setError('Failed to fetch parameters');
      }
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (product_id) {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`/api/prodDetails?product_id=${product_id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await response.json();
          setProduct(data[0]);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

    fetchProductDetails();
    }
  }, [product_id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className='main-body'>
      <div className="product-details">
        <h1 className='prod-title'>{product.name}</h1>
        <div className='details-container'>
          <div className='details-img'>
            <Image
              src={`/images/${product.image_filename}`}
              alt={`Image of ${product.name}`}
              width={500}
              height={500}
              className='details-img'
            />
          </div>
          <div className='details-info'>
            <h3>{`Price: $${product.product_price}`}</h3>
            <p>{product.description}</p>
            <p>{`Artisan: ${product.name_seller}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;