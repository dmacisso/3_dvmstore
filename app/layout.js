import './globals.css';
import './fanta.css';
import Head from './head';
import Link from 'next/link';
import Cart from '@/components/Cart';
import EmailInput from '@/components/EmailInput';
import ProductsProvider from '@/context/ProductContext';

// site metadata site for SEO
export const metadata = {
  title: 'DVM Store',
  description: 'A store for programmers and productivity',
};

// The children comes from what is wrapped by this layout in page(s).js
export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          {/* portal for modal overlay */}
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href="/">
                  <h1 className="header-logo">DvmStore</h1>
                </Link>
                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart />
              </div>
            </header>
            <main>{children}</main>
            <div className="hr" />
            <footer>
              <div className="email-container">
                <h5>
                  Get a sneak peak at new additions to the store, special
                  offers, and so much more
                </h5>{' '}
                <EmailInput />
              </div>
              <div className="links-container">
                <div className="">
                  {/*  for my portfolio website */}
                  <h3>DVM</h3>
                  <Link target="_blank" href={'https://github.com/dmacisso'}>
                    DVM Hub
                  </Link>
                  <Link target="_blank" href={'/'}>
                    Roadmap
                  </Link>
                </div>
                <div className="">
                  <h3>Store</h3>
                  <Link target="_blank" href={'/'}>Home</Link>
                  <Link target="_blank" href={'/cart'}>Cart</Link>
                </div>
                <div className="">
                  <h3>Support</h3>
                  <Link target="_blank" href={'/contact'}>Contact</Link>
                  <Link target="_blank" href={'/faq'}>FAQs</Link>
                </div>
              </div>
              <div className="socials">
                <p>
                  &copy;{' '}
                  <a href="https://github.com/dmacisso" target="_blank">
                    {' '}
                    DVMacisso{' '}
                  </a>
                  2025 <br /> Built with NextJS &{' '}
                  <a target="_blank" href="https://www.fantacss.smoljames.com">
                    FantaCSS
                  </a>{' '}
                  🔥
                </p>
                <div className="social-links">
                  <Link target="_blank" href={'https://github.com/dmacisso'}>
                    <i className="fa-brands fa-github"></i>
                  </Link>
                  <Link
                    target="_blank"
                    href={
                      'https://www.youtube.com/channel/UCa-F9p4fHRAhYe1C6_yJExg'
                    }
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  <Link target="_blank" href={'https://www.linkedin.com/in/david-macisso-2135787/'}>
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
