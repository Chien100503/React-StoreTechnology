import "../App.css";
import "../assets/js/home.js";
import "../assets/css/header.css";

function Header() {
  return (
    <header id="header">
      <div className="container">
        {/* header-top */}
        <div className="header-top">
          <a href="./index.html">
            <img src="https://hungvn-code.github.io/project-OH/assets/image/logo.png" alt="OH" className="logo" />
          </a>
          <div className="header-t__nav row">
            <a href="#">
              <div className="header-t__button row" id="header-t__system">
                <nav>
                  <h4>Hệ thống cửa hàng</h4>
                  <span>40 cửa hàng</span>
                </nav>
                <i className="bx bxs-down-arrow" />
              </div>
            </a>
            <form action method="post">
              <div className="search-nav">
                <input type="text" name="search" className="search-input" placeholder="Tìm kiếm sản phẩm..." />
                <button type="submit" name="search-submit" className="search-button">
                  <i className="bx bx-search" />
                </button>
              </div>
            </form>
            <a href="#">
              <div className="header-t__button row">
                <h4>Lịch sử đơn hàng</h4>
              </div>
            </a>
          </div>
          <div className="header-action row">
            <a href="tel:19006750">
              <div className="header-ac__item row">
                <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/phone.svg?1697770786196" />
                <nav>
                  <h3>Hotline</h3>
                  <span>19006750</span>
                </nav>
              </div>
            </a>
            <div className="header-ac__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/user.svg?1697770786196" />
              <nav>
                <h3>Tài khoản</h3>
                <span>OH, hello</span>
              </nav>
              {/* md-action */}
              <div className="md-action">
                <a href="#" className="md-action__item">
                  Đăng kí
                </a>
                <a href="#" className="md-action__item">
                  Đăng nhập
                </a>
              </div>
            </div>
            <a href="#">
              <div className="header-ac__item row">
                <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/cart.svg?1697770786196" />
                <div className="cart-number">10</div>
                <nav>
                  <h3>Giỏ hàng</h3>
                  <span>Thanh toán</span>
                </nav>
              </div>
            </a>
          </div>
        </div>
        {/* header-below */}
        <div className="header-below row">
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_1.png?1693994595865" />
              <span>Tivi</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_2.png?1693994595865" />
              <span>Tủ lạnh</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_3.png?1693994595865" />
              <span>Máy lạnh</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_4.png?1693994595865" />
              <span>Máy giặt</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_5.png?1693994595865" />
              <span>Gia dụng</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_6.png?1693994595865" />
              <span>Loa</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_7.png?1693994595865" />
              <span>Tủ đông</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_8.png?1693994595865" />
              <span>Máy lọc khí</span>
            </div>
          </a>
          <a href="#">
            <div className="header-be__item row">
              <img src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/menu_ico_9.png?1693994595865" />
              <span>Văn Phòng</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
