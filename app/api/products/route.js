import Stripe from 'stripe'; //* import the Stripe class from the installed stripe package.
import '../../../envConfig.js';

const API_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY);

export async function GET() {
  try {
    // Fetch all the active products from stripe
    const products = await stripe.products.list({ active: true });
    

    // Fetch all the prices (price ids) that are active. This is the unique key because a specific product
    const prices = await stripe.prices.list({ active: true });
    

    // my have variations of features with a different price and priceId for each.
    // Combine the products and the associated prices.
    const combinedData = products.data.map((product) => {
      const productPrices = prices.data.filter((price) => {
        return price.product === product.id;
      });
      
      return {
        ...product,
        prices: productPrices.map((price) => {
          return {
            id: price.id,  //* a particular variant of the product.
            unit_amount: price.unit_amount,
            currency: price.currency,
            recurring: price.recurring,
          };
        }),
      };
    });

    // Send the combined data as json

    return Response.json(combinedData);
  } catch (err) {
    console.error('Error Fetching from Stripe: ', err.message);
    return Response.json({ error: 'Failed to fetch data from stripe' });
  }
}
