import React from "react";
import imglogo from "../src/img/EHATAH - Logo-08.png";

export default function SectionBody() {
  return (
    <>
      <section className="home">
        <div className="nav_contant">
          <img src={imglogo} alt="logo " />
          <p>إحـــاطة لخدمات الأعمال</p>
          <h3>خدماتنا</h3>
        </div>
      </section>
    </>
  );
}
