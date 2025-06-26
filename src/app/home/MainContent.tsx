import { getPosts, getUserById, getCategoryById, getPopularPosts } from '../../lib/data';
import Link from 'next/link';

const MainContent = () => {
  const allPosts = getPosts();
  const popularPosts = getPopularPosts(5);

  return (
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
              {allPosts.slice(0, 6).map((post) => (
                <div key={post.id} className="col-sm-6">
                  <div className="card">
                    <div className="position-relative">
                      <img className="card-img" src={post.image} alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        <div className="w-100 mt-auto d-flex justify-content-center">
                          <span className={`badge text-bg-${getCategoryById(post.category_id)?.color} mb-2`}>
                            <i className="fas fa-circle me-2 small fw-bold"></i>{getCategoryById(post.category_id)?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title">
                        <Link href={`/blog/${post.slug}`} className="btn-link text-reset stretched-link">
                          {post.title}
                        </Link>
                      </h5>
                      <p className="card-text">{post.content.substring(0, 100)}...</p>
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center text-body-secondary">
                              <div className="avatar avatar-xs me-2">
                                <img className="avatar-img rounded-circle" src={getUserById(post.author_id)?.avatar} alt="avatar" />
                              </div>
                              <span>{getUserById(post.author_id)?.name}</span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <span className="nav-link small">
                            <i className="far fa-clock me-1"></i>{post.reading_time} دقیقه
                          </span>
                        </li>
                        <li className="nav-item">
                          <span className="nav-link small">
                            <i className="far fa-eye me-1"></i>{post.views_count.toLocaleString()}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-3">
            <div data-sticky="true" data-margin-top="80" data-sticky-for="1199">
              {/* Author */}
              <div className="card">
                <div className="card-body text-center">
                  <div className="avatar avatar-xl mx-auto mb-3">
                    <img className="avatar-img rounded-circle" src="/assets/images/avatar/01.jpg" alt="avatar" />
                  </div>
                  <h6 className="mb-1">ادمین</h6>
                  <p className="small mb-3">مدیر سایت و سردبیر</p>
                  <div className="d-grid">
                    <Link href="#" className="btn btn-sm btn-primary-soft">مشاهده پروفایل</Link>
                  </div>
                </div>
              </div>

              {/* Popular posts */}
              <div className="card">
                <div className="card-header pb-0">
                  <h5 className="card-title mb-0">محبوب ترین مقالات</h5>
                </div>
                <div className="card-body">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="d-flex mb-3">
                      <img className="rounded" src={post.image} width="100" height="60" alt="post" />
                      <div className="ms-3">
                        <h6 className="mb-1">
                          <Link href={`/blog/${post.slug}`} className="btn-link text-reset stretched-link">
                            {post.title}
                          </Link>
                        </h6>
                        <div className="small text-body-secondary">
                          <i className="far fa-eye me-1"></i>{post.views_count.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="card bg-primary">
                <div className="card-body text-center">
                  <h6 className="text-white">عضویت در خبرنامه</h6>
                  <p className="text-white-50 small">برای دریافت آخرین اخبار عضو شوید</p>
                  <form>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" placeholder="ایمیل شما" />
                      <button className="btn btn-light" type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
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
};

export default MainContent; 