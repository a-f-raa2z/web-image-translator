
import { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar';

// Custom node component for main topics
const TopicNode = ({ data, isConnectable }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-2 rounded-lg text-center font-medium shadow-lg border-2",
      data.type === 'main' ? "bg-purple-200 border-purple-400 text-purple-900 min-w-48 max-w-56" : 
      data.type === 'course' ? `${data.color} border-none text-white min-w-40 max-w-50` : 
      "bg-gray-700 border-none w-3 h-3 rounded-full"
    )}>
      {data.type !== 'node' && data.label}
    </div>
  );
};

// Node types registration
const nodeTypes: NodeTypes = {
  topic: TopicNode,
};

// Course colors
const courseColors = {
  'psychology': 'bg-purple-500',
  'physical-sciences': 'bg-blue-400',
  'social-sciences': 'bg-lime-500',
  'professional-skills': 'bg-blue-300',
  'life-skills': 'bg-red-400',
  'history': 'bg-amber-500',
  'philosophy': 'bg-purple-400',
  'technology': 'bg-blue-500',
  'religion': 'bg-amber-400',
  'literature': 'bg-purple-500',
  'mental-wellbeing': 'bg-pink-500',
  'geography': 'bg-stone-500',
  'mathematics': 'bg-teal-500',
  'physical-health': 'bg-emerald-500',
  'art-media': 'bg-orange-500',
  'life-sciences': 'bg-lime-500',
};

// Create nodes for each section
const generateSectionNodes = () => {
  const nodes: Node[] = [];
  const edgesList: Edge[] = [];
  
  // Section centers
  const sections = [
    { id: 'psychology', label: 'Psychology', x: 150, y: 350, color: courseColors['psychology'] },
    { id: 'physical-sciences', label: 'Physical Sciences', x: 140, y: 550, color: courseColors['physical-sciences'] },
    { id: 'social-sciences', label: 'Social Sciences', x: 170, y: 800, color: courseColors['social-sciences'] },
    { id: 'professional-skills', label: 'Professional Skills', x: 300, y: 900, color: courseColors['professional-skills'] },
    { id: 'life-skills', label: 'Life Skills', x: 380, y: 480, color: courseColors['life-skills'] },
    { id: 'history', label: 'History', x: 480, y: 780, color: courseColors['history'] },
    { id: 'philosophy', label: 'Philosophy', x: 650, y: 950, color: courseColors['philosophy'] },
    { id: 'technology', label: 'Technology', x: 850, y: 900, color: courseColors['technology'] },
    { id: 'religion', label: 'Religion', x: 300, y: 220, color: courseColors['religion'] },
    { id: 'literature', label: 'Literature', x: 520, y: 250, color: courseColors['literature'] },
    { id: 'mental-wellbeing', label: 'Mental Wellbeing', x: 770, y: 240, color: courseColors['mental-wellbeing'] },
    { id: 'geography', label: 'Geography', x: 620, y: 370, color: courseColors['geography'] },
    { id: 'mathematics', label: 'Mathematics', x: 800, y: 400, color: courseColors['mathematics'] },
    { id: 'physical-health', label: 'Physical Health', x: 960, y: 500, color: courseColors['physical-health'] },
    { id: 'art-media', label: 'Art & Media', x: 590, y: 580, color: courseColors['art-media'] },
    { id: 'life-sciences', label: 'Life Sciences', x: 780, y: 650, color: courseColors['life-sciences'] },
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
        color: section.color
      },
    });
    
    // Add small nodes around each section
    const nodeCount = Math.floor(Math.random() * 20) + 15; // 15-35 nodes per section
    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount;
      const radius = Math.random() * 80 + 40; // Random radius between 40-120
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
          stroke: '#444',
          strokeWidth: 1,
          opacity: 0.3
        },
      });
    }
  });

  return { nodes, edges: edgesList };
};

const { nodes: initialNodes, edges: initialEdges } = generateSectionNodes();

