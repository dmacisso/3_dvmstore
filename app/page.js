import ImageBanner from '@/components/ImageBanner';
import Products from '@/components/Products';

export async function getProducts() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(baseURL + '/api/products');
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
  let planner = null;
  let stickers = [];

  for (let product of products) {
    if (product.name === 'Medieval Dragon Month Planner') {
      planner = product;
      continue; //* assumes planner is the first hit in the for loop.
    }
    stickers.push(product);
  }

  return (
    <>
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
