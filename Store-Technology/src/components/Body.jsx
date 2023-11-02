import "../App.css";
import "../assets/css/body.css";
import "../assets/js/home.js";
import "./data.json";

function Body() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {/* hero */}
          <section className="hero">
            {/* hero-slider */}
            <div className="swiper hero-sl">
              <div className="swiper-wrapper">
                <div className="swiper-slide hero-sl__item">
                  <a href="#">
                    <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/slider_2.jpg?1697770786196" />
                  </a>
                </div>
                {/* <div className="swiper-slide hero-sl__item">
                  <a href="#">
                    <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/slider_2.jpg?1697770786196" />
                  </a>
                </div>
                <div className="swiper-slide hero-sl__item">
                  <a href="#">
                    <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/slider_2.jpg?1697770786196" />
                  </a>
                </div> */}
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
            {/* discount code */}
            <div className="discount">
              <div className="discount-item">
                <h2>
                  Nhập mã: <span id="discount-code">OH50</span>
                </h2>
                <p>Giảm 50% cho đơn hàng giá trị tối thiểu 500.000. Mã giảm tối đa 200K</p>
                <div className="discount-item__ac row">
                  <button type="button" className="copy-code" id="copy-code">
                    Sao chép
                  </button>
                  <h4 className="condition" data-id={1}>
                    Điều kiện
                  </h4>
                </div>
              </div>
              <div className="discount-item">
                <h2>
                  Nhập mã: <span id="discount-code">OH60</span>
                </h2>
                <p>Giảm 60% cho đơn hàng giá trị tối thiểu 1000.000. Mã giảm tối đa 250K</p>
                <div className="discount-item__ac row">
                  <button type="button" className="copy-code" id="copy-code">
                    Sao chép
                  </button>
                  <h4 className="condition" data-id={2}>
                    Điều kiện
                  </h4>
                </div>
              </div>
              <div className="discount-item">
                <h2>
                  Nhập mã: <span id="discount-code">OH70</span>
                </h2>
                <p>Giảm 70% cho đơn hàng giá trị tối thiểu 1500.000. Mã giảm tối đa 300K</p>
                <div className="discount-item__ac row">
                  <button type="button" className="copy-code" id="copy-code">
                    Sao chép
                  </button>
                  <h4 className="condition" data-id={3}>
                    Điều kiện
                  </h4>
                </div>
              </div>
            </div>
          </section>
          {/* sale */}
          <section className="sale">
            <div className="sale-header">
              <img src="https://github.com/HungVN-Code/project-OH/blob/main/assets/image/flash_sale.png?raw=true" />
              <div className="sale-counter row">
                <div className="counter hour">03</div>
                <span>:</span>
                <div className="counter minute">00</div>
                <span>:</span>
                <div className="counter second">00</div>
              </div>
            </div>
            <div className="sale-list">{/* dữ liệu từ file data.json */}</div>
          </section>
          {/* banner */}
          <section className="banner">
            <div className="banner-left">
              <a href="#">
                <img src="https://github.com/HungVN-Code/project-OH/blob/main/assets/image/banner_1.png?raw=true" />
              </a>
            </div>
            <div className="banner-right">
              <div className="banner-box">
                <div className="banner-img">
                  <a href="#">
                    <img src="https://github.com/HungVN-Code/project-OH/blob/main/assets/image/banner_2.png?raw=true" />
                  </a>
                </div>
                <div className="banner-img">
                  <a href="#">
                    <img src="https://github.com/HungVN-Code/project-OH/blob/main/assets/image/banner_3.png?raw=true" />
                  </a>
                </div>
              </div>
              <div className="banner-vid">
                <div className="banner-img">
                  <a href="#">
                    <img src="https://github.com/HungVN-Code/project-OH/blob/main/assets/image/banner_4.png?raw=true" />
                  </a>
                </div>
                <div className="banner-img">
                  <a href="#">
                    <img src="https://github.com/HungVN-Code/project-OH/blob/main/assets/image/banner_5.png?raw=true" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* product */}
          <section className="product">
            <div className="sale-header">
              <h2 className="title-header">OH! - Hôm nay có gì?</h2>
              <a className="title-link" href="#">
                Xem tất cả
              </a>
            </div>
            <div className="product-list">{/* dữ liệu từ file data.json */}</div>
          </section>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      <script></script>
    </>
  );
}

export default Body;
