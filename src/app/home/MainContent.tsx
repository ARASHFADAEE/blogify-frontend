const MainContent = () => (
  <section className="position-relative">
    <div className="container" data-sticky-container="true">
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-9">
          <div className="mb-4">
            <h2 className="m-0">
              <i className="bi bi-hourglass-top me-2"></i>سایر اخبار مهم
            </h2>
            <p>آخرین اخبار، تصاویر، فیلم ها و گزارش های ویژه</p>
          </div>
          
          <div className="row gy-4">
            {/* Technology Article */}
            <div className="col-sm-6">
              <div className="card">
                <div className="position-relative">
                  <img className="card-img" src="/assets/images/blog/4by3/01.jpg" alt="Card image" />
                  <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div className="w-100 mt-auto">
                      <a href="#" className="badge text-bg-warning mb-2">
                        <i className="fas fa-circle me-2 small fw-bold"></i>تکنولوژی
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pt-3">
                  <a href="#!" className="mb-0 text-body small" tabIndex={0} role="button" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="شما این تبلیغ را می بینید زیرا فعالیت شما با مخاطبان مورد نظر سایت ما مطابقت دارد.">
                    <i className="bi bi-info-circle ps-1"></i> ویژه
                  </a>
                  <h4 className="card-title mt-2">
                    <a href="/post-single" className="btn-link text-reset">فیلم‌های بالیوودی الگوی ضدانقلاب شده!</a>
                  </h4>
                  <p className="card-text">ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد...</p>
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img className="avatar-img rounded-circle" src="/assets/images/avatar/01.jpg" alt="avatar" />
                          </div>
                          <span className="ms-3">با <a href="#" className="stretched-link text-reset btn-link">ادمین</a></span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">22 آذر، 1400</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tourism Article */}
            <div className="col-sm-6">
              <div className="card">
                <div className="position-relative">
                  <img className="card-img" src="/assets/images/blog/4by3/06.jpg" alt="Card image" />
                  <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div className="w-100 mb-auto d-flex justify-content-end">
                      <div className="text-end ms-auto">
                        <div className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle" title="This post has video">
                          <i className="fas fa-video"></i>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 mt-auto">
                      <a href="#" className="badge text-bg-danger mb-2">
                        <i className="fas fa-circle me-2 small fw-bold"></i>گردشگری
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pt-3">
                  <h4 className="card-title">
                    <a href="/post-single" className="btn-link text-reset">رازهای کوچک کثیف در مورد صنعت تجارت</a>
                  </h4>
                  <p className="card-text">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی...</p>
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img className="avatar-img rounded-circle" src="/assets/images/avatar/02.jpg" alt="avatar" />
                          </div>
                          <span className="ms-3">با <a href="#" className="stretched-link text-reset btn-link">میلاد بابایی</a></span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">7 دی، 1400</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-3 mt-5 mt-lg-0">
          <div data-sticky="true" data-margin-top="80" data-sticky-for="767">
            <div className="row g-2">
              <div className="col-4">
                <a href="#" className="bg-facebook rounded text-center text-white-force p-3 d-block">
                  <i className="fab fa-facebook-square fs-5 mb-2"></i>
                  <h6 className="m-0">1.5K</h6>
                  <span className="small">طرفدار</span>
                </a>
              </div>
              <div className="col-4">
                <a href="#" className="bg-instagram-gradient rounded text-center text-white-force p-3 d-block">
                  <i className="fab fa-instagram fs-5 mb-2"></i>
                  <h6 className="m-0">1.8M</h6>
                  <span className="small">حامیان</span>
                </a>
              </div>
              <div className="col-4">
                <a href="#" className="bg-youtube rounded text-center text-white-force p-3 d-block">
                  <i className="fab fa-youtube-square fs-5 mb-2"></i>
                  <h6 className="m-0">22K</h6>
                  <span className="small">بازدید</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MainContent; 