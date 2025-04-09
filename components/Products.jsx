'use client';

export default function Products() {
  const stickerDescriptions = {
    CSS_HTML_Javascript: 'Core...',
    Docker: 'Platform..',
    Firebase: 'Cloud ...',
    NextJS: 'React-based...',
    NodeJS: 'JavaScript runtime',
    PostgreSQL: 'Robust',
    ReactJS: 'JavaScript library',
  };

  const stickers = Object.keys(stickerDescriptions);

  return (
    <>
      <div className="section-container">
        <div className="section-header">
          <h2 className="">Shop Our Selection</h2>
          <p>From organization to accessorization</p>
        </div>
        <div className="planner-container">
          <div>
            <button className="img-button">
              <img src="/low_res/planner.jpeg" alt="high-res-planner" />
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
              // onClick={() => {
              //   const plannerPriceId = planner.default_price;
              //   handleIncrementProduct(plannerPriceId, 1, planner);
              // }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <h2 className="">Or collect your Favorite Tech</h2>
          <p>Choose from our custom design tech logos</p>
        </div>
        <div className="sticker-container">
          {stickers.map((sticker, stickerIndex) => {
            return (
              <div className="sticker-card" key={stickerIndex}>
                <button className="img-button">
                  <img
                    src={`low_res/${sticker}.jpeg`}
                    alt={`${sticker}-low-res`}
                  />
                </button>
                <div className="sticker-info">
                  <p className="text-medium">
                    {sticker.replaceAll('_', ' ')} Sticker.png
                  </p>
                  <p>{stickerDescriptions[sticker]}</p>
                </div>
                <h4>
                  <span>$</span>5.99
                </h4>

                <button>Add to cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
