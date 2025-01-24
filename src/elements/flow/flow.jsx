import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/base.css';
import CustomNode from './blocks/base';

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 0, y: 0 },
  },
];

const initialEdges = [];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
  );

  return (
    <div className="w-full h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background
          color="#D3D3D3"
          gap={10}
          size={1}
        />
      </ReactFlow>
    </div>
  );
};

export default Flow;
