import React from "react";
import aboutlogo from "../src/img/aboutlogo.png";
import manager from "../src/img/manager.png";
import iconemession from "../src/img/missionicone.png";
import iconevision from "../src/img/iconevision.png";
import lineicone from "../src/img/missionline.png";
import ValueIcone1 from "../src/img/ValueIcone1.png";
import ValueIcone2 from "../src/img/ValueIcone2.png";
import ValueIcone3 from "../src/img/ValueIcone3.png";
import ValueIcone4 from "../src/img/ValueIcone4.png";

import ValueIcone5 from "../src/img/ValueIcone5.png";
import team from "../src/img/team.png";
import goal from "../src/img/goal.png";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="container about-contant">
          <div></div>
          <div className="about-us">
            {" "}
            <img src={aboutlogo} alt="aboutlogo" />
            <h1>نبذة عنا</h1>
          </div>
        </div>
      </section>

      <section className="">
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

      <section className="visionsection ">
        <div className="container ">
          <div className="VissionandMission">
            <div className="mission">
              <h1>رسالتنا</h1>
              <div className="Mission-bg">
                <div className="ourmession">
                  <p>
                    نعمل على أن نقدم أفضل الخدمات المهنية والاستشارية للإسهام في
                    تحقيق النجاح لعملائنا وتطوير كفاءة وجودة أعمالهم من خلال
                    كفاءة وخبرات فريق عمل إحاطة.
                  </p>
                  <img src={lineicone} alt="lineicone" />
                  <img src={iconemession} alt="iconemession" />
                </div>
              </div>
            </div>

            <div className="mission">
              <h1>رؤيتنا</h1>
              <div className="Mission-bg">
                <div className="ourmession">
                  <p>
                    أن تكون إحاطة أيقونة في عالم الأعمال محلياً وعالمياً من خلال
                    جودة الخدمات المقدمة وكفاءة فريق العمل.
                  </p>

                  <img src={lineicone} alt="lineicone" />
                  <img src={iconevision} alt="iconevision" />
                </div>
              </div>
            </div>
          </div>

          <div className="OurValues">
            <h1>قــيمنا</h1>
            <div className="about-icone">
              <div>
                <img src={ValueIcone1} alt="ValueIcone1" />
                <p>توفير بيئة عمل جاذبه</p>
              </div>
              <div>
                <img src={ValueIcone2} alt="ValueIcone2" />
                <p> لدينا أعلى الخبرات وأحدث التقنيات</p>
              </div>
              <div>
                <img src={ValueIcone3} alt="ValueIcone3" />
                <p> تبادل الثقة والمصداقية</p>
              </div>
              <div>
                <img src={ValueIcone4} alt="ValueIcone4" />
                <p>التميز في تقديم الخدمات</p>
              </div>
              <div>
                <img src={ValueIcone5} alt="ValueIcone5" />
                <p>تلبية احتياجات العميل</p>
              </div>
            </div>
          </div>

          <div className="VissionandMission">
            <div className="mission">
              <h1>مسؤوليتنا الاجتماعية</h1>
              <div className="Mission-bg">
                <div className="ourmession">
                  <p>
                    في إحاطة لدينا الاهتمام والشغف الكبيرين لدعم المجتمع من خلال
                    مختلف المبادرات والأنشطة الغير ربحية ، فنحن نسعى جاهدين
                    لتقديم النصح للمهتمين بعالم الأعمال من مختلف أفراد المجتمع
                    وإيضاح ما يشكل لديهم في هذا المجال. كذلك تولي إحاطة اهتماماً
                    كبيراً بجانب الأعمال الخيرية المختلفة والمساهمة فيها بما
                    يعود بالفائدة الكبيرة على المجتمع.
                  </p>
                  <img src={lineicone} alt="lineicone" />
                  <img src={team} alt="iconemession" />
                </div>
              </div>
            </div>

            <div className="mission">
              <h1>أهدافنا</h1>
              <div className="Mission-bg">
                <div className="ourmession">
                  <p>
                    – أن نكون مصدر أمان وثقة لعملائنا وذلك بمساعدتهم على تخطي
                    الصعوبات وحمايتهم من الوقوع في أي أخطاء إدارية.
                    <br /> – أن نسهم في رفع مستوى ثقافة كل من له اهتمام بعالم
                    الأعمال ونقل ومشاركة التجارب التجارية بين رواد الأعمال
                    لتلافي تكرار الوقوع في بعض الأخطاء.
                  </p>

                  <img src={lineicone} alt="lineicone" />
                  <img src={goal} alt="iconevision" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
