import React from "react";
import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistic">
        <h2>11+</h2>
        <p className="statistics-p">دولة</p>
        <p>
          متواجدون في أكبر الدول التي تتوفر على جمهور ذو قيمة شرائية عالية ونحن
          في صدد دراسة فتح أسواق خالية من المنافسة والتي تتوفر على جمهور مستهلك
        </p>
      </div>
      <div className="statistic">
        <h2>17+</h2>
        <p className="statistics-p">مستودع</p>
        <p>
          نقوم بتخزين البضائع المستوردة داخل مستودعاتنا فور قدومها حتى الوصول
          إلى وجهتها الأخيرة{" "}
        </p>
      </div>
      <div className="statistic">
        <h2>10k+</h2>
        <p className="statistics-p">طلب يوميًا</p>
        <p>نمتلك قدرة توصيل كبيرة في أقصر وقت ممكن.</p>
      </div>
      <div className="statistic">
        <h2>20k+</h2>
        <p className="statistics-p">عميل راضٍ</p>
        <p>هدفنا الرئيسي هو توفير أفضل جودة للخدمات لعملائنا.</p>
      </div>
    </div>
  );
};

export default Statistics;
