import "./services.css";
const services = [
  { icon: "🌍", title: "الاستيراد" },
  { icon: "🌍", title: "التخليص الجمركي" },
  { icon: "🌍", title: "التخزين والإيفاء بالطلبات" },
  { icon: "🌍", title: "الشحن" },
  { icon: "🌍", title: "مركز الاتصال" },
  { icon: "🌍", title: "تحويل الأموال عند تحصيلها" },
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
                <span className="service-icon">{service.icon}</span>
                <span className="service-title">{service.title}</span>
                <span className="service-arrow">←</span>
              </div>
            ))}
          </div>
          <button className="service-btn">خدماتنا</button>
          <p className="service-text">هل ترغب في الانضمام إلينا؟ <span className="الآن">ابدأ الآن</span></p>
        </div>
      </div>
    </>
  );
}
