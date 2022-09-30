import { ListNode, TreeNode } from "./classes/nodes";

export type SetVal = string | number | unknown;

export type NumNumArr = [number[], ...number[]];

export type StrStrArr = [string, string[]];

export type Matrix<T> = T[][];

export type NumMatrix<T> = [Matrix<T>, ...number[]];

export type NodeType = TreeNode | ListNode;
