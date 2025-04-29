'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error(props) {
  // props gives us a function to reset the page and an error object
  const { error, reset } = props;

  useEffect(() => {
  }, [error]);
  return (
    <div className="page-container">
      <h3>Something went wrong 😢 </h3>
      <div className="">
        <button onClick={reset} className="">
          Reset
        </button>
        <Link href={'./'}>
          <button className="">Home</button>
        </Link>
      </div>
    </div>
  );
}
