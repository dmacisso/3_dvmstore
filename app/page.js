import ImageBanner from '@/components/ImageBanner';
import Products from '@/components/Products';

export default function Home() {
  const hello = {}
  return (
    <>
    {/* {hello.map(() => {})} */}
      <ImageBanner />
      <section>
        <Products />
      </section>
    </>
  );
}
