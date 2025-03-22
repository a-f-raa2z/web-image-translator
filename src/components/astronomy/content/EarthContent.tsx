
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../../AstronomyChallengeCard';
import AstronomyPlaygroundCard from '../../AstronomyPlaygroundCard';
import QuestionCard from '../../QuestionCard';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Send, Check } from 'lucide-react';

interface EarthContentProps {
  selectedVideoTitle: string;
  animate: boolean;
}

const EarthContent: React.FC<EarthContentProps> = ({
  selectedVideoTitle,
  animate
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm({
    defaultValues: {
      answer: ''
    }
  });

  const onSubmit = (data: { answer: string }) => {
    console.log('Submitted answer:', data.answer);
    setIsSubmitted(true);
  };

  // Earth 101
  if (selectedVideoTitle === 'Earth 101') {
    return (
      <>
        <div className="col-span-12 md:col-span-3">
          <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
            <AstronomyChallengeCard 
              title="Blue Planet Highlights"
              description="What did you learn from the Blue Planet series?"
              videoId="Iyq4U1k5rRc"
              descriptionClassName="text-base mb-3"
              className="h-full"
            >
              {isSubmitted ? (
                <div className="bg-green-100 p-2 rounded-md text-xs text-green-800 flex items-center">
                  <Check size={14} className="mr-1" />
                  Answer submitted successfully!
                </div>
              ) : (
                <div className="mt-2">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                      <FormField
                        control={form.control}
                        name="answer"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea 
                                placeholder="Write your answer here..." 
                                className="bg-orange-100 min-h-[60px] text-black"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="bg-orange-200 hover:bg-orange-300 text-black/80 w-full"
                      >
                        <Send size={16} className="mr-2" />
                        Submit Answer
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </AstronomyChallengeCard>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
            <AstronomyPlaygroundCard
              subtitle="Carl Sagan, Pale Blue Dot."
              title="Look again at that dot. That's here. That's home. That's us. "
              className="h-full"
              image="/lovable-uploads/earth2.jpeg"
            />
          </div>
        </div>
      </>
    );
  }

  // What Earth
  if (selectedVideoTitle === 'What Earth') {
    return (
      <>
        <div className="col-span-12 md:col-span-3">
          <QuestionCard 
            option1="A) 1.5 billion years"
            option2="B) 4.5 billion years"
            option3="C) 6.8 billion years"
            option4="D) 10 billion years"
            title="What is the approximate age of Earth?"
            className="h-full"
            image="/lovable-uploads/earth2.jpeg"
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <AstronomyPlaygroundCard
            subtitle="World Geography Games"
            title="🎮 Earth Structure "
            className="h-full"
            image="/lovable-uploads/world-game.png"
          />
        </div>
      </>
    );
  }

  return null;
};

export default EarthContent;
