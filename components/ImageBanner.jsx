'use client';

import { useState, useRef, useEffect } from 'react';

//* use client is needed because this component is interactive (an image loading event)
export default function ImageBanner() {
  const [isloaded, setIsloaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    //* is the image completely loaded? Is the current status "complete"?
    if (imgRef.current.complete) setIsloaded(true);
  }, []);
  return (
    <div className="banner-images">
      <img
        className="low-res-img"
        src="low_res/banner.jpeg"
        alt="banner-low-resolution"
      />
      <img
        ref={imgRef}
        src="med_res/banner.png"
        alt="banner-high-res"
        className="high-res-img"
        style={{ opacity: isloaded ? 1 : 0 }}
        // 1 is visible
        onLoad={() => {
          //* this cb function is executed when the high res image is loaded and subsequently made visible
          setIsloaded(true);
        }}
      />
      <div className="cta-btns-container">
        <div>
          <div>
            <h3 className="">Welcome To</h3>
            <h1>The DVM Store</h1>
          </div>
          <div>
            <button>Shop Stickers</button>
            <button>Shop Planner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
