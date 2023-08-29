import React from "react";
// import './footer.css'
const Footer = () => {
  return (
    <div className="row footer-container">
      <div className="col-md-3 col-12 col">
        <div className=" box-container">
          <div className="box-title category ">دسته بندی</div>
          {/* <div className='col-12'>
                    
                </div> */}
          {/* <div className='col-12'> */}
          <div className="box">
            <a>انواع گل</a>
          </div>
          {/* </div> */}
          {/* <div className='col-12'>  */}
          <div className="box">
            <a>گلهای اپارتمانی</a>
          </div>
          {/* </div> */}
          {/* <div className='col-12'> */}
          <div className="box">
            <a> انواع کاکتوس</a>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="col-md-3 col-12 col">
        <div className=" box-container">
          <div className="box-title category">شبکه های مجازی </div>
          <div className="box social">
            <a>
              <i className="bi bi-instagram"></i>
            </a>
            <a>
              <i className="bi bi-telegram"></i>
            </a>
            <a>
              {" "}
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-12 col">
        <div className=" box-container">
          <div className="box-title category">اطلاعات تماس </div>
          <div className="box">
            <div className="open">
              <p>
                <i className="bi bi-clock-fill"></i> شنبه- پنجشبه : 8 - 17:30{" "}
              </p>
            </div>
            <div className="address">
              <p>
                <i className="bi bi-geo-alt-fill"></i>تهران:پیروزی{" "}
              </p>
            </div>
            <div className="phone">
              <p>
                <i className="bi bi-telephone"></i>
                <a href="tel:09391470427">09391470427</a>{" "}
              </p>
            </div>
            <div className="e-mail">
              <p>
                <i className="bi bi-envelope"></i> haamir3030@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-12 col">
        <div className=" box-container">
          <div className="box-title">نماد اعتماد </div>
          <div className="box trust">
            <img src="" alt="photo" />

            <img src="" alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
