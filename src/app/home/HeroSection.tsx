import { getFeaturedPosts, getRecentPosts, getUserById, getCategoryById } from '../../lib/data';
import Link from 'next/link';

const HeroSection = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(4);

  return (
    <section className="pt-4 pb-0 card-grid">
      <div className="container">
        <div className="row g-4">
          {/* Main Hero Card */}
          {featuredPosts.length > 0 && (
            <div className="col-lg-6">
              <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{backgroundImage: `url(${featuredPosts[0].image})`, backgroundPosition: "center left", backgroundSize: "cover"}}>
                <span className="card-featured" title="">
                  <i className="fas fa-star"></i>
                </span>
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 mt-auto">
                    <Link href="#" className="badge text-bg-danger mb-2">
                      <i className="fas fa-circle me-2 small fw-bold"></i>{getCategoryById(featuredPosts[0].category_id)?.name}
                    </Link>
                    <h2 className="text-white h1">
                      <Link href={`/blog/${featuredPosts[0].slug}`} className="btn-link text-reset stretched-link">
                        {featuredPosts[0].title}
                      </Link>
                    </h2>
                    <ul className="nav nav-divider text-white-force align-items-center small">
                      <li className="nav-item position-relative">
                        <div className="nav-link">
                          <div className="d-flex align-items-center text-white position-relative">
                            <div className="avatar avatar-sm me-2 bg-white/20 rounded-circle flex-shrink-0">
                              <img className="avatar-img rounded-circle" src={getUserById(featuredPosts[0].author_id)?.avatar} alt="avatar" />
                            </div>
                            <span className="text-white">{getUserById(featuredPosts[0].author_id)?.name}</span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <span className="nav-link">
                          <i className="far fa-clock me-1"></i>{featuredPosts[0].reading_time} دقیقه
                        </span>
                      </li>
                      <li className="nav-item">
                        <span className="nav-link">
                          <i className="far fa-eye me-1"></i>{featuredPosts[0].views_count.toLocaleString()}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Small Cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              {recentPosts.slice(0, 4).map((post, index) => (
                <div key={post.id} className="col-sm-6">
                  <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: `url(${post.image})`, backgroundPosition: "center left", backgroundSize: "cover"}}>
                    <div className="card-img-overlay d-flex align-items-center p-3">
                      <div className="w-100 mt-auto">
                        <Link href="#" className="badge text-bg-warning mb-2">
                          <i className="fas fa-circle me-2 small fw-bold"></i>{getCategoryById(post.category_id)?.name}
                        </Link>
                        <h4 className="text-white">
                          <Link href={`/blog/${post.slug}`} className="btn-link text-reset stretched-link">
                            {post.title}
                          </Link>
                        </h4>
                        <ul className="nav nav-divider text-white-force align-items-center small">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center text-white position-relative">
                                <div className="avatar avatar-xs me-2 bg-white/20 rounded-circle flex-shrink-0">
                                  <img className="avatar-img rounded-circle" src={getUserById(post.author_id)?.avatar} alt="avatar" />
                                </div>
                                <span className="text-white">{getUserById(post.author_id)?.name}</span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <span className="nav-link">
                              <i className="far fa-clock me-1"></i>{post.reading_time} دقیقه
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 