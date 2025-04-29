'use client';

import { useProducts } from '@/context/ProductContext';
import Link from 'next/link';

export default function Cart() {
  const { cart } = useProducts(); //*Global state

  //* first make an array from the keys of the cart object
  //* then use the reduce method the array
  //* The reducer method call an anonymous arrow function which takes in an (accumulator, current value, and the current index) and a second parameter after the function, the default value)
  //* The reducer build an entity, it could be a string, an array, an object, a number.
  //* since we are calculating a number of products, the default value is 0
  //* So we map over every item in the array and do something, and whatever is returned from one iteration is added to the accumulator. Note: In the example below, the reducer is iterating over the array (Object.keys(cart)) and curr is the iterator, pointing to product_id of each item in the array.
  const numProducts = Object.keys(cart).reduce((acc, curr, currIndex) => {
    const numProduct = cart[curr].quantity;
    console.log('Cart: ', cart);
    // console.log("Current: ", curr)
    const sum = acc + Number(numProduct);
    return sum;
  }, 0);
  // console.log('Total Number of Products: ', numProducts);

  return (
    <div>
      <Link className="unstyled-button" href={'/cart'}>
        <i className="fa-solid fa-bag-shopping"></i>
        {numProducts > 0 && (
          <div className="cart-num">
            <p>{numProducts}</p>
          </div>
        )}
      </Link>
    </div>
  );
}
