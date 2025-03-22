
import React, { useState, useCallback, useMemo } from 'react';
import Sidebar from '@/components/Sidebar';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';
import { Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import TabNavigation from '@/components/astronomy/TabNavigation';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  NodeTypes,
  useNodesState,
  useEdgesState,
  MarkerType,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { KnowledgeMapNode } from '@/components/astronomy/types';

// Custom geometric node components
const CourseNode = ({ data }: { data: KnowledgeMapNode }) => {
  let ShapeComponent;
  
  // Base classes for all shapes
  const baseClasses = `w-64 p-4 shadow-md overflow-hidden border ${
    data.isCurrent ? 'border-blue-500 border-2' : 'border-gray-200'
  }`;
  
  switch (data.shape) {
    case 'circle':
      ShapeComponent = (
        <div className={`${baseClasses} rounded-full aspect-square flex flex-col justify-center items-center`} style={{ backgroundColor: data.color }}>
          <div className="p-4 bg-white rounded-full w-[90%] h-[90%] flex flex-col justify-center">
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
    case 'hexagon':
      ShapeComponent = (
        <div className={`${baseClasses} relative`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', backgroundColor: data.color }}>
          <div className="absolute inset-[10%] bg-white flex flex-col justify-center p-4" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
    case 'diamond':
      ShapeComponent = (
        <div className={`${baseClasses} relative`} style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', backgroundColor: data.color }}>
          <div className="absolute inset-[10%] bg-white flex flex-col justify-center p-4" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
    case 'triangle':
      ShapeComponent = (
        <div className={`${baseClasses} relative`} style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', backgroundColor: data.color }}>
          <div className="absolute inset-[10%] bg-white flex flex-col justify-center p-4" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}>
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
    case 'square':
      ShapeComponent = (
        <div className={`${baseClasses} relative`} style={{ backgroundColor: data.color }}>
          <div className="absolute inset-[8%] bg-white flex flex-col justify-center p-4">
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
    case 'pentagon':
      ShapeComponent = (
        <div className={`${baseClasses} relative`} style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', backgroundColor: data.color }}>
          <div className="absolute inset-[10%] bg-white flex flex-col justify-center p-4" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
    case 'octagon':
      ShapeComponent = (
        <div className={`${baseClasses} relative`} style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', backgroundColor: data.color }}>
          <div className="absolute inset-[10%] bg-white flex flex-col justify-center p-4" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
    case 'rectangle':
    default:
      ShapeComponent = (
        <div className={`${baseClasses} relative rounded-xl`} style={{ backgroundColor: data.color }}>
          <div className="absolute inset-[8%] bg-white rounded-lg flex flex-col justify-center p-4">
            <CourseContent data={data} />
          </div>
        </div>
      );
      break;
  }
  
  return ShapeComponent;
};

// Course content inside the shape
const CourseContent = ({ data }: { data: KnowledgeMapNode }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{data.label}</h3>
        {data.isCurrent && <Star className="text-blue-500 fill-blue-500" size={18} />}
      </div>
      
      <div className="text-sm text-gray-600 mb-3">{data.description}</div>
      
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-gray-500">Progress</span>
        <span className="text-xs font-medium">{data.progress}%</span>
      </div>
      <Progress value={data.progress} className="h-1.5" />
      
      {data.isCurrent && (
        <div className="mt-3">
          <Button variant="outline" size="sm" className="w-full">
            <Award size={14} className="mr-1.5" />
            Continue Learning
          </Button>
        </div>
      )}
    </>
  );
};

// Topic node component
const TopicNode = ({ data }: { data: KnowledgeMapNode }) => {
  const IconComponent = data.icon;
  return (
    <div className="bg-blue-50 px-3 py-2 rounded-lg text-center font-medium border border-blue-200 min-w-32">
      {IconComponent && <IconComponent className="inline mr-1.5 text-blue-500" size={16} />}
      <span>{data.label}</span>
    </div>
  );
};

const nodeTypes: NodeTypes = {
  course: CourseNode,
  topic: TopicNode,
};

const AstronomyKnowledgeMap = () => {
  // Define course shapes, colors, and their topics
  const courseShapes = useMemo(() => [
    {
      id: 'neighbor-worlds',
      shape: 'circle',
      color: '#8B5CF6', // Purple
      label: 'The Neighbor Worlds',
      description: 'Explore Earth, Moon, and Mars',
      progress: 64,
      isCurrent: true,
      topics: ['earth', 'moon', 'mars', 'space-travel']
    },
    {
      id: 'solar-system',
      shape: 'hexagon',
      color: '#10B981', // Green
      label: 'The Solar System', 
      description: 'The Sun and its planetary system',
      progress: 28,
      topics: ['sun', 'inner-planets', 'outer-planets', 'asteroid-belt', 'comets']
    },
    {
      id: 'deep-space',
      shape: 'diamond',
      color: '#F97316', // Orange
      label: 'Deep Space Objects', 
      description: 'Nebulae, Black Holes and more',
      progress: 10,
      topics: ['galaxies', 'nebulae', 'black-holes', 'neutron-stars']
    },
    {
      id: 'stellar-evolution',
      shape: 'triangle',
      color: '#0EA5E9', // Blue
      label: 'Stellar Evolution', 
      description: 'Birth and death of stars',
      progress: 0,
      topics: ['star-formation', 'main-sequence', 'red-giants', 'supernovae', 'white-dwarfs']
    },
    {
      id: 'cosmology',
      shape: 'pentagon',
      color: '#EC4899', // Pink
      label: 'Cosmology', 
      description: 'Study of the universe origin and fate',
      progress: 0,
      topics: ['big-bang', 'cosmic-microwave', 'dark-matter', 'dark-energy', 'expansion']
    },
    {
      id: 'exoplanets',
      shape: 'square',
      color: '#EAB308', // Yellow
      label: 'Exoplanets', 
      description: 'Planets beyond our solar system',
      progress: 0,
      topics: ['detection-methods', 'habitable-zone', 'planetary-systems', 'exomoons']
    },
    {
      id: 'space-technology',
      shape: 'rectangle',
      color: '#A855F7', // Purple
      label: 'Space Technology', 
      description: 'Telescopes, missions and instruments',
      progress: 5,
      topics: ['optical-telescopes', 'radio-telescopes', 'space-missions', 'launch-vehicles', 'satellites']
    },
    {
      id: 'astrobiology',
      shape: 'octagon',
      color: '#14B8A6', // Teal
      label: 'Astrobiology', 
      description: 'Search for life in the universe',
      progress: 0,
      topics: ['origin-of-life', 'extremophiles', 'biosignatures', 'habitability', 'seti']
    },
  ], []);

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
          label: course.label, 
          description: course.description,
          progress: course.progress,
          isCurrent: course.isCurrent,
          shape: course.shape as any,
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
              label: formatTopicName(topic), 
              color: course.color
            },
          });
        });
      }
    });
    
    return [...courseNodes, ...topicNodes];
  }, [courseShapes]);

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
  }, [courseShapes]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Helper function to format topic names for display
  function formatTopicName(name: string): string {
    return name.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeader />
        <TabNavigation />
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Star className="text-blue-500" />
            Astronomy Knowledge Map
          </h2>
          
          <div className="h-[800px] w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              fitView
              minZoom={0.2}
              maxZoom={1.5}
              defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
              attributionPosition="bottom-right"
            >
              <Controls showInteractive={false} className="bg-white shadow-md rounded-md" />
              <Background color="#f1f5f9" gap={16} />
              <Panel position="top-right" className="bg-white p-3 rounded-md shadow-md">
                <div className="text-sm text-gray-600">
                  <h3 className="font-semibold mb-2">Courses by Shape</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {courseShapes.map((course) => (
                      <div key={course.id} className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-sm mr-2" 
                          style={{ backgroundColor: course.color }}
                        ></div>
                        <span className="text-xs">{course.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyKnowledgeMap;
