
export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  source?: 'youtube' | 'tiktok';
  tiktokUrl?: string;
  cardTypes?: ('challengecard' | 'playgroundcard' | 'questioncard' | 'gallerycard')[];
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
  hasVideos?: boolean;
  isExpandable?: boolean;
  videos?: VideoItem[];
}
