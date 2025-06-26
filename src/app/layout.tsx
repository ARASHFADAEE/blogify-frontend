import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import Header from "./Header";
import Footer from "./Footer";

// تنظیمات متادیتا
export const metadata: Metadata = {
  title: 'Blogzine - قالب HTML مجله خبری و وبلاگ',
  description: 'قالب وبلاگ و مجله خبری مبتنی بر بوت استرپ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-bs-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Blogzine" />
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
      </head>
      <body>
        {/* Preloader */}


        {/* Header */}
        <Header />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Cookies Alert */}
        <div className="alert alert-light alert-dismissible fade show position-fixed bottom-0 start-50 translate-middle-x z-index-99 d-lg-flex justify-content-between align-items-center shadow p-4 col-9 col-md-5" role="alert">
          <p className="m-0 pe-3">
            کوکی‌ها در رایانه شما ذخیره خواهد شد. برای اطلاعات بیشتر به <Link className="text-reset" href="#"> <u>شرایط و قوانین</u></Link> سایت مراجعه کنید.
          </p>
          <div className="d-flex mt-3 mt-lg-0">
            <button type="button" className="btn btn-success-soft btn-sm mb-0 me-2" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">پذیرفتن</span>
            </button>
            <button type="button" className="btn btn-danger-soft btn-sm mb-0" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">رد کردن</span>
            </button>
          </div>
        </div>

        {/* Back to top */}
        <div className="back-top"><i className="bi bi-arrow-up-short"></i></div>

        {/* Bootstrap JS */}
        <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

        {/* Vendors */}
        <Script src="/assets/vendor/tiny-slider/tiny-slider-rtl.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/sticky-js/sticky.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/plyr/plyr.js" strategy="afterInteractive" />

        {/* Template Functions */}
        <Script src="/assets/js/functions.js" strategy="afterInteractive" />

        {/* Dark Mode Script */}
        <Script id="dark-mode-script" strategy="afterInteractive">
          {`
            // Simple dark mode functionality
            function initDarkMode() {
              // Get stored theme or default to light
              const currentTheme = localStorage.getItem('theme') || 'light';
              
              // Apply theme
              document.documentElement.setAttribute('data-bs-theme', currentTheme);
              
              // Update active button
              const activeButton = document.querySelector(\`[data-bs-theme-value="\${currentTheme}"]\`);
              if (activeButton) {
                document.querySelectorAll('[data-bs-theme-value]').forEach(btn => {
                  btn.classList.remove('active');
                });
                activeButton.classList.add('active');
              }
              
              // Update theme icon
              const themeIcon = document.querySelector('.theme-icon-active use');
              if (themeIcon) {
                let iconHref = '#sun-fill';
                if (currentTheme === 'dark') {
                  iconHref = '#moon-stars-fill';
                } else if (currentTheme === 'auto') {
                  iconHref = '#circle-half';
                }
                themeIcon.setAttribute('href', iconHref);
              }
            }
            
            // Add click listeners
            function addThemeListeners() {
              document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
                button.addEventListener('click', function(e) {
                  e.preventDefault();
                  const theme = this.getAttribute('data-bs-theme-value');
                  
                  // Store theme
                  localStorage.setItem('theme', theme);
                  
                  // Apply theme
                  document.documentElement.setAttribute('data-bs-theme', theme);
                  
                  // Update active button
                  document.querySelectorAll('[data-bs-theme-value]').forEach(btn => {
                    btn.classList.remove('active');
                  });
                  this.classList.add('active');
                  
                  // Update theme icon
                  const themeIcon = document.querySelector('.theme-icon-active use');
                  if (themeIcon) {
                    let iconHref = '#sun-fill';
                    if (theme === 'dark') {
                      iconHref = '#moon-stars-fill';
                    } else if (theme === 'auto') {
                      iconHref = '#circle-half';
                    }
                    themeIcon.setAttribute('href', iconHref);
                  }
                });
              });
            }
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                initDarkMode();
                addThemeListeners();
              });
            } else {
              initDarkMode();
              addThemeListeners();
            }
          `}
        </Script>
      </body>
    </html>
  );
}