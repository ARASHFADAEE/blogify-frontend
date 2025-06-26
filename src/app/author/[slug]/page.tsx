import { getUserBySlug, getPosts, getCategoryById, Category } from '../../../lib/data';
import { notFound } from 'next/navigation';
import AuthorPosts from './AuthorPosts';

interface AuthorPageProps {
  params: { slug: string };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const user = getUserBySlug(params.slug);
  if (!user) return notFound();

  // همه پست‌های این نویسنده
  const allPosts = getPosts().map((post: any) => {
    if (Array.isArray(post.categories)) {
      return post;
    } else {
      return { ...post, categories: [post.category_id] };
    }
  });
  const posts = allPosts.filter(post => post.author_id === user.id);
  const postCount = posts.length;

  // آماده‌سازی دسته‌بندی‌های هر پست
  const postsWithCategories = posts.map(post => ({
    ...post,
    categories: post.categories.map((cid: number) => getCategoryById(cid)).filter(Boolean) as Category[],
  }));

  return (
    <main>
      {/* ======================= Inner intro START ======================= */}
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Author info START */}
              <div className="bg-primary bg-opacity-10 d-md-flex p-3 p-sm-4 my-3 text-center text-md-start rounded">
                {/* Avatar */}
                <div className="me-0 me-md-4">
                  <div className="avatar avatar-xxl">
                    <img className="avatar-img rounded-circle" src={user.avatar} alt="avatar" />
                  </div>
                  {/* Post count */}
                  <div className="text-center mt-n3 position-relative">
                    <span className="badge bg-danger fs-6">{postCount} خبر</span>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <h2 className="m-0">{user.name}</h2>
                  <ul className="list-inline">
                    <li className="list-inline-item"><i className="bi bi-person-fill me-1"></i> {user.role === 'admin' ? 'مدیر' : 'نویسنده'}</li>
                    <li className="list-inline-item"><i className="bi bi-geo-alt me-1"></i> تهران</li>
                  </ul>
                  <p className="my-2">{user.bio}</p>
                  {/* Social icons */}
                  <ul className="nav justify-content-center justify-content-md-start">
                    <li className="nav-item">
                      <a className="nav-link ps-0 pe-2 fs-5" href="#"><i className="fab fa-facebook-square"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2 fs-5" href="#"><i className="fab fa-twitter-square"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2 fs-5" href="#"><i className="fab fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Author info END */}
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Inner intro END */}

      {/* ======================= Main content START ======================= */}
      <section className="position-relative pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <h2>اخبار {user.name}</h2>
            </div>
            {/* Main Post START */}
            <div className="col-12">
              <AuthorPosts posts={postsWithCategories} user={user} />
            </div>
            {/* Main Post END */}
          </div> {/* Row end */}
        </div>
      </section>
      {/* ======================= Main content END ======================= */}
    </main>
  );
} 