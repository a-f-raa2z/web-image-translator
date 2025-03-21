
import { useCallback, useState } from 'react';
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
} from 'reactflow';
import 'reactflow/dist/style.css';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

// Custom node component for main topics
const TopicNode = ({ data, isConnectable }: NodeProps) => {
  return (
    <div className={cn(
      "px-4 py-2 rounded-lg text-center font-medium shadow-lg border-2 min-w-40 max-w-56",
      data.type === 'main' ? "bg-purple-200 border-purple-400 text-purple-900" : 
      data.type === 'course' ? "bg-blue-100 border-blue-300 text-blue-800" : 
      "bg-green-100 border-green-300 text-green-800"
    )}>
      {data.label}
    </div>
  );
};

// Node types registration
const nodeTypes: NodeTypes = {
  topic: TopicNode,
};

// Initial nodes data
const initialNodes: Node[] = [
  // Main AI node (center)
  {
    id: 'ai',
    type: 'topic',
    data: { label: 'AI', type: 'main' },
    position: { x: 400, y: 200 },
  },
  
  // Courses - Main categories
  {
    id: 'ai-intro',
    type: 'topic',
    data: { label: 'Artificial Intelligence Intro', type: 'course' },
    position: { x: 100, y: 50 },
  },
  {
    id: 'generative-ai',
    type: 'topic',
    data: { label: 'Generative AI', type: 'course' },
    position: { x: 700, y: 50 },
  },
  {
    id: 'chatbots',
    type: 'topic',
    data: { label: 'Chatbots', type: 'course' },
    position: { x: 700, y: 200 },
  },
  {
    id: 'robots',
    type: 'topic',
    data: { label: 'Robots', type: 'course' },
    position: { x: 700, y: 350 },
  },
  {
    id: 'automation',
    type: 'topic',
    data: { label: 'Automation', type: 'course' },
    position: { x: 400, y: 400 },
  },
  {
    id: 'emerging-industries',
    type: 'topic',
    data: { label: 'Emerging Industries', type: 'course' },
    position: { x: 100, y: 350 },
  },
  {
    id: 'ai-for-x',
    type: 'topic',
    data: { label: 'AI for X', type: 'course' },
    position: { x: 100, y: 200 },
  },
  
  // Sub-nodes for AI Intro
  {
    id: 'what-is-ai',
    type: 'topic',
    data: { label: 'What is AI (10 mins)', type: 'node' },
    position: { x: -100, y: 0 },
  },
  {
    id: 'how-ai-works',
    type: 'topic',
    data: { label: 'How AI Works (40 mins)', type: 'node' },
    position: { x: -100, y: 50 },
  },
  {
    id: 'machine-learning',
    type: 'topic',
    data: { label: 'Machine Learning (25 mins)', type: 'node' },
    position: { x: -100, y: 100 },
  },
  
  // Sub-node for Generative AI
  {
    id: 'gen-ai-intro',
    type: 'topic',
    data: { label: 'Generative AI Intro (15 mins)', type: 'node' },
    position: { x: 900, y: 50 },
  },
  
  // Sub-node for Chatbots
  {
    id: 'chatbots-intro',
    type: 'topic',
    data: { label: 'Chatbots (15 mins)', type: 'node' },
    position: { x: 900, y: 200 },
  },
  
  // Sub-nodes for Robots
  {
    id: 'nvidia-robot',
    type: 'topic',
    data: { label: 'Nvidia CEO Unveils Robot (5 mins)', type: 'node' },
    position: { x: 900, y: 320 },
  },
  {
    id: 'advanced-robots',
    type: 'topic',
    data: { label: '9 Most Advanced AI Robots', type: 'node' },
    position: { x: 900, y: 380 },
  },
  
  // Sub-node for Automation
  {
    id: 'automation-intro',
    type: 'topic',
    data: { label: 'Automation', type: 'node' },
    position: { x: 400, y: 500 },
  },
  
  // Sub-node for Emerging Industries
  {
    id: 'ai-emerging-industry',
    type: 'topic',
    data: { label: 'AI in Emerging Industries', type: 'node' },
    position: { x: 100, y: 500 },
  },
  
  // Sub-nodes for AI for X
  {
    id: 'ai-ocean',
    type: 'topic',
    data: { label: 'AI for Ocean Research', type: 'node' },
    position: { x: -100, y: 150 },
  },
  {
    id: 'ai-music',
    type: 'topic',
    data: { label: 'AI + Music', type: 'node' },
    position: { x: -100, y: 200 },
  },
  {
    id: 'ai-arts',
    type: 'topic',
    data: { label: 'AI + Arts', type: 'node' },
    position: { x: -100, y: 250 },
  },
  {
    id: 'ai-art-explained',
    type: 'topic',
    data: { label: 'AI Art Explained', type: 'node' },
    position: { x: -100, y: 300 },
  },
];

