
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

export interface ModuleProgress {
  completed: number;
  total: number;
  nextLesson?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  progress: ModuleProgress;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'quiz' | 'reading' | 'activity';
  completed: boolean;
  duration: string;
}
