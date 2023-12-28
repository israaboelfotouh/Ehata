import React from "react";
import footerlogo from "../src/img/footerlogo.png";
export default function Footer() {
  return (
    <>
      <footer className="container">
        <div className="footerinfo">
          <div>
            <ul>
              <li> الرئيسية</li>
              <li>خدماتنا </li>
              <li>نبذة عنا </li>
              <li>تواصل معنا </li>
            </ul>
          </div>
          <div className="footer-contant">
            <p>
              المملكة العربية السعودية – الرياض
              <br />
              حي النخيل – شارع الأمير عبدالعزيز بن ثنيا
            </p>
            <img src={footerlogo} alt="footerlogo" />
          </div>
        </div>
      </footer>
      <div className="endfooter">
        <p>
          Copyright © 2023 إحاطة لخدمات الأعمال | Powered by إحاطة لخدمات
          الأعمال
        </p>
      </div>
    </>
  );
}
