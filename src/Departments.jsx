import React from "react";
import imgIcone1 from "../src/img/icone1.png";
import imgIcone2 from "../src/img/icone2.png";
import imgIcone3 from "../src/img/icone3.png";
import imgIcone4 from "../src/img/icone4.png";
// import shadowline from "../src/img/shadow_line.png";
// import Rectangle_bg from "../src/img/Rectangle_bg.png";

export default function Departments() {
  return (
    <>
      <div className="sections">
        <div className="departMebts container ">
          <div className="imgicone">
            <img src={imgIcone1} alt="icone1" />
            <p> التصوير والتصميم</p>
          </div>
          <div className="imgicone">
            <img src={imgIcone2} alt="icone2" />
            <p> الخدمات الحكومية </p>
          </div>
          <div className="imgicone">
            <img src={imgIcone3} alt="icone3" />
            <p> إدارة الموارد البشرية</p>
          </div>
          <div className="imgicone">
            <img src={imgIcone4} alt="icone4" />
            <p> إدارة الشؤون المالية والمحاسبية </p>
          </div>
        </div>

        <div className="departMebts container">
          <div className="texticone">
            <div className="shadowline">
              <p> 1- • التصوير الإعلاني</p>
              <p> 2- • التصوير المعماري</p>
              <p> 3- • تصوير الفعاليات</p>
              <p> 4- • التصوير الشخصي</p>
              <p> 5- • تصاميم حسابات وسائل التواصل الاجتماعي</p>
              <p>6- • تصميم المطبوعات</p>
            </div>
          </div>

          <div className="texticone">
            <div className="shadowline">
              <p>
                1- متابعة الاشتراطات الحكومية الواجب توفرها بالمنشأة وتزويد
                العميل بها لمختلف الجهات
              </p>

              <p>
                2- المتابعة الدورية للمنصات الحكومية المتعلقة بالمنشأة والقيام
                بالإجراءات اللازمة
              </p>

              <p>3- إصدار التراخيص الحكومية اللازمة للمنشأة إلكترونياً.</p>

              <p>
                4- المتابعة الدورية للتراخيص الحكومية ذات العلاقة بالمنشأة
                وتنبيه العميل قبل انتهائها.
              </p>

              <p>
                5 - المتابعة الدورية للتراخيص الحكومية ذات العلاقة بموظفي
                المنشأة والتسجيل في الهيئات إن وجد.{" "}
              </p>

              <p>
                6- متابعة ورفع الطلبات الحكومية المتعلقة بالمنشأة إلكترونياً
              </p>

              <p>7- التفاويض والتصاديق الحكومية إلكترونياً.</p>
              <p>8- تنسيق مراجعات الجهات الحكومية حضورياً إذا لزم الأمر.</p>
              <p>
                9- إجراءات نقل الكفالة وطلب العمالة والتأشيرات أو تسجيل الموظفين
                لدى التأمينات الاجتماعية.
              </p>
            </div>
          </div>

          <div className="texticone">
            <div className="shadowline">
              <ul>
                <li>1. خدمات التوظيف</li>
                <li>2 . خدمات المزايا والمكافآت والأمور المالية</li>
                <li>3 . خدمات شؤون الموظفين</li>
                <li>4 . الخدمات التنظيمية والامتثال لقوانين العمل</li>
                <li>5 . خدمات التطوير والتدريب</li>
              </ul>
            </div>
          </div>
          <div className="texticone">
            <div className="shadowline">
              <ul>
                <li>1. خدمات مسك الدفاتر المحاسبية</li>
                <li>2. خدمات إنشاء الشجرة المحاسبية. </li>
                <li>3. خدمات إعداد القوائم المالية والتوضيحات والافصاحات</li>
                <li>4. خدمات محاسبة التكاليف.</li>
                <li>5. خدمات التسويات البنكية.</li>
                <li>6. خدمات ضريبة القيمة المضافة.</li>
                <li>7. خدمات الزكاة والضرائب.</li>
                <li>8. خدمات المراجعة والتدقيق.</li>
                <li>9. خدمات الإجراءات المتفق عليها </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
