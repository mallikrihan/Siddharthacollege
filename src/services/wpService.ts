/**
 * WordPress Service for Siddhartha Institution
 * Connects the React frontend to the WordPress REST API.
 * 
 * Replace 'https://siddhartha-edu.in' with your actual WordPress site URL.
 */

const WP_BASE_URL = 'https://orchid-caterpillar-835119.hostingersite.com/wp-json/wp/v2';

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
  desc: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  category: string;
  url: string;
  title: string;
}

export const wpService = {
  /**
   * Fetch News/Updates from WordPress Posts
   * Uses '_embed' to fetch featured images in a single request.
   */
  async getNews(): Promise<NewsItem[]> {
    try {
      const response = await fetch(`${WP_BASE_URL}/posts?_embed&per_page=6`);
      if (!response.ok) throw new Error('Failed to fetch news');

      const posts = await response.json();

      return posts.map((post: any) => ({
        id: post.id,
        date: new Date(post.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        title: post.title?.rendered || 'Untitled Update',
        category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Update',
        desc: post.excerpt?.rendered
          ? post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...'
          : 'No description available.',
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80'
      }));
    } catch (error) {
      console.error('WP News Error:', error);
      return []; // Return empty array on failure
    }
  },

  /**
   * Fetch Gallery items.
   * In WordPress, you can create a category called 'Gallery' 
   * and we fetch posts from that category.
   */
  async getGallery(): Promise<GalleryItem[]> {
    try {
      // Note: You might need to find the ID of your 'Gallery' category in WP
      // For now, fetching all posts as a demonstration.
      const response = await fetch(`${WP_BASE_URL}/posts?_embed&per_page=12`);
      if (!response.ok) throw new Error('Failed to fetch gallery');

      const posts = await response.json();

      return posts.map((post: any) => ({
        id: post.id,
        category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Campus',
        url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1523050853063-bd80e29247f3?auto=format&fit=crop&q=80',
        title: post.title?.rendered || 'Gallery Image'
      }));
    } catch (error) {
      console.error('WP Gallery Error:', error);
      return [];
    }
  }
};
