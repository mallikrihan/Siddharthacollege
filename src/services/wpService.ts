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
   * Helper to get Category ID by Name
   */
  async getCategoryId(name: string): Promise<number | null> {
    try {
      const response = await fetch(`${WP_BASE_URL}/categories?search=${name}`);
      const categories = await response.json();
      const category = categories.find((c: any) => c.name.toLowerCase() === name.toLowerCase());
      return category ? category.id : null;
    } catch (error) {
      console.error(`Error finding category ${name}:`, error);
      return null;
    }
  },

  /**
   * Fetch News/Updates from WordPress Posts (Filtered by 'Blog' category)
   */
  async getNews(): Promise<NewsItem[]> {
    try {
      const categoryId = await this.getCategoryId('Blog') || await this.getCategoryId('blog');
      const url = categoryId
        ? `${WP_BASE_URL}/posts?_embed&categories=${categoryId}&per_page=6`
        : `${WP_BASE_URL}/posts?_embed&per_page=6`;

      console.log('Fetching News from:', url);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch news');

      const posts = await response.json();

      return posts.map((post: any) => {
        // 1. Try Featured Media (Standard)
        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
        let imageUrl = featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.full?.source_url;

        // 2. Fallback: Search for the first image in the HTML content
        if (!imageUrl && post.content?.rendered) {
          const match = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
          if (match) imageUrl = match[1];
        }

        // 3. Final Fallback: High-quality Unsplash placeholder
        if (!imageUrl) {
          imageUrl = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80';
        }

        return {
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
          image: imageUrl
        };
      });
    } catch (error) {
      console.error('WP News Error:', error);
      return [];
    }
  },

  /**
   * Fetch Gallery items (Filtered by 'Gallery' category)
   */
  async getGallery(): Promise<GalleryItem[]> {
    try {
      const categoryId = await this.getCategoryId('Gallery') || await this.getCategoryId('gallery');
      const url = categoryId
        ? `${WP_BASE_URL}/posts?_embed&categories=${categoryId}&per_page=12`
        : `${WP_BASE_URL}/posts?_embed&per_page=12`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch gallery');

      const posts = await response.json();

      return posts.map((post: any) => {
        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
        let imageUrl = featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.large?.source_url || featuredMedia?.media_details?.sizes?.full?.source_url;

        // Fallback to content scan
        if (!imageUrl && post.content?.rendered) {
          const match = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
          if (match) imageUrl = match[1];
        }

        if (!imageUrl) {
          imageUrl = 'https://images.unsplash.com/photo-1523050853063-bd80e29247f3?auto=format&fit=crop&q=80';
        }

        return {
          id: post.id,
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Campus',
          url: imageUrl,
          title: post.title?.rendered || 'Gallery Image'
        };
      });
    } catch (error) {
      console.error('WP Gallery Error:', error);
      return [];
    }
  }
};
