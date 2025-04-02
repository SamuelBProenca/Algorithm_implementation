import { IBinaryTree } from "../interfaces/binaryTreeInterfaces";
import { NodeTree } from "./NodeTree";

// A classe BinaryTree implementa a interface IBinaryTree
// e define os métodos para inserir nós e percorrer a árvore.
export class BinaryTree implements IBinaryTree {
    /*  
        A classe BinaryTree tem um nó raiz que é do tipo NodeTree.
        O nó raiz é o primeiro nó da árvore.
    */
    public root: NodeTree | null;

    constructor() {
        /*  
            O construtor inicia a árvore com um nó raiz null.
        */
        this.root = null;
    }

    public getRoot(): NodeTree | null {
        return this.root;
    }

    public insert(value: number): void {
        /*  
            O método insert recebe um número e insere na árvore.
            O nó é criado com o número recebido e o nó raiz é iniciado 
            com o nó recebido. Se a árvore já tem nós, o nó é inserido
            na posição correta.
        */
        const node = new NodeTree(value);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root: NodeTree, node: NodeTree): void {
        /*  
            O método insertNode recebe um nó e o nó a ser inserido.
            Se o nó a ser inserido é menor que o nó raiz, ele é inserido na esquerda.
            Se o nó a ser inserido é maior que o nó raiz, ele é inserido na direita.
            Se o nó já existe, ele não é inserido.
        */
        try {

            if (node.node === root.node) return; // Não insere nós duplicados

            const directions = {
                left: () => { root.left = node; },
                right: () => { root.right = node; },
            };
            
            const direction = node.node < root.node ? "left" : "right";            
            
            if(!root[direction]){
                root[direction] = node;
            }
            
            this.insertNode(root[direction] as NodeTree, node);
        
        } catch (error) {
            console.error("Error inserting node:", error);
        }
    }
}