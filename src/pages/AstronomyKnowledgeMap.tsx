
import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  NodeTypes,
  NodeProps,
  MarkerType,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from '@/components/Sidebar';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';
import { cn } from '@/lib/utils';
import { Globe, Moon, Sun, Star, Rocket, Orbit, Telescope, Satellite } from 'lucide-react';

// Custom node component for astronomy topics
const TopicNode = ({ data, isConnectable }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-2 rounded-lg text-center font-medium shadow-lg border-2",
      data.type === 'main' ? "bg-purple-200 border-purple-400 text-purple-900 min-w-48 max-w-56" : 
      data.type === 'course' ? `${data.color} border-none text-white min-w-40 max-w-50` : 
      "bg-blue-300 border-none w-3 h-3 rounded-full"
    )}>
      {data.type !== 'node' && data.label}
    </div>
  );
};

// Node types registration
const nodeTypes: NodeTypes = {
  topic: TopicNode,
};

// Astronomy course colors
const courseColors = {
  'solar-system': 'bg-blue-500',
  'stars': 'bg-purple-500',
  'planets': 'bg-teal-500',
  'moons': 'bg-blue-400',
  'space-exploration': 'bg-pink-500',
  'galaxies': 'bg-amber-500',
  'black-holes': 'bg-gray-700',
  'telescopes': 'bg-lime-500',
};

// Create nodes for each section
const generateAstronomySections = () => {
  const nodes: Node[] = [];
  const edgesList: Edge[] = [];
  
  // Section centers
  const sections = [
    { id: 'solar-system', label: 'Solar System', x: 400, y: 200, color: courseColors['solar-system'], icon: <Sun /> },
    { id: 'stars', label: 'Stars', x: 200, y: 350, color: courseColors['stars'], icon: <Star /> },
    { id: 'planets', label: 'Planets', x: 600, y: 350, color: courseColors['planets'], icon: <Globe /> },
    { id: 'moons', label: 'Moons', x: 400, y: 500, color: courseColors['moons'], icon: <Moon /> },
    { id: 'space-exploration', label: 'Space Exploration', x: 700, y: 500, color: courseColors['space-exploration'], icon: <Rocket /> },
    { id: 'galaxies', label: 'Galaxies', x: 200, y: 600, color: courseColors['galaxies'], icon: <Orbit /> },
    { id: 'black-holes', label: 'Black Holes', x: 300, y: 750, color: courseColors['black-holes'], icon: <Star /> },
    { id: 'telescopes', label: 'Telescopes', x: 600, y: 650, color: courseColors['telescopes'], icon: <Telescope /> },
  ];

  // Add section nodes
  sections.forEach(section => {
    nodes.push({
      id: section.id,
      type: 'topic',
      position: { x: section.x, y: section.y },
      data: { 
        label: section.label, 
        type: 'course',
        color: section.color,
        icon: section.icon,
      },
    });
    
    // Add small nodes around each section
    const nodeCount = Math.floor(Math.random() * 15) + 10; // 10-25 nodes per section
    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount;
      const radius = Math.random() * 60 + 40; // Random radius between 40-100
      const x = section.x + Math.cos(angle) * radius;
      const y = section.y + Math.sin(angle) * radius;
      
      const nodeId = `${section.id}-node-${i}`;
      nodes.push({
        id: nodeId,
        type: 'topic',
        position: { x, y },
        data: { 
          label: '', 
          type: 'node'
        },
      });
      
      // Connect node to its section
      edgesList.push({
        id: `${section.id}-to-${nodeId}`,
        source: section.id,
        target: nodeId,
        type: 'straight',
        style: { 
          stroke: '#5294e0',
          strokeWidth: 1,
          opacity: 0.3
        },
      });
    }
  });

  // Create connections between main topics
  const connections = [
    { source: 'solar-system', target: 'stars' },
    { source: 'solar-system', target: 'planets' },
    { source: 'planets', target: 'moons' },
    { source: 'solar-system', target: 'space-exploration' },
    { source: 'stars', target: 'galaxies' },
    { source: 'galaxies', target: 'black-holes' },
    { source: 'space-exploration', target: 'telescopes' },
  ];

  connections.forEach((connection, index) => {
    edgesList.push({
      id: `edge-${index}`,
      source: connection.source,
      target: connection.target,
      style: { stroke: '#5294e0', strokeWidth: 2 },
      type: 'smoothstep',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#5294e0',
      },
    });
  });

  return { nodes, edges: edgesList };
};

