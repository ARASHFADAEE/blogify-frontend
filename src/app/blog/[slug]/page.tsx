import { getPostWithDetails, getRecentPosts, getPopularPosts, getUserById } from '../../../lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostWithDetails(slug);
  
  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(3);
  const popularPosts = getPopularPosts(3);

  return (
    <main>
      {/* ======================= Inner intro START ======================= */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto pt-md-5">
              <span className={`badge text-bg-${post.category.color} mb-2`}>
                <i className="fas fa-circle me-2 small fw-bold"></i>{post.category.name}
              </span>
              <h1>{post.title}</h1>
              <p className="lead">{post.content}</p>
              {/* Info */}
              <ul className="nav nav-divider align-items-center">
                <li className="nav-item">
                  <div className="nav-link">
                    با <Link href="#" className="text-reset btn-link">{post.author.name}</Link>
                  </div>
                </li>
                <li className="nav-item">{new Date(post.created_at).toLocaleDateString('fa-IR')}</li>
                <li className="nav-item">{post.reading_time} دقیقه زمان مطالعه</li>
              </ul>
              <img className="rounded mt-5" src={post.image} alt={post.title} />
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Inner intro END */}

      {/* ======================= Main START ======================= */}
      <section className="pt-0">
        <div className="container position-relative">
          <div className="row">
            {/* Main Content START */}
            <div className="col-lg-9 mx-auto">
              <p>
                <span className="dropcap bg-primary bg-opacity-10 text-primary px-2">
                  {post.title.charAt(0)}
                </span>
                {post.content}
              </p>

              {post.type === 'video' && post.video_url && (
                <div className="mb-4">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src={post.video_url.replace('watch?v=', 'embed/')} 
                      title={post.title}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Author info START */}
              <div className="row p-2 p-md-4 mt-5 border rounded align-items-center g-3 flex-column flex-md-row">
                {/* Avatar */}
                <div className="col-auto text-center mb-3 mb-md-0">
                  <Link href={`/author/${post.author.slug}`}>
                    <div className="avatar avatar-xxl mx-auto mx-md-0">
                      <img className="avatar-img rounded-circle" src={post.author.avatar} alt="avatar" />
                    </div>
                  </Link>
                </div>
                {/* Info */}
                <div className="col">
                  <div className="d-sm-flex align-items-center justify-content-between flex-wrap">
                    <div>
                      <h4 className="m-0"><Link href={`/author/${post.author.slug}`}>{post.author.name}</Link></h4>
                      <small>روزنامه نگار سایت Blogzine</small>
                    </div>
                    <Link href="#" className="btn btn-xs btn-primary-soft mt-2 mt-sm-0">مشاهده اخبار</Link>
                  </div>
                  <p className="my-2">{post.author.bio}</p>
                  {/* Social icons */}
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link ps-0 pe-2 fs-5" href="#"><i className="fab fa-facebook-square"></i></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-twitter-square"></i></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-linkedin"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Author info END */}

              {/* Next prev post START */}
              <div className="row g-0 mt-5 mx-0 border-top border-bottom">
                <div className="col-sm-6 py-3 py-md-4">
                  <div className="d-flex align-items-center position-relative">
                    {/* Icon */}
                    <div className="bg-primary py-1">
                      <i className="bi bi-chevron-compact-left fs-3 text-white px-1 rtl-flip"></i>
                    </div>
                    {/* Title */}
                    <div className="ms-3">
                      <h5 className="m-0"> 
                        <Link href="#" className="stretched-link btn-link text-reset">سال 2022 رویایی و فوق العاده برای طارمی</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 py-3 py-md-4 text-sm-end">
                  <div className="d-flex align-items-center position-relative">
                    {/* Title */}
                    <div className="me-3">
                      <h5 className="m-0"> 
                        <Link href="#" className="stretched-link btn-link text-reset">فیلم‌های بالیوودی الگوی ضدانقلاب شده!</Link>
                      </h5>
                    </div>
                    {/* Icon */}
                    <div className="bg-primary py-1">
                      <i className="bi bi-chevron-compact-right fs-3 text-white px-1 rtl-flip"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* Next prev post START */}
            </div>
            {/* Main Content END */}
          </div>
        </div>
      </section>
      {/* ======================= Main END */}

      {/* ======================= Tag and share END ======================= */}
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="text-center">
                {/* Share */}
                <div className="list-group-inline list-unstyled">
                  <h6 className="mt-2 me-4 d-inline-block"><i className="fas fa-share-alt me-2"></i>اشتراک گذاری:</h6>
                  <ul className="list-inline list-unstyled d-inline-block">
                    <li className="list-inline-item"><Link href="#" className="me-3 text-body">Facebook</Link></li>
                    <li className="list-inline-item"><Link href="#" className="me-3 text-body">Twitter</Link></li>
                    <li className="list-inline-item"><Link href="#" className="me-3 text-body">Dribble</Link></li>
                  </ul>
                </div>
                {/* Tags */}
                <ul className="list-inline text-primary-hover mt-0 mt-lg-3">
                  <li className="list-inline-item">
                    <Link className="text-body" href="#">#رسانه</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-body" href="#">#استارت آپ</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-body" href="#">#ورزش</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-body" href="#">#فیلم</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-body" href="#">#برگزیده</Link>
                  </li>
                </ul>
              </div>
            </div> {/* row END */}
          </div>
        </div>
      </section>
      {/* ======================= Tag and share END ======================= */}
    </main>
  );
} 