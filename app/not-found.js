import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-container">
      <h2>Page Not Found 😢 </h2>
      <p className="text-large">404</p>
      <Link href="/">
        <button className="">Home</button>
      </Link>
    </div>
  );
}
