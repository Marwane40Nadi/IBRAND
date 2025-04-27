import "./services.css";
const services = [
  { icon: "/images/الاستيراد.png", title: "الاستيراد" },
  { icon: "/images/التخليص الجمركي.png", title: "التخليص الجمركي" },
  { icon: "/images/التخزين والإيفاء بالطلبات.png", title: "التخزين والإيفاء بالطلبات" },
  { icon: "/images/الشحن.png", title: "الشحن" },
  { icon: "/images/مركز الاتصال.png", title: "مركز الاتصال" },
  { icon: "/images/تحويل الأموال عند تحصيلها.png", title: "تحويل الأموال عند تحصيلها" },
];
export default function Services() {
  return (
    <>
      <div id="serDiv">
        <section id="hero">
          <span id="tag">خدماتنا</span>
          <h1 id="hero-title">
            ركز فقط في طريقة التسويق ودع IBRAND تتولى المهام الصعبة
          </h1>
          <p id="hero-text">
            سواء كنت مسوق إلكتروني، تاجر أو بائع بالجملة، يمكنك الاعتماد على
            منصة IBRAND في الولوج إلى عالم التجارة الإلكترونية والتسويق لمنتجاتك
            في دول الشرق الأوسط وشمال إفريقيا ودول أخرى بأقل التكاليف.
          </p>
        </section>
        <div className="service-container">
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <img src={service.icon} className="service-icon"/>
                <span className="service-title">{service.title}</span>
                <span className="service-arrow">←</span>
              </div>
            ))}
          </div>
          <p className="service-text">هل ترغب في الانضمام إلينا؟ <span className="الآن">ابدأ الآن</span></p>
        </div>
      </div>
    </>
  );
}
