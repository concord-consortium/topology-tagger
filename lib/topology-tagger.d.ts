import { Graph as AnalysisGraph } from "graphlib";
declare type sageNodeKey = string;
export interface ISageLinkRelation {
    type: string;
    formula?: string;
}
export interface ISageLink {
    title: string;
    sourceNode: sageNodeKey;
    targetNode: sageNodeKey;
    relation?: ISageLinkRelation;
    transferNode?: string;
}
export interface ISageData {
    title: string;
    isAccumulator: boolean;
}
export interface ISageNode {
    key: sageNodeKey;
    data?: ISageData;
}
export interface ITopology {
    nodeCount: number;
    linkCount: number;
    cycles: number;
}
export interface ISageGraph {
    links: ISageLink[];
    nodes: ISageNode[];
}
export interface ITopoReport {
    links: number;
    nodes: number;
    unconnectedNodes: number;
    collectorNodes: number;
    multiLinkTargetNodes: number;
    graphs: number;
    linearGraphs: number;
    feedbackGraphs: number;
    branchedGraphs: number;
    multiPathGraphs: number;
}
export declare function getAnalysisGraph(sageModelGraph: ISageGraph, swapTransferSource?: boolean): AnalysisGraph;
export declare function getTopology(sageModelGraph: ISageGraph): {
    links: number;
    nodes: number;
    unconnectedNodes: any;
    collectorNodes: any;
    multiLinkTargetNodes: any;
    graphs: number;
    linearGraphs: number;
    feedbackGraphs: number;
    branchedGraphs: number;
    multiPathGraphs: number;
};
export {};
//# sourceMappingURL=topology-tagger.d.ts.map