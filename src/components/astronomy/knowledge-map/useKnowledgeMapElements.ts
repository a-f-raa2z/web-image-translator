
import { useMemo } from 'react';
import { Node, Edge, MarkerType } from 'reactflow';
import { courseShapes, formatTopicName } from './courseData';
import { KnowledgeMapNode } from '@/components/astronomy/types';

export function useKnowledgeMapElements() {
  // Generate nodes based on course shapes
  const initialNodes: Node<KnowledgeMapNode>[] = useMemo(() => {
    const courseNodes: Node<KnowledgeMapNode>[] = [];
    const topicNodes: Node<KnowledgeMapNode>[] = [];
    
    // Calculate positions in a circle
    const centerX = 550;
    const centerY = 400;
    const radius = 350;
    const courseCount = courseShapes.length;
    
    // Create course nodes in a circle
    courseShapes.forEach((course, index) => {
      // Calculate angle and position for course node
      const angle = (2 * Math.PI * index) / courseCount;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      courseNodes.push({
        id: course.id,
        type: 'course',
        position: { x, y },
        data: { 
          id: course.id,
          label: course.label, 
          description: course.description,
          progress: course.progress,
          isCurrent: course.isCurrent,
          color: course.color,
          backgroundColor: course.backgroundColor
        },
        draggable: true,
      });
      
      // Create topic nodes for each course
      if (course.topics) {
        const topicCount = course.topics.length;
        course.topics.forEach((topic, topicIndex) => {
          // Position topics in a small arc around each course
          const topicAngle = angle + ((Math.PI / 3) * (topicIndex - (topicCount - 1) / 2)) / topicCount;
          const topicRadius = 150;
          
          topicNodes.push({
            id: `${course.id}-${topic}`,
            type: 'topic',
            position: { 
              x: x + topicRadius * Math.cos(topicAngle), 
              y: y + topicRadius * Math.sin(topicAngle)
            },
            data: { 
              id: `${course.id}-${topic}`,
              label: formatTopicName(topic), 
              color: course.color
            },
          });
        });
      }
    });
    
    return [...courseNodes, ...topicNodes];
  }, []);

  // Generate edges between courses and their topics
  const initialEdges: Edge[] = useMemo(() => {
    const edges: Edge[] = [];
    
    courseShapes.forEach(course => {
      if (course.topics) {
        course.topics.forEach(topic => {
          edges.push({ 
            id: `${course.id}-to-${topic}`, 
            source: course.id, 
            target: `${course.id}-${topic}`, 
            type: 'smoothstep', 
            animated: course.isCurrent,
            style: { stroke: course.color, strokeWidth: 2 },
            markerEnd: { type: MarkerType.ArrowClosed } 
          });
        });
      }
    });
    
    return edges;
  }, []);

  return { initialNodes, initialEdges };
}
