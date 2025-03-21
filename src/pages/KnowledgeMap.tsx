
import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Connection,
  NodeTypes,
  Panel
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ChevronDown, ChevronRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Define custom node types
const AITopicNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-blue-100 rounded-xl p-4 shadow-md border border-blue-200 min-w-[150px]">
      <div className="font-bold text-blue-800 text-center">{data.label}</div>
    </div>
  );
};

const CourseNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-md border border-gray-200 min-w-[180px]">
      <div className="font-medium text-center">{data.label}</div>
      <div className="text-xs text-gray-500 mt-1 text-center">{data.modulesCount} modules</div>
    </div>
  );
};

const ModuleNode = ({ data }: { data: any }) => {
  return (
    <div 
      className={cn(
        "rounded-lg p-3 shadow-sm border border-gray-200 min-w-[200px] cursor-pointer",
        data.selected ? "bg-gray-100 border-gray-300" : "bg-white"
      )}
      onClick={() => data.onSelect(data.id)}
    >
      <div className="font-medium">{data.label}</div>
      <div className="flex items-center mt-1 text-xs text-gray-500">
        <Clock size={12} className="mr-1" />
        <span>{data.duration}</span>
      </div>
    </div>
  );
};

const nodeTypes: NodeTypes = {
  aiTopic: AITopicNode,
  course: CourseNode,
  module: ModuleNode
};

// Data structure
const initialData = {
  topics: [
    {
      id: 'ai-center',
      type: 'aiTopic',
      label: 'AI',
      position: { x: 300, y: 100 },
      courses: [
        {
          id: 'ai-intro',
          label: 'Artificial Intelligence Intro',
          modules: [
            { id: 'what-is-ai', label: 'What is AI', duration: '10 mins' },
            { id: 'how-ai-works', label: 'How AI Works', duration: '40 mins' },
            { id: 'machine-learning', label: 'Machine Learning', duration: '25 mins' }
          ]
        },
        {
          id: 'generative-ai',
          label: 'Generative AI',
          modules: [
            { id: 'gen-ai-intro', label: 'Generative AI Intro', duration: '15 mins' }
          ]
        },
        {
          id: 'chatbots',
          label: 'Chatbots',
          modules: [
            { id: 'chatbots-intro', label: 'Chatbots', duration: '15 mins' }
          ]
        },
        {
          id: 'robots',
          label: 'Robots',
          modules: [
            { id: 'nvidia-robot', label: 'Nvidia CEO Unveils Robot Powered by New AI Chips at GTC', duration: '5 mins' },
            { id: 'advanced-robots', label: '9 Most Advanced AI Robots', duration: '20 mins' }
          ]
        },
        {
          id: 'automation',
          label: 'Automation',
          modules: [
            { id: 'automation-intro', label: 'Automation', duration: '15 mins' }
          ]
        },
        {
          id: 'emerging-industries',
          label: 'Emerging Industries',
          modules: [
            { id: 'ai-emerging-industry', label: 'The Role of AI in Emerging Industry', duration: '20 mins' }
          ]
        },
        {
          id: 'ai-for-x',
          label: 'AI for X',
          modules: [
            { id: 'ai-ocean', label: 'AI for Ocean: How AI is Revolutionising Deep Ocean Research', duration: '15 mins' },
            { id: 'ai-music', label: 'AI + Music: AI Music, Simply Explained', duration: '10 mins' },
            { id: 'ai-arts', label: 'AI + Arts: The Impact of AI on the Arts', duration: '12 mins' },
            { id: 'ai-art', label: 'AI Art, Explained', duration: '8 mins' }
          ]
        }
      ]
    }
  ]
};

const KnowledgeMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Initialize the graph with AI as the center node
  React.useEffect(() => {
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];
    
    // Add the central AI node
    initialData.topics.forEach((topic) => {
      newNodes.push({
        id: topic.id,
        type: 'aiTopic',
        data: { label: topic.label },
        position: topic.position,
      });
      
      // Add course nodes in a circle around the AI node
      const radius = 250;
      const totalCourses = topic.courses.length;
      
      topic.courses.forEach((course, i) => {
        const angle = (i * 2 * Math.PI) / totalCourses;
        const x = topic.position.x + radius * Math.cos(angle);
        const y = topic.position.y + radius * Math.sin(angle);
        
        const courseId = `${topic.id}-${course.id}`;
        newNodes.push({
          id: courseId,
          type: 'course',
          data: { 
            label: course.label, 
            modulesCount: course.modules.length,
            expanded: expandedCourses.includes(courseId)
          },
          position: { x, y },
        });
        
        // Connect AI to each course
        newEdges.push({
          id: `e-${topic.id}-${courseId}`,
          source: topic.id,
          target: courseId,
          type: 'smoothstep',
        });
        
        // If the course is expanded, add its modules
        if (expandedCourses.includes(courseId)) {
          course.modules.forEach((module, j) => {
            const moduleId = `${courseId}-${module.id}`;
            newNodes.push({
              id: moduleId,
              type: 'module',
              data: { 
                label: module.label, 
                duration: module.duration,
                onSelect: handleModuleSelect,
                id: moduleId,
                selected: selectedModule === moduleId
              },
              position: { 
                x: x + 100, 
                y: y + 80 * (j + 1) 
              },
            });
            
            // Connect course to each module
            newEdges.push({
              id: `e-${courseId}-${moduleId}`,
              source: courseId,
              target: moduleId,
              type: 'smoothstep',
            });
          });
        }
      });
    });
    
    setNodes(newNodes);
    setEdges(newEdges);
  }, [expandedCourses, selectedModule]);

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId === selectedModule ? null : moduleId);
  };

  const toggleCourseExpand = (courseId: string) => {
    setExpandedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId) 
        : [...prev, courseId]
    );
  };

  // Find the module data for the selected module
  const getSelectedModuleData = () => {
    if (!selectedModule) return null;
    
    // Parse the module ID to get course and module info
    const [topicId, courseId, moduleId] = selectedModule.split('-');
    
    const topic = initialData.topics.find(t => t.id === topicId);
    if (!topic) return null;
    
    const course = topic.courses.find(c => c.id === courseId);
    if (!course) return null;
    
    const module = course.modules.find(m => m.id === moduleId);
    if (!module) return null;
    
    return {
      topic: topic.label,
      course: course.label,
      module: module.label,
      duration: module.duration
    };
  };

  const selectedModuleData = getSelectedModuleData();

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">Knowledge Map</h1>
        <p className="text-gray-500">Navigate through the AI knowledge graph to discover related courses and modules</p>
      </div>
      
      <div className="flex-1 flex">
        <div className="flex-1 h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            minZoom={0.5}
            maxZoom={1.5}
            nodesDraggable={false}
            nodesConnectable={false}
            className="bg-gradient-to-b from-blue-50 to-white"
          >
            <Controls />
            <MiniMap />
            <Background color="#aaa" gap={16} />
            <Panel position="top-left" className="bg-white p-3 rounded-lg shadow-md border border-gray-200 mt-2 ml-2">
              <h3 className="font-medium mb-2">Navigation Tips:</h3>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-1">• Use mouse wheel to zoom in/out</li>
                <li className="flex items-center mb-1">• Drag to pan around</li>
                <li className="flex items-center">• Click on courses to expand modules</li>
              </ul>
            </Panel>
          </ReactFlow>
        </div>
        
        {selectedModuleData && (
          <div className="w-80 border-l p-4 bg-gray-50 overflow-y-auto">
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">{selectedModuleData.topic}</Badge>
              <h2 className="text-xl font-bold">{selectedModuleData.module}</h2>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <Clock size={14} className="mr-1" />
                {selectedModuleData.duration}
              </p>
              <div className="text-sm text-gray-600 mt-4">
                Part of <span className="font-medium">{selectedModuleData.course}</span>
              </div>
            </div>
            
            <Card className="p-4 mb-4">
              <h3 className="font-medium mb-2">Module Description</h3>
              <p className="text-sm text-gray-600">
                This module covers key concepts and practical applications in {selectedModuleData.module.toLowerCase()}.
              </p>
            </Card>
            
            <Button className="w-full mb-3">Start Learning</Button>
            <Button variant="outline" className="w-full">Add to Favorites</Button>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t bg-gray-50">
        <h2 className="text-lg font-semibold mb-3">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {initialData.topics[0].courses.map((course) => (
            <Card key={course.id} className="p-3">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleCourseExpand(`ai-center-${course.id}`)}
              >
                <h3 className="font-medium">{course.label}</h3>
                {expandedCourses.includes(`ai-center-${course.id}`) ? 
                  <ChevronDown size={16} /> : <ChevronRight size={16} />
                }
              </div>
              
              {expandedCourses.includes(`ai-center-${course.id}`) && (
                <div className="mt-2 pl-2 border-l-2 border-gray-200">
                  {course.modules.map((module) => (
                    <div 
                      key={module.id}
                      className="py-1 text-sm flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 rounded"
                      onClick={() => handleModuleSelect(`ai-center-${course.id}-${module.id}`)}
                    >
                      <span>{module.label}</span>
                      <span className="text-xs text-gray-500">{module.duration}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMap;
