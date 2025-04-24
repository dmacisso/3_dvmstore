'use client';

import { useState } from 'react';
import Portal from './Portal';
import { useProducts } from '@/context/ProductContext';

export default function Products(props) {
  const { planner, stickers } = props;
  // console.log(planner);
  // console.log(stickers);
  const [portalImage, setPortalImage] = useState(null);

  const { handleIncrementProduct, cart } = useProducts();
  console.log('Cart', cart);

  if (!stickers.length || !planner) {
    return null;
  }

  return (
    <>
      {portalImage && (
        <Portal
          handleClosePortal={() => {
            setPortalImage(null);
          }}
        >
          <div className="portal-content">
            <img
              src={`med_res/${portalImage}.jpeg`}
              alt={`${portalImage}-high-res`}
              className="img-display"
            />
          </div>
        </Portal>
      )}
      {/* Planner */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="">Shop Our Selection</h2>
          <p>From organization to accessorization</p>
        </div>
        <div className="planner-container">
          <div>
            <button
              onClick={() => {
                setPortalImage('planner');
              }}
              className="img-button"
            >
              <img src="low_res/planner.jpeg" alt="high-res-planner" />
            </button>
          </div>
          <div className="planner-info">
            <p className="text-large planet-header">
              Medieval Dragon Month Planner
            </p>
            <h3>
              <span>$</span>14.99
            </h3>
            <p>
              Step into a realm of fantasy and organization with our{' '}
              <strong>Medieval Dragon Month Planner</strong>! This
              high-resolution PNG asset combines the fierce elegance of dragons
              with intricate medieval designs to create a planner that's not
              only functional but also a work of art. Whether you&apos;re
              jotting down quests, planning battles, or just scheduling your
              weekly grocery run, this planner is your ultimate companion.
            </p>
            <ul>
              <li>
                <strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon
                motifs and medieval-inspired borders make every month feel
                legendary.
              </li>
              <li>
                <strong>Fully Printable:</strong> Designed at ultra-high
                resolution, it&apos;s perfect for printing on any size paper,
                from A4 to poster-sized displays.
              </li>
            </ul>
            <div className="purchase-btns">
              <button
                onClick={() => {
                  const plannerPriceId = planner.default_price;
                  handleIncrementProduct(plannerPriceId, 1, planner);
                  //* passing in id, quantity, and data - which is, in this case, "planner" that we destructed from props above
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Stickers */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="">Or collect your Favorite Tech</h2>
          <p>Choose from our custom design tech logos</p>
        </div>
        <div className="sticker-container">
          {stickers.map((sticker, stickerIndex) => {
            const stickerName = sticker.name;

            const stickerImgUrl = sticker.name
              .replaceAll(' Sticker.png', '')
              .replaceAll(' ', '_')
              .replaceAll('_Sticker', '');
            return (
              <div className="sticker-card" key={stickerIndex}>
                <button
                  onClick={() => {
                    setPortalImage(stickerImgUrl);
                  }}
                  className="img-button"
                >
                  <img
                    src={`low_res/${stickerImgUrl}.jpeg`}
                    alt={`${stickerImgUrl}-low-res`}
                  />
                </button>
                <div className="sticker-info">
                  <p className="text-medium">{stickerName}</p>
                  <p>{sticker.description}</p>
                  <h4>
                    <span>$</span>
                    {sticker.prices[0].unit_amount / 100}
                  </h4>
                </div>

                <button
                  onClick={() => {
                    const stickerPriceId = sticker.default_price;
                    handleIncrementProduct(stickerPriceId, 1, sticker);
                     //* passing in id, quantity, and data - which is, in this case, "sticker" that we destructed from props above
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
