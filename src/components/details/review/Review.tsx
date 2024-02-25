"use clinet";

import Image from "next/image";

const Review = () => {
  return (
    <div className="container">
      <div className="be-comment-block mb-12 border border-[#edeff2] rounded-sm py-12 px-16">
        <h1 className="comments-title text-base text-[#262626] mb-4">
          نظرات (3)
        </h1>
        <div className="be-comment mb-3">
          <div className="be-img-comment w-[60px] h-[60px] float-right mb-4  relative">
            <a href="blog-detail-2.html" className="text-[#383b43]">
              <Image
                fill
                src="https://uploade.storage.iran.liara.space/my.png"
                alt="https://uploade.storage.iran.liara.space/my.png"
                className="w-[60px] h-[60px] rounde-[50%]"
              />
            </a>
          </div>
          <div className="be-comment-content ml-[0px] md:ml-[80px]">
            <span className="be-comment-name inline-block w-[49%] mb-4 text-sm mr-3">
              <a href="blog-detail-2.html" className="text-[#383b43]">
                Ravi Sah
              </a>
            </span>
            <span className="be-comment-time  text-xs text-[#b4b7c1] text-right  inline-block w-[49%] mb-4 mr-3">
              <i className="fa fa-clock-o"></i>
              May 27, 2015 at 3:14am
            </span>

            <p className="be-comment-text text-xs flex md:w-[70%] lg:w-[80%] justify-center text-[#7a8192]  bg-[#f6f6f7] border border-[#edeff2] pt-[15px] pr-[20px] pb-[20px] pl-[20px] ">
              Pellentesque gravida tristique ultrices. Sed blandit varius
              mauris, vel volutpat urna hendrerit id. Curabitur rutrum dolor
              gravida turpis tristique efficitur.
            </p>
          </div>
        </div>

        <form className="form-block">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="form-group fl_icon my-2">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <input
                  className="form-input  text-sm font-normal text-[#b4b7c1] w-full h-[50px] pl-5  pr-5 border border-[#edeff2] rounded"
                  type="text"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 fl_icon">
              <div className="form-group fl_icon my-2">
                <div
                  className="icon absolute top-[1px] left-4 w-[48px] h-[48px] bg-[#f6f6f7] text-[#b5b8c2] text-center "
                  style={{
                    WebkitBorderTopLeftRadius: "2px",
                    WebkitBorderBottomLeftRadius: "2px",
                    borderTopLeftRadius: "2px",
                    borderBottomLeftRadius: "2px",
                  }}
                >
                  <i className="fa fa-envelope-o"></i>
                </div>
                <input
                  className="form-input text-sm font-normal text-[#b4b7c1] w-full h-[50px] pl-5 pr-5 border border-[#edeff2] rounded"
                  type="text"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="col-xs-12 my-2">
              <div className="form-group">
                <textarea
                  className="form-input h-[150px] text-sm font-normal text-[#b4b7c1] w-full pl-5 pt-2 pr-5 border border-[#edeff2] rounded"
                  placeholder="Your text"
                ></textarea>
              </div>
            </div>
            <a className="bg-blue-600 px-3 py-2  rounded-lg text-white text-lg float-left cursor-pointer hover:bg-blue-500">
              ارسال نظر
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