// Course content data for details panel
const courseData: Record<string, any> = {
  'psychology': {
    title: 'Psychology',
    description: 'The scientific study of the human mind and behavior, exploring how we think, feel, and act.',
    topics: [
      'Cognitive Psychology',
      'Developmental Psychology',
      'Social Psychology',
      'Clinical Psychology',
      'Evolutionary Psychology'
    ]
  },
  'physical-sciences': {
    title: 'Physical Sciences',
    description: 'Disciplines that study non-living systems including physics, chemistry, astronomy, and earth sciences.',
    topics: [
      'Physics',
      'Chemistry',
      'Astronomy',
      'Earth Science',
      'Materials Science'
    ]
  },
  'social-sciences': {
    title: 'Social Sciences',
    description: 'The study of human society and social relationships, including economics, politics, and sociology.',
    topics: [
      'Economics',
      'Political Science',
      'Sociology',
      'Anthropology',
      'International Relations'
    ]
  },
  'professional-skills': {
    title: 'Professional Skills',
    description: 'Abilities needed to succeed in workplace environments and career settings.',
    topics: [
      'Leadership',
      'Communication',
      'Project Management',
      'Negotiation',
      'Critical Thinking'
    ]
  },
  'life-skills': {
    title: 'Life Skills',
    description: 'Fundamental abilities for navigating daily life and society effectively.',
    topics: [
      'Financial Literacy',
      'Time Management',
      'Emotional Intelligence',
      'Decision Making',
      'Conflict Resolution'
    ]
  },
  'history': {
    title: 'History',
    description: 'The study of past events, particularly human affairs, based on documentation and interpretation.',
    topics: [
      'Ancient History',
      'Medieval History',
      'Modern History',
      'World History',
      'Art History'
    ]
  },
  'philosophy': {
    title: 'Philosophy',
    description: 'The study of fundamental questions about existence, knowledge, ethics, reason, mind, and language.',
    topics: [
      'Ethics',
      'Logic',
      'Metaphysics',
      'Epistemology',
      'Philosophy of Mind'
    ]
  },
  'technology': {
    title: 'Technology',
    description: 'The application of scientific knowledge for practical purposes, especially in industry.',
    topics: [
      'Computer Science',
      'Artificial Intelligence',
      'Robotics',
      'Biotechnology',
      'Information Technology'
    ]
  },
  'religion': {
    title: 'Religion',
    description: 'Systems of faith and worship, and the exploration of divine or spiritual belief systems.',
    topics: [
      'World Religions',
      'Religious History',
      'Theology',
      'Comparative Religion',
      'Religious Practices'
    ]
  },
  'literature': {
    title: 'Literature',
    description: 'Written works, especially those considered of superior or lasting artistic merit.',
    topics: [
      'Fiction',
      'Poetry',
      'Drama',
      'Literary Criticism',
      'World Literature'
    ]
  },
  'mental-wellbeing': {
    title: 'Mental Wellbeing',
    description: 'The state of psychological and emotional health, and practices to maintain it.',
    topics: [
      'Stress Management',
      'Mindfulness',
      'Mental Health',
      'Positive Psychology',
      'Resilience'
    ]
  },
  'geography': {
    title: 'Geography',
    description: 'The study of physical features of the earth and its atmosphere, and human activity as it affects and is affected by these.',
    topics: [
      'Physical Geography',
      'Human Geography',
      'Cartography',
      'Geographic Information Systems',
      'Environmental Geography'
    ]
  },
  'mathematics': {
    title: 'Mathematics',
    description: 'The abstract science of number, quantity, and space, either as abstract concepts or as applied to other disciplines.',
    topics: [
      'Algebra',
      'Geometry',
      'Calculus',
      'Statistics',
      'Number Theory'
    ]
  },
  'physical-health': {
    title: 'Physical Health',
    description: 'The condition of the body and the degree to which it is free from illness, and the capacity to perform daily tasks.',
    topics: [
      'Nutrition',
      'Exercise Science',
      'Disease Prevention',
      'Sleep Health',
      'Aging and Longevity'
    ]
  },
  'art-media': {
    title: 'Art & Media',
    description: 'Creative expression through various forms and the means of communication that reaches large audiences.',
    topics: [
      'Visual Arts',
      'Film Studies',
      'Media Literacy',
      'Digital Arts',
      'Music Theory'
    ]
  },
  'life-sciences': {
    title: 'Life Sciences',
    description: 'The study of living organisms and their interactions with each other and the environment.',
    topics: [
      'Biology',
      'Ecology',
      'Genetics',
      'Botany',
      'Zoology'
    ]
  }
};

const KnowledgeMap = () => {
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
    <div className="w-full h-screen flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-16">
        <div className="flex-1 flex">
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
          <div className="w-[30%] h-full border-l border-gray-700 p-4 overflow-y-auto bg-gray-800 text-white">
            {selectedNode && courseData[selectedNode] ? (
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{courseData[selectedNode].title}</CardTitle>
                  <CardDescription className="text-gray-300">{courseData[selectedNode].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium mb-2">Key Topics</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {courseData[selectedNode].topics.map((topic: string, index: number) => (
                      <li key={index} className="text-gray-300">{topic}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <p className="text-sm text-gray-400">
                      Click on different subject areas in the knowledge map to explore topics and courses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle>Knowledge Map</CardTitle>
                  <CardDescription className="text-gray-300">Explore subjects and their interconnections</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Click on any subject node to view details about that knowledge area.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        
        <div className="p-4 flex justify-center bg-gray-800">
          <Link to="/">
            <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700">Enter Channel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMap;
