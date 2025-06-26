const TrendingNews = () => (
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
              <div className="tiny-slider-inner" data-autoplay="true" data-hoverpause="true" data-gutter="0" data-arrow="true" data-dots="false" data-items="1">
                <div>
                  <a href="#" className="text-reset btn-link">افزایش آلودگی هوا در شهرهای پُرجمعیت تا فردا</a>
                </div>
                <div>
                  <a href="#" className="text-reset btn-link">حضورمسیحیان در حرم سامرابا آغاز سال جدید </a>
                </div>
                <div>
                  <a href="#" className="text-reset btn-link">انتقاد ستاره رئال از شعارهای نژادپرستانه </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrendingNews; 