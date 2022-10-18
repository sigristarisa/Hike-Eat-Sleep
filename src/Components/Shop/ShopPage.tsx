import React from "react";
import Footer from "../Footer/Desktop/Footer";
import FooterMobile from "../Footer/Mobile/FooterMobile";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { ShopProduct } from "../../helpers/types";
import { WindowSize } from "../../helpers/types";
import "./ShopPage.css";

interface props {
  windowSize: WindowSize;
  isMobile: Function;
}

const ShopPage: React.FC<props> = ({ isMobile, windowSize }) => {
  const [shopproducts] =
    useAllPrismicDocumentsByType<ShopProduct>("shopproduct");

  if (shopproducts) {
    shopproducts.forEach((shopproduct) => console.log(shopproduct));
  }

  return (
    <div className='place-items_center'>
      <main className={`shop-main_container${isMobile()} place-items_center`}>
        <p>coming soon...</p>
      </main>
      {windowSize.innerWidth > 600 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default ShopPage;
