
import React from 'react';
import CommunityCard from '@/components/CommunityCard';

const CommunitySection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">In the Community</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <CommunityCard 
          title="Global AI Community Events"
          description="Join global AI community events, workshops, and conferences to connect with AI enthusiasts worldwide."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          link="https://globalai.community/events/"
        />
        
        <CommunityCard 
          title="DeepLearning.AI Events"
          description="Access cutting-edge AI learning resources, courses, and events from DeepLearning.AI and connect with experts."
          image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
          link="https://www.deeplearning.ai/events/"
        />
        
        <CommunityCard 
          title="Teens In AI Global Techathon"
          description="In celebration of International Women's Day, Teens in AI run annual, distributed Global Techathons inspiring teens aged 12-18."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          link="https://www.teensinai.com/global-techathon/"
        />
        
        <CommunityCard 
          title="TUMO AI for Teens"
          description="TUMO AI offers innovative workshops and resources for teens interested in artificial intelligence and machine learning."
          image="https://images.unsplash.com/photo-1462331940025-4aa32003c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          link="https://tumo.ai/teens"
        />
      </div>
    </section>
  );
};

export default CommunitySection;
