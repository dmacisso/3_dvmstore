import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h2>Page Not Found 😢 </h2>
      <Link href="/">
        <button className="">Home</button>
      </Link>
    </>
  );
}
