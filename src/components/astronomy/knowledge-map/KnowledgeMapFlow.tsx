
import React from 'react';
import ReactFlow, {
  Controls,
  Background,
  NodeTypes,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useKnowledgeMapElements } from './useKnowledgeMapElements';
import CourseNode from './CourseNode';
import TopicNode from './TopicNode';

const nodeTypes: NodeTypes = {
  course: CourseNode,
  topic: TopicNode,
};

const KnowledgeMapFlow = () => {
  const { initialNodes, initialEdges } = useKnowledgeMapElements();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
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
      </ReactFlow>
    </div>
  );
};

export default KnowledgeMapFlow;
