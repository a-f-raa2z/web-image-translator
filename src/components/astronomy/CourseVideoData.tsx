
import React from 'react';
import { VideoData } from './types';

export const useCourseVideoData = (): VideoData => {
  const videoData: VideoData = {
    intro: [
      { id: 'libKVRa01L8', title: 'Solar System 101', duration: '4:10' },
      { id: '05E1uMh15QQ', title: 'The Inner Planets', duration: '2:12' },
    ],
    earth: [
      { id: 'HCDVN7DCzYE', title: 'Earth 101', duration: '3:32' },
      { id: 'mrYjJ9Jl9dA', title: 'What Earth', duration: '19:18' }
    ],
    moon: [
      { id: '6AviDjR9mmo', title: 'Moon 101', duration: '3:05' },
      { 
        id: 'ZT2G7Vmyd',
        title: 'Amazing Timelapse Supermoon', 
        duration: '0:51',
        source: 'tiktok',
        tiktokUrl: 'https://www.tiktok.com/t/ZT2G7Vmyd/'
      },
      { id: 'VW2xRR75lKE', title: 'Lunar Eclipse 101', duration: '2:14' },
      { id: 'cxrLRbkOwKs', title: 'Solar Eclipse 101', duration: '2:14' }
    ]
  };

  return videoData;
};

export default useCourseVideoData;
