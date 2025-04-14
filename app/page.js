import ImageBanner from '@/components/ImageBanner';
import Products from '@/components/Products';

export async function getProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Home(props) {
  const products = await getProducts();
  
  console.log(products);
  return (
    <>
      <ImageBanner />
      <section>
        <Products />
      </section>
    </>
  );
}
