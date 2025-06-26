import users from '../data/users.json';
import categories from '../data/categories.json';
import posts from '../data/posts.json';

// Types
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'author';
  avatar: string;
  bio: string;
  created_at: string;
  updated_at: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  color: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  author_id: number;
  title: string;
  slug: string;
  content: string;
  video_url: string | null;
  type: 'text' | 'video';
  views_count: number;
  likes_count: number;
  category_id: number;
  featured: boolean;
  image: string;
  reading_time: number;
  created_at: string;
  updated_at: string;
}

// Data functions
export const getUsers = (): User[] => {
  return users as User[];
};

export const getCategories = (): Category[] => {
  return categories as Category[];
};

export const getPosts = (): Post[] => {
  return posts as Post[];
};

// Helper functions
export const getUserById = (id: number): User | undefined => {
  return getUsers().find(user => user.id === id);
};

export const getCategoryById = (id: number): Category | undefined => {
  return getCategories().find(category => category.id === id);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return getPosts().find(post => post.slug === slug);
};

export const getPostsByCategory = (categoryId: number): Post[] => {
  return getPosts().filter(post => post.category_id === categoryId);
};

export const getFeaturedPosts = (): Post[] => {
  return getPosts().filter(post => post.featured);
};

export const getRecentPosts = (limit: number = 5): Post[] => {
  return getPosts()
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
};

export const getPopularPosts = (limit: number = 5): Post[] => {
  return getPosts()
    .sort((a, b) => b.views_count - a.views_count)
    .slice(0, limit);
};

// Enhanced post with author and category
export interface PostWithDetails extends Post {
  author: User;
  category: Category;
}

export const getPostWithDetails = (slug: string): PostWithDetails | undefined => {
  const post = getPostBySlug(slug);
  if (!post) return undefined;

  const author = getUserById(post.author_id);
  const category = getCategoryById(post.category_id);

  if (!author || !category) return undefined;

  return {
    ...post,
    author,
    category
  };
};

export const getAllPostsWithDetails = (): PostWithDetails[] => {
  return getPosts().map(post => {
    const author = getUserById(post.author_id);
    const category = getCategoryById(post.category_id);
    
    return {
      ...post,
      author: author!,
      category: category!
    };
  });
};

// API-like functions for future use
export const fetchPosts = async (): Promise<Post[]> => {
  // In the future, this could fetch from API
  return getPosts();
};

export const fetchPostBySlug = async (slug: string): Promise<PostWithDetails | undefined> => {
  // In the future, this could fetch from API
  return getPostWithDetails(slug);
};

export const fetchCategories = async (): Promise<Category[]> => {
  // In the future, this could fetch from API
  return getCategories();
};

export function getUserBySlug(slug: string): User | undefined {
  return getUsers().find(user => user.slug === slug);
} 