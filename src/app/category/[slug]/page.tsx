import { getCategories, getCategoryById, getPosts, getUserById, Category, Post } from '../../../lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface CategoryPageProps {
  params: { slug: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categories = getCategories();
  const category = categories.find((cat) => cat.slug === params.slug);
  if (!category) return notFound();

  // پیدا کردن پست‌های مرتبط با این دسته
  const allPosts = getPosts().map((post: any) => {
    if (Array.isArray(post.categories)) {
      return post;
    } else {
      return { ...post, categories: [post.category_id] };
    }
  });
  const posts = allPosts.filter((post) => post.categories.includes(category.id));

  // شمارنده هر دسته برای سایدبار
  const categoryCounts = categories.map((cat) => ({
    ...cat,
    count: allPosts.filter((post) => post.categories.includes(cat.id)).length,
  }));

  return (
    <main>
      {/* ======================= Inner intro START ======================= */}
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className={`card bg-dark-overlay-4 overflow-hidden card-bg-scale h-300 text-center`}
                style={{
                  backgroundImage: `url(/assets/images/blog/16by9/08.jpg)`,
                  backgroundPosition: 'center left',
                  backgroundSize: 'cover',
                }}
              >
                {/* Card Image overlay */}
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 my-auto">
                    <div className="text-white mb-3">دسته بندی:</div>
                    <h1 className="text-white h2">
                      <span className={`badge text-bg-${category.color} mb-2`}>
                        <i className="fas fa-circle me-2 small fw-bold"></i>
                        {category.name}
                      </span>
                    </h1>
                    <div className="text-center position-relative">
                      <span className="badge text-bg-info fs-6">{posts.length} خبر</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Inner intro END ======================= */}

      {/* ======================= Main content START ======================= */}
      <section className="position-relative pt-0">
        <div className="container" data-sticky-container>
          <div className="row">
            {/* Main Post START */}
            <div className="col-lg-9">
              <div className="row gy-4">
                {posts.map((post) => {
                  const user = getUserById(post.author_id);
                  const cats = post.categories.map((cid: number) => getCategoryById(cid)).filter(Boolean);
                  return (
                    <div className="col-sm-6" key={post.id}>
                      <div className="card">
                        {/* Card img */}
                        <div className="position-relative">
                          <img className="card-img" src={post.image} alt="Card image" />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* Card overlay Top (مثال: ویدیو یا آیکون خاص) */}
                            {post.type === 'video' && (
                              <div className="w-100 mb-auto d-flex justify-content-end">
                                <div className="text-end ms-auto">
                                  <div className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle" title="This post has video"><i className="fas fa-video"></i></div>
                                </div>
                              </div>
                            )}
                            {/* Card overlay bottom */}
                            <div className="w-100 mt-auto">
                              {/* Card category */}
                              {cats.map(cat => (
                                <Link href={`/category/${cat.slug}`} key={cat.id} className={`badge text-bg-${cat.color || 'primary'} mb-2`}>
                                  <i className="fas fa-circle me-2 small fw-bold"></i>{cat.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h4 className="card-title">
                            <Link href={`/blog/${post.slug}`} className="btn-link text-reset">{post.title}</Link>
                          </h4>
                          <p className="card-text">{post.content.slice(0, 100)}...</p>
                          {/* Card info */}
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  <div className="avatar avatar-xs">
                                    <img className="avatar-img rounded-circle" src={user?.avatar || '/assets/images/avatar/01.jpg'} alt="avatar" />
                                  </div>
                                  <span className="ms-3">با <Link href={user ? `/author/${user.name}` : '#'} className="stretched-link text-reset btn-link">{user?.name || 'نویسنده'}</Link></span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">{post.created_at?.split('T')[0]}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Main Post END */}

            {/* Sidebar START */}
            <div className="col-lg-3 mt-5 mt-lg-0">
              <div data-sticky data-margin-top="80" data-sticky-for="767">
                {/* Categories */}
                <div className="row g-2">
                  <h5>دسته بندی ها</h5>
                  {categoryCounts.map(cat => (
                    <div key={cat.id} className={`d-flex justify-content-between align-items-center bg-${cat.color} bg-opacity-10 rounded p-2 position-relative`}>
                      <Link href={`/category/${cat.slug}`} className={`m-0 text-${cat.color} text-decoration-none`}><h6 className={`m-0 text-${cat.color}`}>{cat.name}</h6></Link>
                      <Link href={`/category/${cat.slug}`} className={`badge bg-${cat.color} stretched-link`}>{cat.count.toString().padStart(2, '0')}</Link>
                    </div>
                  ))}
                </div>
                {/* ADV widget START */}
                <div className="col-12 col-sm-6 col-lg-12 my-4">
                  <a href="#" className="d-block card-img-flash">
                    <img src="/assets/images/adv.png" alt="" />
                  </a>
                  <div className="smaller text-end mt-2">تبلیغ در سایت <a href="#" className="text-body-secondary"><u>انتخاب</u></a></div>
                </div>
                {/* ADV widget END */}
              </div>
            </div>
            {/* Sidebar END */}
          </div> {/* Row end */}
        </div>
      </section>
      {/* ======================= Main content END ======================= */}
    </main>
  );
} 