const { nodes: initialNodes, edges: initialEdges } = generateAstronomySections();

// Course content data for details panel
const astronomyData: Record<string, any> = {
  'solar-system': {
    title: 'Solar System',
    description: 'Our cosmic neighborhood consisting of the Sun, eight planets, dwarf planets, moons, asteroids, and comets.',
    topics: [
      'Formation of the Solar System',
      'The Sun',
      'Inner and Outer Planets',
      'Asteroid Belt',
      'Kuiper Belt and Oort Cloud'
    ]
  },
  'stars': {
    title: 'Stars',
    description: 'Massive luminous spheres of plasma held together by gravity, including our Sun and billions of others in our galaxy.',
    topics: [
      'Star Formation',
      'Stellar Evolution',
      'Star Types and Classification',
      'Supernovae',
      'Neutron Stars'
    ]
  },
  'planets': {
    title: 'Planets',
    description: 'Large celestial bodies that orbit a star and have cleared their orbital path of other objects.',
    topics: [
      'Terrestrial Planets',
      'Gas Giants',
      'Ice Giants',
      'Exoplanets',
      'Planetary Atmospheres'
    ]
  },
  'moons': {
    title: 'Moons',
    description: 'Natural satellites that orbit planets and dwarf planets, with diverse compositions and characteristics.',
    topics: [
      'Earth\'s Moon',
      'Moons of Jupiter',
      'Moons of Saturn',
      'Tidal Forces',
      'Moon Formation Theories'
    ]
  },
  'space-exploration': {
    title: 'Space Exploration',
    description: 'Human endeavors to explore outer space with both manned and unmanned spacecraft.',
    topics: [
      'History of Space Exploration',
      'Space Missions',
      'Space Agencies',
      'Future of Space Travel',
      'Mars Exploration'
    ]
  },
  'galaxies': {
    title: 'Galaxies',
    description: 'Vast systems of stars, stellar remnants, gas, dust, and dark matter bound together by gravity.',
    topics: [
      'Milky Way Galaxy',
      'Galaxy Types',
      'Galaxy Formation',
      'Galaxy Clusters',
      'Andromeda Galaxy'
    ]
  },
  'black-holes': {
    title: 'Black Holes',
    description: 'Regions of spacetime where gravity is so strong that nothing, including light, can escape from it.',
    topics: [
      'Formation of Black Holes',
      'Event Horizon',
      'Supermassive Black Holes',
      'Hawking Radiation',
      'Black Hole Detection Methods'
    ]
  },
  'telescopes': {
    title: 'Telescopes',
    description: 'Optical instruments designed to make distant objects appear magnified by collecting electromagnetic radiation.',
    topics: [
      'Optical Telescopes',
      'Radio Telescopes',
      'Space Telescopes',
      'James Webb Space Telescope',
      'Future Telescope Technologies'
    ]
  }
};

const AstronomyKnowledgeMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Handle node click to show details
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    // Only set selected node for course nodes, not the small decorative ones
    if (node.data.type === 'course') {
      setSelectedNode(node.id);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeader />
        
        <div className="w-full h-[calc(100vh-220px)] flex">
          {/* Flow diagram takes 70% width */}
          <div className="w-[70%] h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              fitView
              minZoom={0.5}
              maxZoom={1.5}
              connectionLineType={ConnectionLineType.SmoothStep}
              defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
            >
              <Controls className="bg-gray-800 bg-opacity-50 text-white rounded-lg border-none" />
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="#444" className="bg-gray-900" />
            </ReactFlow>
          </div>
          
          {/* Content panel takes 30% width */}
          <div className="w-[30%] h-full border-l border-gray-300 p-4 overflow-y-auto bg-white">
            {selectedNode && astronomyData[selectedNode] ? (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{astronomyData[selectedNode].title}</CardTitle>
                  <CardDescription>{astronomyData[selectedNode].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium mb-2">Key Topics</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {astronomyData[selectedNode].topics.map((topic: string, index: number) => (
                      <li key={index} className="text-gray-700">{topic}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">
                      Click on different astronomy areas in the knowledge map to explore topics and courses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Astronomy Knowledge Map</CardTitle>
                  <CardDescription>Explore astronomy subjects and their interconnections</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Click on any subject node to view details about that astronomy area.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyKnowledgeMap;
