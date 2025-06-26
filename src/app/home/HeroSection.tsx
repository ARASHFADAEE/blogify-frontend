import { getFeaturedPosts, getRecentPosts, getUserById, getCategoryById } from '../../lib/data';
import Link from 'next/link';

const HeroSection = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(4);

  return (
    <section className="pt-4 pb-0 card-grid">
      <div className="container">
        <div className="row g-4">
          {/* Left big card */}
          <div className="col-lg-6">
            {featuredPosts[0] && (
              <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{backgroundImage: `url(${featuredPosts[0].image})`, backgroundPosition: "center left", backgroundSize: "cover"}}>
                <span className="card-featured" title=""><i className="fas fa-star"></i></span>
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 mt-auto">
                    <Link href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>{getCategoryById(featuredPosts[0].category_id)?.name}</Link>
                    <h2 className="text-white h1">
                      <Link href={`/blog/${featuredPosts[0].slug}`} className="btn-link stretched-link text-reset">{featuredPosts[0].title}</Link>
                    </h2>
                    <p className="text-white">{featuredPosts[0].content.substring(0, 70)}...</p>
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center text-white position-relative">
                            <div className="avatar avatar-sm">
                              <img className="avatar-img rounded-circle" src={getUserById(featuredPosts[0].author_id)?.avatar} alt="avatar" />
                            </div>
                            <span className="ms-3">با <Link href={`/author/${getUserById(featuredPosts[0].author_id)?.slug}`} className="stretched-link text-reset btn-link">{getUserById(featuredPosts[0].author_id)?.name}</Link></span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">{new Date(featuredPosts[0].created_at).toLocaleDateString('fa-IR')}</li>
                      <li className="nav-item">{featuredPosts[0].reading_time} دقیقه زمان مطالعه</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Right small cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              {recentPosts[0] && (
                <div className="col-12">
                  <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: `url(${recentPosts[0].image})`, backgroundPosition: "center left", backgroundSize: "cover"}}>
                    <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                      <div className="w-100 mt-auto">
                        <Link href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>{getCategoryById(recentPosts[0].category_id)?.name}</Link>
                        <h4 className="text-white">
                          <Link href={`/blog/${recentPosts[0].slug}`} className="btn-link stretched-link text-reset">{recentPosts[0].title}</Link>
                        </h4>
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                          <li className="nav-item position-relative">
                            <div className="nav-link">با <Link href={`/author/${getUserById(recentPosts[0].author_id)?.slug}`} className="stretched-link text-reset btn-link">{getUserById(recentPosts[0].author_id)?.name}</Link></div>
                          </li>
                          <li className="nav-item">{new Date(recentPosts[0].created_at).toLocaleDateString('fa-IR')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {recentPosts.slice(1, 3).map((post) => (
                <div key={post.id} className="col-md-6">
                  <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage: `url(${post.image})`, backgroundPosition: "center left", backgroundSize: "cover"}}>
                    <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                      <div className="w-100 mt-auto">
                        <Link href="#" className={`badge text-bg-${getCategoryById(post.category_id)?.color} mb-2`}><i className="fas fa-circle me-2 small fw-bold"></i>{getCategoryById(post.category_id)?.name}</Link>
                        <h4 className="text-white">
                          <Link href={`/blog/${post.slug}`} className="btn-link stretched-link text-reset">{post.title}</Link>
                        </h4>
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                          <li className="nav-item position-relative">
                            <div className="nav-link">با <Link href={`/author/${getUserById(post.author_id)?.slug}`} className="stretched-link text-reset btn-link">{getUserById(post.author_id)?.name}</Link></div>
                          </li>
                          <li className="nav-item">{new Date(post.created_at).toLocaleDateString('fa-IR')}</li>
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