// Initial edges connecting nodes
const initialEdges: Edge[] = [
  // Connecting main AI to all courses
  { id: 'ai-to-intro', source: 'ai', target: 'ai-intro', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-generative', source: 'ai', target: 'generative-ai', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-chatbots', source: 'ai', target: 'chatbots', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-robots', source: 'ai', target: 'robots', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-automation', source: 'ai', target: 'automation', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-emerging', source: 'ai', target: 'emerging-industries', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-ai-for-x', source: 'ai', target: 'ai-for-x', type: 'default', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connecting courses to their sub-nodes
  { id: 'intro-to-what', source: 'ai-intro', target: 'what-is-ai', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'intro-to-how', source: 'ai-intro', target: 'how-ai-works', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'intro-to-ml', source: 'ai-intro', target: 'machine-learning', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  
  { id: 'gen-to-intro', source: 'generative-ai', target: 'gen-ai-intro', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  
  { id: 'chatbots-to-intro', source: 'chatbots', target: 'chatbots-intro', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  
  { id: 'robots-to-nvidia', source: 'robots', target: 'nvidia-robot', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'robots-to-advanced', source: 'robots', target: 'advanced-robots', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  
  { id: 'automation-to-intro', source: 'automation', target: 'automation-intro', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  
  { id: 'emerging-to-role', source: 'emerging-industries', target: 'ai-emerging-industry', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  
  { id: 'ai-x-to-ocean', source: 'ai-for-x', target: 'ai-ocean', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-x-to-music', source: 'ai-for-x', target: 'ai-music', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-x-to-arts', source: 'ai-for-x', target: 'ai-arts', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-x-to-art-explained', source: 'ai-for-x', target: 'ai-art-explained', type: 'default', markerEnd: { type: MarkerType.ArrowClosed } },
];

type NodeData = {
  id: string;
  title: string;
  description: string;
  duration?: string;
};

// Course content data for details panel
const courseData: Record<string, NodeData> = {
  'ai': {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Explore the world of Artificial Intelligence through various courses and topics.'
  },
  'ai-intro': {
    id: 'ai-intro',
    title: 'Artificial Intelligence Introduction',
    description: 'A comprehensive introduction to the field of Artificial Intelligence.'
  },
  'what-is-ai': {
    id: 'what-is-ai',
    title: 'What is AI',
    description: 'An introduction to Artificial Intelligence concepts and terminology.',
    duration: '10 minutes'
  },
  'how-ai-works': {
    id: 'how-ai-works',
    title: 'How AI Works',
    description: 'Understand the fundamental principles behind AI systems.',
    duration: '40 minutes'
  },
  'machine-learning': {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Learn about machine learning algorithms and applications.',
    duration: '25 minutes'
  },
  'generative-ai': {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'Explore generative AI models and their capabilities.'
  },
  'gen-ai-intro': {
    id: 'gen-ai-intro',
    title: 'Generative AI Introduction',
    description: 'An introduction to generative models like GANs, VAEs, and diffusion models.',
    duration: '15 minutes'
  },
  'chatbots': {
    id: 'chatbots',
    title: 'Chatbots',
    description: 'Learn about AI-powered conversational agents.'
  },
  'chatbots-intro': {
    id: 'chatbots-intro',
    title: 'Chatbots Introduction',
    description: 'Understanding how AI chatbots work and their applications.',
    duration: '15 minutes'
  },
  'robots': {
    id: 'robots',
    title: 'Robots',
    description: 'Discover the latest advancements in robotics powered by AI.'
  },
  'nvidia-robot': {
    id: 'nvidia-robot',
    title: 'Nvidia CEO Unveils Robot',
    description: 'Watch Nvidia CEO present robots powered by new AI chips at GTC.',
    duration: '5 minutes'
  },
  'advanced-robots': {
    id: 'advanced-robots',
    title: '9 Most Advanced AI Robots',
    description: 'A showcase of the nine most advanced AI-powered robots in the world.'
  },
  'automation': {
    id: 'automation',
    title: 'Automation',
    description: 'Learn how AI is transforming automation across industries.'
  },
  'automation-intro': {
    id: 'automation-intro',
    title: 'Automation Introduction',
    description: 'An overview of AI-powered automation technologies and use cases.'
  },
  'emerging-industries': {
    id: 'emerging-industries',
    title: 'Emerging Industries',
    description: 'Explore how AI is shaping emerging industries and creating new opportunities.'
  },
  'ai-emerging-industry': {
    id: 'ai-emerging-industry',
    title: 'AI in Emerging Industries',
    description: 'The role of Artificial Intelligence in transforming emerging sectors.'
  },
  'ai-for-x': {
    id: 'ai-for-x',
    title: 'AI for X',
    description: 'Applications of AI across different domains and industries.'
  },
  'ai-ocean': {
    id: 'ai-ocean',
    title: 'AI for Ocean',
    description: 'How AI is revolutionizing deep ocean research and exploration.'
  },
  'ai-music': {
    id: 'ai-music',
    title: 'AI + Music',
    description: 'AI Music simply explained, featuring perspectives from Grimes and Spotify\'s CEO.'
  },
  'ai-arts': {
    id: 'ai-arts',
    title: 'AI + Arts',
    description: 'The impact of AI on the arts and creative industries.'
  },
  'ai-art-explained': {
    id: 'ai-art-explained',
    title: 'AI Art Explained',
    description: 'A comprehensive explanation of AI-generated art and its implications.'
  },
};

const KnowledgeMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Handle node click to show details
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node.id);
  }, []);
  
  return (
    <div className="w-full h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4 text-center">AI Knowledge Map</h1>
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
            connectionLineType={ConnectionLineType.SmoothStep}
            defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          >
            <Controls />
            <Background color="#f5f5f5" gap={16} />
          </ReactFlow>
        </div>
        
        {/* Content panel takes 30% width */}
        <div className="w-[30%] h-full border-l border-gray-200 p-4 overflow-y-auto">
          {selectedNode ? (
            <Card>
              <CardHeader>
                <CardTitle>{courseData[selectedNode]?.title || 'Select a topic'}</CardTitle>
                {courseData[selectedNode]?.duration && (
                  <CardDescription>Duration: {courseData[selectedNode].duration}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p>{courseData[selectedNode]?.description || 'No description available'}</p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Click on different nodes in the knowledge map to explore AI topics and courses.
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>AI Knowledge Map</CardTitle>
                <CardDescription>Explore AI topics and courses</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Click on any node in the knowledge map to view details about that topic or course.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMap;
