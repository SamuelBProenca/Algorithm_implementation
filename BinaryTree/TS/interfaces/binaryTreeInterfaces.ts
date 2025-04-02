import { NodeTree } from "../classes/NodeTree";

export interface ITreeTransversal {
    inOrderTraversal(node : NodeTree | null): void;
    preOrderTraversal(node : NodeTree | null): void;
    postOrderTraversal(node : NodeTree | null): void;
}

export interface IBinaryTree {
    insert(value : number) : void;
    insertNode(root : NodeTree, node : NodeTree) : void;
    getRoot() : Readonly<NodeTree | null>;
}