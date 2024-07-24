import React, { useState, useCallback } from "react";
import "react-flow-renderer/dist/style.css";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Board Of Director" },
    position: { x: 250, y: 0 },
    style: {
      background: "#E3F2FD",
      color: "#1E88E5",
      border: "1px solid #1E88E5",
    },
  },
  {
    id: "2",
    data: { label: "VichaarLabs" },
    position: { x: 250, y: 80 },
    style: {
      background: "#E8F5E9",
      color: "#43A047",
      border: "1px solid #43A047",
    },
  },
  {
    id: "3",
    data: { label: "Aditya" },
    position: { x: 100, y: 160 },
    style: {
      background: "#FFF3E0",
      color: "#FB8C00",
      border: "1px solid #FB8C00",
    },
  },
  {
    id: "4",
    data: { label: "Abhimanyu" },
    position: { x: 400, y: 160 },
    style: {
      background: "#FFF3E0",
      color: "#FB8C00",
      border: "1px solid #FB8C00",
    },
  },
  {
    id: "5",
    data: { label: "Santosh" },
    position: { x: 100, y: 240 },
    style: {
      background: "#FFEBEE",
      color: "#E53935",
      border: "1px solid #E53935",
    },
  },
  {
    id: "6",
    data: { label: "Pradeep" },
    position: { x: 100, y: 320 },
    style: {
      background: "#FFEBEE",
      color: "#E53935",
      border: "1px solid #E53935",
    },
  },
  {
    id: "7",
    data: { label: "Manas" },
    position: { x: 300, y: 320 },
    style: {
      background: "#FFEBEE",
      color: "#E53935",
      border: "1px solid #E53935",
    },
  },
  {
    id: "8",
    data: { label: "Manasmita" },
    position: { x: 400, y: 210 },
    style: {
      background: "#FFF3E0",
      color: "#FB8C00",
      border: "1px solid #FB8C00",
    },
  },
  {
    id: "9",
    data: { label: "Ankita" },
    position: { x: 400, y: 270 },
    style: {
      background: "#FFF3E0",
      color: "#FB8C00",
      border: "1px solid #FB8C00",
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#1E88E5" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#43A047" },
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    animated: true,
    style: { stroke: "#43A047" },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    animated: true,
    style: { stroke: "#FB8C00" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    style: { stroke: "#E53935" },
  },
];

const FlowChart = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    changes =>
      setNodes(nds =>
        nds.map(node => {
          const change = changes.find(change => change.id === node.id);
          return change ? { ...node, ...change } : node;
        })
      ),
    []
  );

  const onEdgesChange = useCallback(
    changes =>
      setEdges(eds =>
        eds.map(edge => {
          const change = changes.find(change => change.id === edge.id);
          return change ? { ...edge, ...change } : edge;
        })
      ),
    []
  );

  const onConnect = useCallback(
    connection => setEdges(eds => addEdge(connection, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      style={{ width: "100%", height: "100vh" }}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

const Organisation_str = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlowProvider>
        <FlowChart />
      </ReactFlowProvider>
    </div>
  );
};

export default Organisation_str;
