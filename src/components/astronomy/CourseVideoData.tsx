
import React from 'react';
import { VideoData } from './types';

export const useCourseVideoData = (): VideoData => {
  const videoData: VideoData = {
    intro: [
      { id: 'libKVRa01L8', title: 'Solar System 101', duration: '4:10', cardTypes: ['challengecard'] },
      { id: '05E1uMh15QQ', title: 'The Inner Planets', duration: '2:12', cardTypes: ['challengecard'] },
    ],
    earth: [
      { id: 'HCDVN7DCzYE', title: 'Earth 101', duration: '3:32', cardTypes: ['challengecard'] },
      { id: 'mrYjJ9Jl9dA', title: 'What Earth', duration: '19:18', cardTypes: ['questioncard', 'playgroundcard'] }
    ],
    moon: [
      { id: '6AviDjR9mmo', title: 'Moon 101', duration: '3:05', cardTypes: ['challengecard'] },
      { 
        id: 'TkBtN6jes8U', 
        title: 'Amazing Timelapse Supermoon', 
        duration: '0:51',
        source: 'youtube',
        cardTypes: ['challengecard']
      },
      { 
        id: '0GZTVDM3b3M', 
        title: 'Beautiful Moon Phase', 
        duration: '0:30',
        source: 'youtube',
        cardTypes: ['questioncard']
      },
      { id: 'VW2xRR75lKE', title: 'Lunar Eclipse 101', duration: '2:14', cardTypes: ['playgroundcard'] },
      { id: 'cxrLRbkOwKs', title: 'Solar Eclipse 101', duration: '2:14', cardTypes: ['playgroundcard', 'challengecard'] }
    ]
  };

  return videoData;
};

export default useCourseVideoData;
