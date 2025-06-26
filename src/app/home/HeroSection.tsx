const HeroSection = () => (
  <section className="pt-4 pb-0 card-grid">
    <div className="container">
      <div className="row g-4">
        {/* Main Hero Card */}
        <div className="col-lg-6">
          <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{backgroundImage: "url(/assets/images/blog/1by1/01.jpg)", backgroundPosition: "center left", backgroundSize: "cover"}}>
            <span className="card-featured" title="">
              <i className="fas fa-star"></i>
            </span>
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div className="w-100 mt-auto">
                <a href="#" className="badge text-bg-danger mb-2">
                  <i className="fas fa-circle me-2 small fw-bold"></i>مگامنو
                </a>
                <h2 className="text-white h1">
                  <a href="/post-single-4" className="btn-link stretched-link text-reset">ده نشانه که نشان می دهد برای راه اندازی یک استارتاپ جدید به آن نیاز دارید.</a>
                </h2>
                <p className="text-white">در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد. </p>
                <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                  <li className="nav-item">
                    <div className="nav-link">
                      <div className="d-flex align-items-center text-white position-relative">
                        <div className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" src="/assets/images/avatar/11.jpg" alt="avatar" />
                        </div>
                        <span className="ms-3">با <a href="#" className="stretched-link text-reset btn-link">سهیلا صالحی</a></span>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">15 دی، 1400</li>
                  <li className="nav-item">5 دقیقه زمان مطالعه</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="col-lg-6">
          <div className="row g-4">
            {/* Technology Card */}
            <div className="col-12">
              <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: "url(/assets/images/blog/1by1/02.jpg)", backgroundPosition: "center left", backgroundSize: "cover"}}>
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge text-bg-warning mb-2">
                      <i className="fas fa-circle me-2 small fw-bold"></i>تکنولوژی
                    </a>
                    <h4 className="text-white">
                      <a href="/post-single-4" className="btn-link stretched-link text-reset">بهترین تابلوهای Pinterest برای یادگیری در مورد تجارت</a>
                    </h4>
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                      <li className="nav-item position-relative">
                        <div className="nav-link">با <a href="#" className="stretched-link text-reset btn-link">مهدی راد</a></div>
                      </li>
                      <li className="nav-item">18 تیر، 1400</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Economy Card */}
            <div className="col-md-6">
              <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: "url(/assets/images/blog/1by1/03.jpg)", backgroundPosition: "center left", backgroundSize: "cover"}}>
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge text-bg-success mb-2">
                      <i className="fas fa-circle me-2 small fw-bold"></i>اقتصاد
                    </a>
                    <h4 className="text-white">
                      <a href="/post-single-4" className="btn-link stretched-link text-reset">دلیل کاهش نرخ دلار </a>
                    </h4>
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                      <li className="nav-item position-relative">
                        <div className="nav-link">با <a href="#" className="stretched-link text-reset btn-link">مسعود خالدی</a></div>
                      </li>
                      <li className="nav-item">8 دی، 1400</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports Card */}
            <div className="col-md-6">
              <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: "url(/assets/images/blog/1by1/04.jpg)", backgroundPosition: "center left", backgroundSize: "cover"}}>
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge text-bg-info mb-2">
                      <i className="fas fa-circle me-2 small fw-bold"></i>ورزش
                    </a>
                    <h4 className="text-white">
                      <a href="/post-single-4" className="btn-link stretched-link text-reset">جدول لیگ در پایان هفته</a>
                    </h4>
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                      <li className="nav-item position-relative">
                        <div className="nav-link">با <a href="#" className="stretched-link text-reset btn-link">شادی اسدی</a></div>
                      </li>
                      <li className="nav-item">28 آذر، 1400</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 