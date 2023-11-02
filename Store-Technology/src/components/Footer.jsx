import "../App.css";
import "../assets/js/home.js";
import "../assets/css/footer.css";

function Footer() {
  return (
    <>
      <div>
        {/* footer */}
        <footer>
          {/* footer-top */}
          <div className="footer-top">
            <div className="footer-tp__item">
              <h3>Hỗ trợ khách hàng</h3>
              <a href="#">Thẻ ưu đãi</a>
              <a href="#">Trung tâm bảo hành</a>
              <a href="#">Thanh toán và giao hàng</a>
              <a href="#">Dịch vụ sửa chữa và bảo trì</a>
              <a href="#">Doanh nghiệp thân thiết</a>
            </div>
            <div className="footer-tp__item">
              <h3>Chính sách mua hàng</h3>
              <a href="#">Quy định chung</a>
              <a href="#">Chính sách Bảo mật Thông tin</a>
              <a href="#">Chính sách Vận chuyển và Lắp đặt</a>
              <a href="#">Chính sách bảo hành</a>
              <a href="#">Chính sách đổi trả và hoàn tiền</a>
            </div>
            <div className="footer-tp__item">
              <h3>Thông tin cửa hàng</h3>
              <a href="#">Giới thiệu OH!Điện máy</a>
              <a href="#">Thông tin liên hệ</a>
              <a href="#">Hệ thống Showroom</a>
              <a href="#">Hỏi đáp</a>
              <a href="#">Tin công nghệ</a>
            </div>
            <div className="footer-tp__item">
              <h3>Hỗ trợ khách hàng</h3>
              <div className="footer-tp__vid">
                <p>Hỗ trợ Khách hàng</p>
                <a href="#">cskh@ohcompany.vn</a>
              </div>
              <div className="footer-tp__vid">
                <p>Liên hệ báo giá</p>
                <a href="#">baogia@ohcompany.vn</a>
              </div>
              <div className="footer-tp__vid">
                <p>Hợp tác phát triển</p>
                <a href="#">hoptac@ohcompany.vn</a>
              </div>
            </div>
          </div>
          {/* footer-below */}
          <div className="footer-below">
            <div className="footer-bl__item">
              <h3>CÔNG TY CỔ PHẦN THƯƠNG MẠI - DỊCH VỤ OH!Company</h3>
              <p>Giấy chứng nhận ĐKDN số 0123456789 do Sở kế hoạch và đầu tư thành phố Hà Nội cấp ngày 22 tháng 06 năm 2020.</p>
              <p>© Bản quyền thuộc về OH!Team. Cung cấp bởi hung93171@donga.edu.vn</p>
            </div>
            <div className="footer-bl__item">
              <h4>Địa chỉ trụ sở chính:</h4>
              <p>Tầng 5, Số 117-119-121 Nguyễn Du, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</p>
              <h4>Văn phòng điều hành miền Bắc:</h4>
              <p>Tầng 6, Số 1 Phố Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội</p>
              <h4>Văn phòng điều hành miền Nam:</h4>
              <p>Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</p>
            </div>
          </div>
        </footer>
        {/* end */}
        {/* back to top */}
        <div className="back-to-top" id="back-to-top">
          <i className="bx bxs-chevron-up" />
        </div>
        {/* end */}
      </div>
    </>
  );
}

export default Footer;
