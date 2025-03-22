
import React from 'react';
import { cn } from '@/lib/utils';
import { Trophy, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface ChallengeCard2Props {
  title?: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
  videoId?: string;
  image?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ChallengeCard2: React.FC<ChallengeCard2Props> = ({
  title = "Challenge",
  description = "Explain the life cycle of a star from birth to death",
  descriptionClassName,
  className,
  videoId = "lcZTcfdZ3Ow",
  image,
  children,
  onClick
}) => {
  const form = useForm({
    defaultValues: {
      answer: ''
    }
  });

  const onSubmit = (data: { answer: string }) => {
    console.log('Submitted answer:', data.answer);
  };

  return (
    <div 
      className={cn(
        "bg-orange-500 rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-orange-600 relative",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute top-2 left-3 z-10 bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700 flex items-center gap-1">
        <Trophy size={14} className="mr-1" />
        <span>Challenge</span>
      </div>

      {image && (
        <div className="absolute top-3 right-3 z-10">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col justify-between pt-14">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white text-xl">{title}</h3>
            </div>
            <p className={cn(
              "text-white mt-2 text-2xl leading-relaxed",
              descriptionClassName
            )}>
              {description}
            </p>
          </div>
        </div>
        
        {children}
        
        {!children && (
          <div className="mt-4">
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
                  className="bg-orange-300 hover:bg-orange-400 text-black/80 w-full"
                >
                  <Send size={16} className="mr-2" />
                  Submit Answer
                </Button>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard2;
