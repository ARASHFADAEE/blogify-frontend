"use client";
import { useState, useEffect } from "react";
import { getPosts, getCategoryById, getUserById, getCategories, Post } from "../../lib/data";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const PAGE_SIZE = 5;

type PostWithCategories = Post & { categories?: number[] };

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q") || "";
  const [search, setSearch] = useState(q);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filtered, setFiltered] = useState<PostWithCategories[]>([]);

  useEffect(() => {
    // اگر posts دارای categories (آرایه) بود، آن را نگه داریم، وگرنه category_id را به صورت آرایه قرار بدهیم
    const allPosts = getPosts().map((post: any) => {
      if (Array.isArray(post.categories)) {
        return post;
      } else {
        return { ...post, categories: [post.category_id] };
      }
    });
    const categories = getCategories();
    const query = q.trim().toLowerCase();
    if (!query) {
      setFiltered([]);
      return;
    }
    const results = allPosts.filter(post => {
      const title = post.title.toLowerCase();
      const content = post.content?.toLowerCase() || "";
      const catNames = post.categories
        .map((cid: number) => categories.find(c => c.id === cid)?.name || "")
        .join(" ").toLowerCase();
      return (
        title.includes(query) ||
        content.includes(query) ||
        catNames.includes(query)
      );
    });
    setFiltered(results);
    setVisibleCount(PAGE_SIZE);
  }, [q]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(search)}`);
  };

  return (
    <main>
      {/* ======================= Inner intro START ======================= */}
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto text-center py-5">
              <span>نتیجه فیلتر برای</span>
              <h2 className="display-6">{q || "-"}</h2>
              <span className="lead">{filtered.length} خبر یافت شد.</span>
              {/* Search */}
              <div className="row">
                <div className="col-sm-8 col-md-6 col-lg-5 mx-auto">
                  <form className="input-group mt-4" onSubmit={handleSubmit}>
                    <input
                      className="form-control form-control-lg border-success"
                      type="search"
                      placeholder="جستجو..."
                      aria-label="Search"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                    <button className="btn btn-success btn-lg m-0" type="submit">
                      <span className="d-none d-md-block">جستجو</span>
                      <i className="d-block d-md-none fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Inner intro END ======================= */}

      {/* ======================= Main content START ======================= */}
      <section className="position-relative pt-0">
        <div className="container">
          <div className="row">
            {/* Main Post START */}
            <div className="col-lg-9 mx-auto">
              {filtered.slice(0, visibleCount).map((post) => {
                const user = getUserById(post.author_id);
                const cats = Array.isArray(post.categories) ? post.categories.map((cid: number) => getCategoryById(cid)).filter(Boolean) : [];
                return (
                  <div className="card border rounded-3 up-hover p-4 mb-4" key={post.id}>
                    <div className="row g-3">
                      <div className="col-sm-9">
                        {/* Categories */}
                        {cats.length > 0 && cats.map(cat => cat && (
                          <Link href={`/category/${cat.slug}`} key={cat.id} className={`badge text-bg-${cat.color || "primary"} mb-2 me-2`}>
                            <i className="fas fa-circle me-2 small fw-bold"></i>{cat.name}
                          </Link>
                        ))}
                        {/* Title */}
                        <h4 className="card-title">
                          <Link href={`/blog/${post.slug}`} className="btn-link text-reset stretched-link">{post.title}</Link>
                        </h4>
                        {/* Card info */}
                        <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center position-relative">
                                <div className="avatar avatar-xs">
                                  <img className="avatar-img rounded-circle" src={user?.avatar || "/assets/images/avatar/01.jpg"} alt="avatar" />
                                </div>
                                <span className="ms-3">با <Link href={user ? `/author/${user.name}` : "#"} className="stretched-link text-reset btn-link">{user?.name || "نویسنده"}</Link></span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">{post.created_at?.split("T")[0]}</li>
                        </ul>
                      </div>
                      {/* Image */}
                      <div className="col-sm-3">
                        <img className="rounded-3" src={post.image} alt="Card image" />
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Load more */}
              {visibleCount < filtered.length && (
                <button type="button" className="btn btn-primary-soft w-100" onClick={() => setVisibleCount(v => v + PAGE_SIZE)}>
                  مقالات بیشتر <i className="bi bi-arrow-down-circle ms-2 align-middle"></i>
                </button>
              )}
            </div>
            {/* Main Post END */}
          </div> {/* Row end */}
        </div>
      </section>
      {/* ======================= Main content END ======================= */}
    </main>
  );
} 