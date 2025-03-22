
import { useMemo } from 'react';
import { Node, Edge, MarkerType } from 'reactflow';
import { courseShapes, formatTopicName } from './courseData';
import { KnowledgeMapNode } from '@/components/astronomy/types';

export function useKnowledgeMapElements() {
  // Generate nodes based on course shapes
  const initialNodes: Node<KnowledgeMapNode>[] = useMemo(() => {
    const courseNodes: Node<KnowledgeMapNode>[] = [];
    const topicNodes: Node<KnowledgeMapNode>[] = [];
    
    // Calculate base positions
    const coursePositions = [
      { x: 300, y: 100 },  // 0
      { x: 800, y: 100 },  // 1
      { x: 300, y: 400 },  // 2
      { x: 800, y: 400 },  // 3
      { x: 300, y: 700 },  // 4
      { x: 800, y: 700 },  // 5
      { x: 300, y: 1000 }, // 6
      { x: 800, y: 1000 }, // 7
    ];
    
    // Create course nodes
    courseShapes.forEach((course, index) => {
      courseNodes.push({
        id: course.id,
        type: 'course',
        position: coursePositions[index],
        data: { 
          id: course.id,
          label: course.label, 
          description: course.description,
          progress: course.progress,
          isCurrent: course.isCurrent,
          color: course.color
        },
        draggable: true,
      });
      
      // Create topic nodes for each course
      if (course.topics) {
        const topicCount = course.topics.length;
        course.topics.forEach((topic, topicIndex) => {
          // Position topics in a semicircle around the course
          const angle = (Math.PI / (topicCount + 1)) * (topicIndex + 1);
          const xOffset = Math.cos(angle) * 250;
          const yOffset = Math.sin(angle) * 150;
          
          // Adjust based on which side of the screen we're on
          const directionMultiplier = index % 2 === 0 ? -1 : 1;
          
          topicNodes.push({
            id: `${course.id}-${topic}`,
            type: 'topic',
            position: { 
              x: coursePositions[index].x + (directionMultiplier * xOffset), 
              y: coursePositions[index].y + yOffset 
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
