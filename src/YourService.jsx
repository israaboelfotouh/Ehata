import React from "react";
import aboutlogo from "../src/img/aboutlogo.png";
import act1 from "../src/img/act1.png";
import act2 from "../src/img/act2.png";
import act3 from "../src/img/act3.png";
import Form from "./Form";

export default function YourService() {
  return (
    <>
      <section className="about yourservices">
        <div className="container about-contant">
          <div></div>
          <div className="about-us">
            {" "}
            <img src={aboutlogo} alt="aboutlogo" />
            <h1>اطلب خدمتك</h1>
          </div>
        </div>
      </section>
      <section className="container actvie">
        <div className="activeties">
          <div>
            <img src={act1} alt="act1" />
            <p>خدمات إدارة الشؤون المالية والمحاسبية</p>
          </div>
          <div>
            <img src={act2} alt="act2" />
            <p>خدمات إدارة الموارد البشرية</p>
          </div>
          <div>
            <img src={act3} alt="act3" />
            <p>خدمات المنصات الحكومية </p>
          </div>
          <div>
            <h4>خطط لمشروعك .. وأترك الباقي علينا</h4>
          </div>
        </div>

        <Form />
      </section>
    </>
  );
}
