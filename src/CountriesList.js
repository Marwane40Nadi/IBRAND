import "./CountriesList.css";

export default function CountriesList() {
  return (
    <div className="countriesDiv">
      <div>
        <img src="/images/countries.jpg" className="coutriesImg" alt="countries img" />
      </div>
      <div>
        <p className="p1-writing">مواقعنا</p>
        <p className="p2-writing">
          تسمح شبكة خدماتنا المتنامية بتسليم أسرع وأوقات نقل أقصر
        </p>
        <p className="p3-writing">
          نساعدك من خلال شبكة مخازننا المتنامية والاندماج السلس على الوصول إلى
          عملائك بسرعة وفعالية وبأسعار معقولة. قم بتوسيع عملك وتوزيع بضائعك في
          مخازن استراتيجية تمتد عبر أربع قارات وأكثر من تسع دول.
        </p>
        <a href="#" className="a">ابدأ الآن</a>
      </div>
    </div>
  );
}
