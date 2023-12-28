import React from "react";
import ordericone from "../src/img/ordericone.png";
import manager from "../src/img/manager.png";
export default function OrderServices() {
  return (
    <>
      <section className="OrderServices">
        <div className="services">
          <div className="order">
            <img src={ordericone} alt="ordericone" />
            <h1>اطلب خدمتك الان</h1>
          </div>
        </div>

        <div className="servicesinfo container ">
          <div className="services-contant">
            <h1>كلمة المدير العام</h1>
            <p>
              يسعدني أن أقدم لكم قصة فكرة إحاطة وبدايتها، بعد تأسيس أكثر من سبعة
              مشاريع تجارية بمختلف المجالات سواء خدمية أو تجارية أو صناعية تعلمت
              الكثير منها بحمد الله ومنته، ومن أهم مـا تعلمته حـرص رائد الأعمال
              على القيام بكل التفاصيل في مشروعه التجاري والاطلاع عليها ...
              <span>المزيد</span>
            </p>
          </div>
          <div className="services-img">
            <img src={manager} alt="manager" />
          </div>
        </div>
      </section>
    </>
  );
}
