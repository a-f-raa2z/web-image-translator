
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

export interface KnowledgeMapNode {
  id: string;
  label: string;
  description?: string;
  progress?: number;
  isCurrent?: boolean;
  icon?: React.FC<any>;
  shape?: 'circle' | 'hexagon' | 'diamond' | 'triangle' | 'rectangle' | 'square' | 'pentagon' | 'octagon';
  color?: string;
  topics?: string[];
}
