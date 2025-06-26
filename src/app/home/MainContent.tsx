import { getPosts, getUserById, getCategoryById, getPopularPosts, getCategories } from '../../lib/data';
import Link from 'next/link';

const MainContent = () => {
  const allPosts = getPosts();
  const popularPosts = getPopularPosts(5);
  const categories = getCategories();

  // بخش برگزیده‌ها (Featured Categories)
  const featuredCategories = categories.slice(0, 4);

  return (
    <section className="position-relative">
      <div className="container" data-sticky-container>
        <div className="row">
          {/* Main Post START */}
          <div className="col-lg-9">
            {/* Title */}
            <div className="mb-4">
              <h2 className="m-0"><i className="bi bi-hourglass-top me-2"></i>سایر اخبار مهم</h2>
              <p>آخرین اخبار، تصاویر، فیلم ها و گزارش های ویژه</p>
            </div>
            <div className="row gy-4">
              {allPosts.slice(0, 6).map((post, idx) => (
                <div key={post.id} className="col-sm-6">
                  <div className="card">
                    {/* Card img */}
                    <div className="position-relative">
                      <img className="card-img" src={post.image} alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* Card overlay top (مثال: ویدیو) */}
                        {post.type === 'video' && (
                          <div className="w-100 mb-auto d-flex justify-content-end">
                            <div className="text-end ms-auto">
                              <div className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle" title="This post has video"><i className="fas fa-video"></i></div>
                            </div>
                          </div>
                        )}
                        {/* Card overlay bottom */}
                        <div className="w-100 mt-auto">
                          {post.category_id && (
                            (() => {
                              const cat = getCategoryById(post.category_id);
                              return cat ? (
                                <Link href={`/category/${cat.slug}`} className={`badge text-bg-${cat.color || 'primary'} mb-2 me-2`}>
                                  <i className="fas fa-circle me-2 small fw-bold"></i>{cat.name}
                                </Link>
                              ) : null;
                            })()
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      {/* Sponsored Post */}
                      {idx === 0 && (
                        <a href="#!" className="mb-0 text-body small" tabIndex={0} role="button" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="شما این تبلیغ را می بینید زیرا فعالیت شما با مخاطبان مورد نظر سایت ما مطابقت دارد.">
                          <i className="bi bi-info-circle ps-1"></i> ویژه
                        </a>
                      )}
                      <h4 className="card-title mt-2">
                        <Link href={`/blog/${post.slug}`} className="btn-link text-reset">{post.title}</Link>
                      </h4>
                      <p className="card-text">{post.content.substring(0, 100)}...</p>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src={getUserById(post.author_id)?.avatar} alt="avatar" />
                              </div>
                              <span className="ms-3">با <Link href={`/author/${getUserById(post.author_id)?.slug}`} className="stretched-link text-reset btn-link">{getUserById(post.author_id)?.name}</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">{new Date(post.created_at).toLocaleDateString('fa-IR')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              {/* Load more button */}
              <div className="col-12 text-center mt-5">
                <button type="button" className="btn btn-primary-soft">مشاهده بیشتر <i className="bi bi-arrow-down-circle ms-2 align-middle"></i></button>
              </div>
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

              {/* Trending topics widget START */}
              <div>
                <h4 className="mt-4 mb-3">برگزیده ها</h4>
                {featuredCategories.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className={`text-center mb-3 card-bg-scale position-relative overflow-hidden rounded${idx === 0 ? ' bg-dark-overlay-4' : ''}`}
                    style={{
                      backgroundImage: `url(/assets/images/blog/4by3/0${cat.id}.jpg)`,
                      backgroundPosition: 'left center',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className={idx === 0 ? 'p-3' : 'bg-dark-overlay-4 p-3'}>
                      <Link href={`/category/${cat.slug}`} className="stretched-link btn-link text-white h5">
                        {cat.name}
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="text-center mt-3">
                  <Link className="text-body text-primary-hover" href="/categories"><u>مشاهده همه</u></Link>
                </div>
              </div>
              {/* Trending topics widget END */}

              <div className="row">
                {/* Recent post widget START */}
                <div className="col-12 col-sm-6 col-lg-12">
                  <h4 className="mt-4 mb-3">پربحث ها</h4>
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="card mb-3">
                      <div className="row g-3">
                        <div className="col-4">
                          <img className="rounded" src={`/assets/images/blog/4by3/thumb/0${i}.jpg`} alt="" />
                        </div>
                        <div className="col-8">
                          <h6><Link href="#" className="btn-link stretched-link text-reset">عنوان پربحث {i}</Link></h6>
                          <div className="small mt-1">تاریخ نمونه</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Recent post widget END */}

                {/* ADV widget START */}
                <div className="col-12 col-sm-6 col-lg-12 my-4">
                  <a href="#" className="d-block card-img-flash">
                    <img src="/assets/images/adv.png" alt="" />
                  </a>
                  <div className="smaller text-end mt-2">تبلیغ در سایت <Link href="#" className="text-body"><u>انتخاب</u></Link></div>
                </div>
                {/* ADV widget END */}
              </div>
            </div>
          </div>
          {/* Sidebar END */}
        </div>
      </div>
    </section>
  );
};

export default MainContent; 