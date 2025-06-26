const Newsletter = () => (
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
);

export default Newsletter; 