
import React from 'react';
import { VideoData } from './types';

export const useCourseVideoData = (): VideoData => {
  const videoData: VideoData = {
    intro: [
      { id: 'libKVRa01L8', title: 'Solar System 101', duration: '4:10', cardTypes: ['playgroundcard'] },
      { id: '05E1uMh15QQ', title: 'The Inner Planets', duration: '2:12', cardTypes: ['partycard'] },
    ],
    earth: [
      { id: 'HCDVN7DCzYE', title: 'Earth 101', duration: '3:32', cardTypes: ['challengecard'] },
      { id: 'mrYjJ9Jl9dA', title: 'What Earth', duration: '19:18', cardTypes: ['questioncard', 'playgroundcard'] }
    ],
    moon: [
      { id: '6AviDjR9mmo', title: 'Moon 101', duration: '3:05', cardTypes: ['challengecard', 'gallerycard'] },
      { 
        id: 'TkBtN6jes8U', 
        title: 'Amazing Timelapse Supermoon', 
        duration: '0:51',
        source: 'youtube',
        cardTypes: ['challengecard']
      },
      { id: 'VW2xRR75lKE', title: 'Lunar Eclipse 101', duration: '2:14', cardTypes: ['playgroundcard'] },
      { id: 'cxrLRbkOwKs', title: 'Solar Eclipse 101', duration: '2:14', cardTypes: ['playgroundcard', 'challengecard'] }
    ]
  };

  return videoData;
};

export default useCourseVideoData;
