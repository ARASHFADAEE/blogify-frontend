'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AuthorPosts({ posts, user }: any) {
  const PAGE_SIZE = 6;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  return (
    <div className="row gy-4">
      {posts.slice(0, visibleCount).map((post: any) => {
        const cats = post.categories;
        return (
          <div className="col-sm-6 col-lg-4" key={post.id}>
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
                    {cats.map((cat: { id: number; name: string; slug: string }) => (
                      <Link href={`/category/${cat.slug}`} key={cat.id} className={`badge text-bg-primary mb-2`}>
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
                          <img className="avatar-img rounded-circle" src={user.avatar} alt="avatar" />
                        </div>
                        <span className="ms-3">با <Link href={`/author/${user.slug}`} className="stretched-link text-reset btn-link">{user.name}</Link></span>
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
      {/* Load more START */}
      {visibleCount < posts.length && (
        <div className="col-12 text-center mt-5">
          <button type="button" className="btn btn-primary-soft" onClick={() => setVisibleCount(v => v + PAGE_SIZE)}>
            مقالات بیشتر <i className="bi bi-arrow-down-circle ms-2 align-middle"></i>
          </button>
        </div>
      )}
      {/* Load more END */}
    </div>
  );
} 