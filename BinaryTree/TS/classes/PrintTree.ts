import { NodeTree } from "./NodeTree";
import { ITreeTransversal } from "../interfaces/binaryTreeInterfaces";
import { BinaryTree } from "./BinaryTree";

// A classe PrintTree herda da classe BinaryTree e implementa a interface ITreeTransversal
export class PrintTree extends BinaryTree implements ITreeTransversal {
    constructor() {
        super(); // Usa o construtor da classe pai
    } 

    public inOrderTraversal(node: NodeTree | null = this.root): void {
        /*  
            O método inOrderTraversal percorre os nós em ordem crescente.
        */
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.node);
            this.inOrderTraversal(node.right);
        }
    }

    public preOrderTraversal(node: NodeTree | null = this.root): void {
        /*  
            O método preOrderTraversal percorre os nós em ordem: raiz, esquerda, direita.
        */
        if (node) {
            console.log(node.node);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    public postOrderTraversal(node: NodeTree | null = this.root): void {
        /*  
            O método postOrderTraversal percorre os nós em ordem: esquerda, direita, raiz.
        */
        if (node) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.node);
        }
    }
}