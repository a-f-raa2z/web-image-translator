
export interface VideoItem {
  id: string;
  title: string;
  duration: string;
}

export type VideoCategory = 'intro' | 'earth' | 'moon';

export interface VideoData {
  intro: VideoItem[];
  earth: VideoItem[];
  moon: VideoItem[];
}

export interface ExploreContentItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  source: 'xiaohongshu' | 'astronomy' | 'tiktok' | 'nasa';
  sourceUrl: string;
  sourceFavicon?: string;
  likes?: number;
  saves?: number;
  author?: string;
}
