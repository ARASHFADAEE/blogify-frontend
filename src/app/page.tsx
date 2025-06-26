import Link from 'next/link';

const Home = () => (
  <>
    {/* **************** MAIN CONTENT START **************** */}
    <main>
      {/* ======================= Trending START ======================= */}
      <section className="py-2">
        <div className="container">
          <div className="row g-0">
            <div className="col-12 bg-primary bg-opacity-10 p-2 rounded">
              <div className="d-sm-flex align-items-center text-center text-sm-start">
                {/* Title */}
                <div className="me-3">
                  <span className="badge bg-primary p-2 px-3">اخبار امروز:</span>
                </div>
                {/* Slider */}
                <div className="tiny-slider arrow-end arrow-xs arrow-white arrow-round arrow-md-none">
                  <div className="tiny-slider-inner"
                    data-autoplay="true"
                    data-hoverpause="true"
                    data-gutter="0"
                    data-arrow="true"
                    data-dots="false"
                    data-items="1">
                    {/* Slider items */}
                    <div> <a href="#" className="text-reset btn-link">افزایش آلودگی هوا در شهرهای پُرجمعیت تا فردا</a></div>
                    <div> <a href="#" className="text-reset btn-link">حضورمسیحیان در حرم سامرابا آغاز سال جدید </a></div>
                    <div> <a href="#" className="text-reset btn-link">انتقاد ستاره رئال از شعارهای نژادپرستانه </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* Row END */}
        </div>
      </section>
      {/* ======================= Trending END ======================= */}

      {/* ======================= Main hero START ======================= */}
      <section className="pt-4 pb-0 card-grid">
        <div className="container">
          <div className="row g-4">
            {/* Left big card */}
            <div className="col-lg-6">
              <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{backgroundImage: 'url(/assets/images/blog/1by1/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                <span className="card-featured" title=""><i className="fas fa-star"></i></span>
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>مگامنو</a>
                    <h2 className="text-white h1"><a href="/post-single-4" className="btn-link stretched-link text-reset">ده نشانه که نشان می دهد برای راه اندازی یک استارتاپ جدید به آن نیاز دارید.</a></h2>
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
            {/* Right small cards */}
            <div className="col-lg-6">
              <div className="row g-4">
                {/* Card item START */}
                <div className="col-12">
                  <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: 'url(/assets/images/blog/1by1/02.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                    <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>تکنولوژی</a>
                        <h4 className="text-white"><a href="/post-single-4" className="btn-link stretched-link text-reset">بهترین تابلوهای Pinterest برای یادگیری در مورد تجارت</a></h4>
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
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6">
                  <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: 'url(/assets/images/blog/1by1/03.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                    <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>اقتصاد</a>
                        <h4 className="text-white"><a href="/post-single-4" className="btn-link stretched-link text-reset">دلیل کاهش نرخ دلار </a></h4>
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
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6">
                  <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: 'url(/assets/images/blog/1by1/04.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                    <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>ورزش</a>
                        <h4 className="text-white"><a href="/post-single-4" className="btn-link stretched-link text-reset">جدول لیگ در پایان هفته</a></h4>
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
                {/* Card item END */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Main hero END ======================= */}

      {/* ======================= Main content START ======================= */}
      <section className="position-relative">
        <div className="container" data-sticky-container>
          <div className="row">
            {/* Main Post START */}
            <div className="col-lg-9">
              <div className="mb-4">
                <h2 className="m-0"><i className="bi bi-hourglass-top me-2"></i>سایر اخبار مهم</h2>
                <p>آخرین اخبار، تصاویر، فیلم ها و گزارش های ویژه</p>
              </div>
              <div className="row gy-4">
                {/* Card item START */}
                <div className="col-sm-6">
                  <div className="card">
                    <div className="position-relative">
                      <img className="card-img" src="/assets/images/blog/4by3/01.jpg" alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>تکنولوژی</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <a href="#!" className="mb-0 text-body small" tabIndex={0} role="button" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="شما این تبلیغ را می بینید زیرا فعالیت شما با مخاطبان مورد نظر سایت ما مطابقت دارد.">
                        <i className="bi bi-info-circle ps-1"></i> ویژه
                      </a>
                      <h4 className="card-title mt-2"><a href="/post-single" className="btn-link text-reset">فیلم‌های بالیوودی الگوی ضدانقلاب شده!</a></h4>
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
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-sm-6">
                  <div className="card">
                    <div className="position-relative">
                      <img className="card-img" src="/assets/images/blog/4by3/06.jpg" alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        <div className="w-100 mb-auto d-flex justify-content-end">
                          <div className="text-end ms-auto">
                            <div className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle" title="This post has video"><i className="fas fa-video"></i></div>
                          </div>
                        </div>
                        <div className="w-100 mt-auto">
                          <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>گردشگری</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h4 className="card-title"><a href="/post-single" className="btn-link text-reset">رازهای کوچک کثیف در مورد صنعت تجارت</a></h4>
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
                {/* Card item END */}
                {/* ... سایر کارت‌ها و بخش‌های اصلی ... */}
              </div>
            </div>
            {/* Main Post END */}
            {/* Sidebar START */}
            <div className="col-lg-3 mt-5 mt-lg-0">
              <div data-sticky data-margin-top="80" data-sticky-for="767">
                {/* Social widget START */}
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
                {/* Social widget END */}
                {/* ... سایر ویجت‌های سایدبار ... */}
              </div>
            </div>
            {/* Sidebar END */}
          </div> {/* Row end */}
        </div>
      </section>
      {/* ======================= Main content END ======================= */}

      {/* ======================= Newsletter START ======================= */}
      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-primary bg-opacity-10 rounded-3 p-4 p-sm-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="mb-3 mb-md-0">عضویت در خبرنامه</h4>
                  </div>
                  <div className="col-md-6">
                    <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
                      <div className="col-12">
                        <input type="email" className="form-control" placeholder="ایمیل خود را وارد کنید" />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary mb-0">عضویت</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Newsletter END ======================= */}

    </main>
  </>
);

export default Home;