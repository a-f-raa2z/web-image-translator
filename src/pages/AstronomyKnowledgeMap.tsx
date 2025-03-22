
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';
import { MapPin, Star, Globe, Moon, Sun, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  NodeTypes,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  MarkerType,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Custom node component for course cards with progress bars
const CourseNode = ({ data }) => {
  return (
    <div className={`w-64 bg-white rounded-xl shadow-md overflow-hidden border ${data.isCurrent ? 'border-blue-500 border-2' : 'border-gray-200'}`}>
      <div className="p-4">
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
      </div>
    </div>
  );
};

// Custom node component for topic nodes
const TopicNode = ({ data }) => {
  return (
    <div className="bg-blue-50 px-3 py-2 rounded-lg text-center font-medium border border-blue-200 min-w-32">
      {data.icon && <data.icon className="inline mr-1.5 text-blue-500" size={16} />}
      <span>{data.label}</span>
    </div>
  );
};

const nodeTypes = {
  course: CourseNode,
  topic: TopicNode,
};

const AstronomyKnowledgeMap = () => {
  // Initial nodes including courses and topics
  const initialNodes = [
    // Course nodes
    {
      id: 'neighbor-worlds',
      type: 'course',
      position: { x: 300, y: 100 },
      data: { 
        label: 'The Neighbor Worlds', 
        description: 'Explore Earth, Moon, and Mars',
        progress: 64,
        isCurrent: true 
      },
      draggable: true,
    },
    {
      id: 'solar-system',
      type: 'course',
      position: { x: 300, y: 300 },
      data: { 
        label: 'The Solar System', 
        description: 'The Sun and its planetary system',
        progress: 28,
        isCurrent: false 
      },
      draggable: true,
    },
    {
      id: 'deep-space',
      type: 'course',
      position: { x: 600, y: 100 },
      data: { 
        label: 'Deep Space Objects', 
        description: 'Nebulae, Black Holes and more',
        progress: 10,
        isCurrent: false 
      },
      draggable: true,
    },
    {
      id: 'stellar-evolution',
      type: 'course',
      position: { x: 600, y: 300 },
      data: { 
        label: 'Stellar Evolution', 
        description: 'Birth and death of stars',
        progress: 0,
        isCurrent: false 
      },
      draggable: true,
    },
    
    // Topic nodes
    {
      id: 'earth',
      type: 'topic',
      position: { x: 100, y: 50 },
      data: { label: 'Earth', icon: Globe },
    },
    {
      id: 'moon',
      type: 'topic',
      position: { x: 100, y: 120 },
      data: { label: 'Moon', icon: Moon },
    },
    {
      id: 'mars',
      type: 'topic',
      position: { x: 100, y: 190 },
      data: { label: 'Mars', icon: MapPin },
    },
    {
      id: 'sun',
      type: 'topic',
      position: { x: 100, y: 300 },
      data: { label: 'The Sun', icon: Sun },
    },
  ];

  // Initial edges connecting courses to topics
  const initialEdges = [
    // Edges from Neighbor Worlds to its topics
    { 
      id: 'nw-to-earth', 
      source: 'neighbor-worlds', 
      target: 'earth', 
      type: 'smoothstep', 
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed } 
    },
    { 
      id: 'nw-to-moon', 
      source: 'neighbor-worlds', 
      target: 'moon', 
      type: 'smoothstep', 
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed } 
    },
    { 
      id: 'nw-to-mars', 
      source: 'neighbor-worlds', 
      target: 'mars', 
      type: 'smoothstep', 
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed } 
    },
    
    // Edge from Solar System to Sun
    { 
      id: 'ss-to-sun', 
      source: 'solar-system', 
      target: 'sun', 
      type: 'smoothstep',
      style: { stroke: '#10b981', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed } 
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeader />
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="text-blue-500" />
            Astronomy Knowledge Map
          </h2>
          
          <div className="h-[600px] w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              fitView
              minZoom={0.5}
              maxZoom={1.5}
              defaultViewport={{ x: 0, y: 0, zoom: 1 }}
              attributionPosition="bottom-right"
            >
              <Controls showInteractive={false} className="bg-white shadow-md rounded-md" />
              <Background color="#f1f5f9" gap={16} />
              <Panel position="top-right" className="bg-white p-2 rounded-md shadow-md">
                <div className="text-sm text-gray-600">
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Current Course</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                    <span>Available Course</span>
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
