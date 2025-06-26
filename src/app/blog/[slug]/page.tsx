import { getPostWithDetails, getRecentPosts, getPopularPosts, getUserById } from '../../../lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostWithDetails(params.slug);
  
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

              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی <img src="/assets/images/blog/4by3/thumb/06.jpg" className="rounded float-start ms-lg-n5 me-3 my-3" alt="..." /> استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است. این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید.<u> ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.</u> در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است. این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.</p>

              {/* Divider */}
              <div className="text-center h5 mb-4">. . .</div>

              {/* Images */}
              <div className="row g-2">
                <div className="col-12">
                  {/* Image */}
                  <figure className="figure oversized-block">
                    <a href={post.image} data-glightbox data-gallery="image-popup">
                      <img className="rounded" src={post.image} alt="Image" />
                    </a>
                    <figcaption className="figure-caption text-center">(عکاس: <a className="text-reset" href="#">pexels.com</a>)</figcaption>
                  </figure>
                </div>
              </div>
              <p>نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              
              <h3 className="mt-4">حضور ایرانسل در رویداد فناورانه خودروهای آینده</h3>
              <div className="row mb-4">
                <div className="col-md-6">
                  <p>تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی</li>
                    <li>طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی</li>
                    <li>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان</li>
                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </li>
                    <li>طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو </li>
                  </ul>
                </div>
              </div>
              <p>نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

              {/* blockquote */}
              <figure className="bg-primary bg-opacity-10 p-3 p-md-5 my-5">
                <blockquote className="blockquote">
                  <p>گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  حسین صادقی
                </figcaption>
              </figure>

              <p>استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.</p>

              <h3>شعار مولد در مورد تجارت</h3>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت.</p>

              {/* Author info START */}
              <div className="d-flex p-2 p-md-4 mt-5 border rounded">
                {/* Avatar */}
                <Link href="#">
                  <div className="avatar avatar-xxl me-2 me-md-4">
                    <img className="avatar-img rounded-circle" src={post.author.avatar} alt="avatar" />
                  </div>
                </Link>
                {/* Info */}
                <div>
                  <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="m-0"><Link href="#">{post.author.name}</Link></h4>
                      <small>روزنامه نگار سایت Blogzine</small>
                    </div>
                    <Link href="#" className="btn btn-xs btn-primary-soft">مشاهده اخبار</Link>
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