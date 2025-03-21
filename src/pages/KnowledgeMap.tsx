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
  // Main AI node (purple)
  {
    id: 'ai',
    type: 'topic',
    position: { x: 400, y: 5 },
    data: { label: 'Artificial Intelligence', type: 'main' },
  },
  
  // Course nodes (blue)
  {
    id: 'ai-intro',
    type: 'topic',
    position: { x: 100, y: 100 },
    data: { label: 'AI Introduction', type: 'course' },
  },
  {
    id: 'generative-ai',
    type: 'topic',
    position: { x: 300, y: 100 },
    data: { label: 'Generative AI', type: 'course' },
  },
  {
    id: 'chatbots',
    type: 'topic',
    position: { x: 500, y: 100 },
    data: { label: 'Chatbots', type: 'course' },
  },
  {
    id: 'robots',
    type: 'topic',
    position: { x: 700, y: 100 },
    data: { label: 'Robots', type: 'course' },
  },
  {
    id: 'automation',
    type: 'topic',
    position: { x: 200, y: 200 },
    data: { label: 'Automation', type: 'course' },
  },
  {
    id: 'emerging-industries',
    type: 'topic',
    position: { x: 400, y: 200 },
    data: { label: 'Emerging Industries', type: 'course' },
  },
  {
    id: 'ai-for-x',
    type: 'topic',
    position: { x: 600, y: 200 },
    data: { label: 'AI for X', type: 'course' },
  },
  
  // Topic nodes (green) for AI Intro
  {
    id: 'what-is-ai',
    type: 'topic',
    position: { x: 50, y: 180 },
    data: { label: 'What is AI?', type: 'topic' },
  },
  {
    id: 'how-ai-works',
    type: 'topic',
    position: { x: 100, y: 250 },
    data: { label: 'How AI Works', type: 'topic' },
  },
  {
    id: 'machine-learning',
    type: 'topic',
    position: { x: 150, y: 180 },
    data: { label: 'Machine Learning', type: 'topic' },
  },
  
  // Topic nodes for Generative AI
  {
    id: 'gen-ai-intro',
    type: 'topic',
    position: { x: 300, y: 180 },
    data: { label: 'Generative AI Intro', type: 'topic' },
  },
  
  // Topic nodes for Chatbots
  {
    id: 'chatbots-intro',
    type: 'topic',
    position: { x: 500, y: 180 },
    data: { label: 'Chatbots Intro', type: 'topic' },
  },
  
  // Topic nodes for Robots
  {
    id: 'nvidia-robot',
    type: 'topic',
    position: { x: 650, y: 180 },
    data: { label: 'Nvidia CEO Unveils Robot', type: 'topic' },
  },
  {
    id: 'advanced-robots',
    type: 'topic',
    position: { x: 750, y: 180 },
    data: { label: '9 Most Advanced AI Robots', type: 'topic' },
  },
  
  // Topic nodes for Automation
  {
    id: 'automation-intro',
    type: 'topic',
    position: { x: 200, y: 280 },
    data: { label: 'Automation Intro', type: 'topic' },
  },
  
  // Topic nodes for Emerging Industries
  {
    id: 'ai-emerging-industry',
    type: 'topic',
    position: { x: 400, y: 280 },
    data: { label: 'AI in Emerging Industries', type: 'topic' },
  },
  
  // Topic nodes for AI for X
  {
    id: 'ai-ocean',
    type: 'topic',
    position: { x: 550, y: 280 },
    data: { label: 'AI for Ocean', type: 'topic' },
  },
  {
    id: 'ai-music',
    type: 'topic',
    position: { x: 600, y: 350 },
    data: { label: 'AI + Music', type: 'topic' },
  },
  {
    id: 'ai-arts',
    type: 'topic',
    position: { x: 650, y: 280 },
    data: { label: 'AI + Arts', type: 'topic' },
  },
  {
    id: 'ai-art-explained',
    type: 'topic',
    position: { x: 650, y: 350 },
    data: { label: 'AI Art Explained', type: 'topic' },
  },
];

