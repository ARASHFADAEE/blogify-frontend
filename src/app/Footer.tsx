import React from "react";
import Link from 'next/link';

const Footer = () => (
  <footer className="pb-0">
    <div className="container">
      <hr />
      <div className="row pt-5">
        <div className="col-md-6 col-lg-4 mb-4">
          <img className="light-mode-item" src="/assets/images/logo.svg" alt="logo" />
          <img className="dark-mode-item" src="/assets/images/logo-light.svg" alt="logo" />
          <p className="mt-3">این قالب مبتنی بر بوت استرپ 5 برای همه انواع سایت های مجله خبری و وبلاگ مناسب است.</p>
          <div className="mt-4">
            ©2022 ارائه شده در سایت <Link href="https://rtlhtml.ir/" className="text-reset btn-link" target="_blank">راست چین</Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <h5 className="mb-4">لینک های مفید</h5>
          <div className="row">
            <div className="col-6">
              <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link pt-0" href="#">درباره ما</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">داشبورد</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">تماس با ما</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">خرید قالب</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">پشتیبانی</Link></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link pt-0" href="#">اخبار</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">بین الملل <span className="badge text-bg-danger ms-2">2</span></Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">تکنولوژی</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">اقتصاد</Link></li>
                <li className="nav-item"><Link className="nav-link" href="#">سیاست</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <h5 className="mb-4">پربیننده ترین</h5>
          <ul className="list-inline">
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-primary-soft">گردشگری</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-warning-soft">اقتصاد</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-success-soft">بورس</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-danger-soft">قیمت طلا</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-info-soft">فناوری و اطلاعات</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-primary-soft">قیمت ارز امروز</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-warning-soft">مگامنو</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-success-soft">ورزش</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-danger-soft">کووید</Link></li>
            <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-info-soft">فرهنگ</Link></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-2 mb-4">
          <h5 className="mb-4">شبکه های اجتماعی</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><Link className="nav-link pt-0" href="#"><i className="fab fa-facebook-square fa-fw me-2 text-facebook"></i>Facebook</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#"><i className="fab fa-twitter-square fa-fw me-2 text-twitter"></i>Twitter</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#"><i className="fab fa-linkedin fa-fw me-2 text-linkedin"></i>Linkedin</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#"><i className="fab fa-youtube-square fa-fw me-2 text-youtube"></i>YouTube</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 