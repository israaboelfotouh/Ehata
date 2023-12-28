import React from "react";
import formicone from "../src/img/formicone.png";
import sendicone from "../src/img/sendicone.png";
import sendline from "../src/img/sendline.png";
import line from "../src/img/line.png";
export default function Form() {
  return (
    <>
      <form>
        <div className="itemform">
          <div className="itemform1">
            <label>
              <img src={formicone} alt="formicone" />
              الاسم الكامل
            </label>
            <input />
          </div>
          <div>
            <label>
              <img src={formicone} alt="formicone" />
              اسم المنشأة
            </label>
            <input />
          </div>
          <div>
            <label>
              <img src={formicone} alt="formicone" />
              نشاط المنشأة
            </label>
            <input />
          </div>
          <div>
            <div>
              <label>الكيان القانوني للمنشأة</label>
              <input
                placeholder="مؤسسة
              "
              />
            </div>
            <div>
              <label>
                <div className="labelServices">
                  <button>خدمات إدارة الشؤون المالية والمحاسبية</button>
                  <img src={sendline} alt="sendline" />
                  <button>خدمات إدارة الموارد البشرية</button>
                  <button>خدمات المنصات الحكومية </button>
                </div>
                نوع الخدمة المطلوبة
              </label>
              <input />
            </div>
            <div>
              <label>الخدمة التفصيلية</label>
              <input placeholder="خدمات إنشاء الشجرة المحاسبية." />
            </div>
            <div>
              <label>
                <img src={formicone} alt="formicone" />
                البريد الالكتروني
              </label>
              <input />
            </div>
            <div>
              <label>
                <img src={formicone} alt="formicone" />
                رقم الجوال
              </label>
              <input />
            </div>
            <div>
              <label>
                <img src={formicone} alt="formicone" />
                المدينة
              </label>
              <input />
            </div>
            <div>
              <label>
                <img src={formicone} alt="formicone" />
                الملاحظات ( غير الزامي )
              </label>
              <input />
            </div>

            <div className="time">
              <p>الوقت المناسب للتواصل</p>

              <div className="buttonTime">
                <button>
                  من 9:
                  <br />
                  إلى: 12
                </button>

                <button>
                  من 1:
                  <br />
                  إلى: 3
                </button>
                <button>
                  من 4:
                  <br />
                  إلى: 6
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="button">
          <button type="submit " className="buttonl">
            <img src={sendicone} alt="sendicone" />
            <img src={sendline} alt="sendline" />
            <p> إرســـال</p>
          </button>
        </div>
      </form>
    </>
  );
}