// Initial edges connecting nodes with enhanced styling
const initialEdges: Edge[] = [
  // Connect main AI node to course nodes with more visible edges
  { id: 'ai-to-intro', source: 'ai', target: 'ai-intro', type: 'smoothstep', animated: true, style: { strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-gen', source: 'ai', target: 'generative-ai', type: 'smoothstep', animated: true, style: { strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-chatbots', source: 'ai', target: 'chatbots', type: 'smoothstep', animated: true, style: { strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-robots', source: 'ai', target: 'robots', type: 'smoothstep', animated: true, style: { strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-automation', source: 'ai', target: 'automation', type: 'smoothstep', animated: true, style: { strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-emerging', source: 'ai', target: 'emerging-industries', type: 'smoothstep', animated: true, style: { strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ai-to-for-x', source: 'ai', target: 'ai-for-x', type: 'smoothstep', animated: true, style: { strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connect course nodes to their topics with more visible edges
  { id: 'intro-to-what', source: 'ai-intro', target: 'what-is-ai', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'intro-to-how', source: 'ai-intro', target: 'how-ai-works', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'intro-to-ml', source: 'ai-intro', target: 'machine-learning', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connect Generative AI to its topics
  { id: 'gen-to-intro', source: 'generative-ai', target: 'gen-ai-intro', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connect Chatbots to its topics
  { id: 'chatbots-to-intro', source: 'chatbots', target: 'chatbots-intro', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connect Robots to its topics
  { id: 'robots-to-nvidia', source: 'robots', target: 'nvidia-robot', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'robots-to-advanced', source: 'robots', target: 'advanced-robots', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connect Automation to its topics
  { id: 'automation-to-intro', source: 'automation', target: 'automation-intro', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connect Emerging Industries to its topics
  { id: 'emerging-to-industry', source: 'emerging-industries', target: 'ai-emerging-industry', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Connect AI for X to its topics
  { id: 'for-x-to-ocean', source: 'ai-for-x', target: 'ai-ocean', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'for-x-to-music', source: 'ai-for-x', target: 'ai-music', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'for-x-to-arts', source: 'ai-for-x', target: 'ai-arts', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'arts-to-explained', source: 'ai-arts', target: 'ai-art-explained', type: 'smoothstep', style: { strokeWidth: 1.5, stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
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

  // Initialize the flow with only main AI node and course nodes visible
  useEffect(() => {
    const updatedNodes = initialNodes.map(node => {
      // Show the main AI node and course nodes initially
      // Hide all green topic nodes initially
      if (node.data.type === 'main' || node.data.type === 'course') {
        return { ...node, hidden: false };
      } else {
        return { ...node, hidden: true };
      }
    });
    setNodes(updatedNodes);
  }, [setNodes]);

  // Handle node click to show details and toggle child nodes
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node.id);
    
    // If a course node is clicked, show its child nodes
    if (node.data.type === 'course') {
      // Find all edges that have this node as source
      const connectedEdges = edges.filter(edge => edge.source === node.id);
      const childNodeIds = connectedEdges.map(edge => edge.target);
      
      setNodes(nds => nds.map(n => {
        // If the node is a child of the selected course, show it
        if (childNodeIds.includes(n.id)) {
          return { ...n, hidden: false };
        }
        // For non-child nodes that are not main or course nodes, check if they should be hidden
        if (n.data.type !== 'main' && n.data.type !== 'course') {
          // If they're not children of the currently selected node, hide them
          const shouldHide = !childNodeIds.includes(n.id);
          return { ...n, hidden: shouldHide };
        }
        // Keep main and course nodes visible
        return n;
      }));
    }
  }, [edges, setNodes]);
  
  return (
    <div className="w-full h-screen flex">
      {/* Add Sidebar back */}
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
        
        <div className="p-4 flex justify-center">
          <Link to="/">
            <Button size="lg" variant="default">Enter Channel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMap;
