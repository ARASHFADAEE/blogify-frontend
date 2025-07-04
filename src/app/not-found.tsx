import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      {/* ======================= Inner intro START ======================= */}
      <section className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-9 text-center mx-auto my-0 my-md-5 py-0 py-lg-5 position-relative z-index-9">
              {/* SVG shape START */}
              <figure className="position-absolute top-50 start-50 translate-middle opacity-7 z-index-n9">
                <svg width="650" height="379" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 510 297">
                  <g>
                    <path className="fill-primary opacity-1" d="M121,147.4c0,6-4.8,10.8-10.8,10.8H47.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V147.4z"/>
                    <path className="fill-primary opacity-1" d="M179.4,90.2c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8V78.7c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V90.2z"/>
                    <path className="fill-primary opacity-1" d="M459.1,26.3c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8V14.8c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V26.3z"/>
                    <path className="fill-primary opacity-1" d="M422.1,66.9c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8V55.3c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V66.9z"/>
                    <path className="fill-primary opacity-1" d="M275.8,282.6c0,5.9-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V282.6z"/>
                    <path className="fill-primary opacity-1" d="M87.7,42.9c0,5.9-4.8,10.8-10.8,10.8H14.3c-6,0-10.8-4.8-10.8-10.8V31.4c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V42.9z"/>
                    <path className="fill-primary opacity-1" d="M505.9,123.4c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V123.4z"/>
                    <path className="fill-primary opacity-1" d="M482.5,204.9c0,5.9-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
                      c5.9,0,10.8,4.8,10.8,10.8V204.9z"/>
                    <path className="fill-primary opacity-1" d="M408.3,258.8c0,5.9-4.8,10.8-10.8,10.8H335c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V258.8z"/>
                    <path className="fill-primary opacity-1" d="M147,252.5c0,5.9-4.8,10.8-10.8,10.8H73.6c-6,0-10.8-4.8-10.8-10.8V241c0-5.9,4.8-10.8,10.8-10.8h62.6
                      c6,0,10.8,4.8,10.8,10.8V252.5z"/>
                  </g>
                </svg>
              </figure>
              {/* SVG shape END */}
              
              {/* Content */}
              <h1 className="display-1 text-primary">404</h1>
              <h2>صفحه موردنظر یافت نشد!</h2>
              <p>یا مشکلی پیش آمده یا این صفحه دیگر وجود ندارد.</p>
              <Link href="/" className="btn btn-danger-soft mt-3">
                <i className="fas fa-long-arrow-alt-left me-3"></i>برگشت به خانه
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Inner intro END ======================= */}
    </main>
  );
} 