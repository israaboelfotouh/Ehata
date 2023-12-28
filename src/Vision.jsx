import React from "react";
import iconemession from "../src/img/missionicone.png";
import iconevision from "../src/img/iconevision.png";
import lineicone from "../src/img/missionline.png";
import pstternright from "../src/img/EHATAH right pattern.png";
import pstternleft from "../src/img/leftpattern.png";

export default function Vision() {
  return (
    <>
      <section className="visionsection ">
        <div className="container ">
          <div className="visionsize">
            <h2>إحــاطة</h2>
            <p>
              هــو فريــق عمـــل متكامــل بخبـــرات وكفـاءات عاليــة يعمــل علـى
              تقديــم أفضـــل الخدمـــات المحاســـبية والإدـاريــة لـرواد
              ألاعمال بأعلى المعاييـر، حيـث نسعى لرفع مستوى الجــودة فـي الأعمال
              القائمـة ونقلهـا إلى مسـتويات متقدمـة كذلـك تذليل العقبـات
              والصعوبات التي يواجههــا رواد الأعمـال الجـدد فــي تجربتهــم
              الأولى لدخول عالم الأعمال التجارية
            </p>
          </div>

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
        </div>
        <img className="pstternright" src={pstternright} alt="pstternright" />
        <img className="pstternleft" src={pstternleft} alt="pstternleft" />
      </section>
    </>
  );
}
