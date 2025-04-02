import { PrintTree } from "./classes/PrintTree";

// Exemplo de uso:
// Criando uma árvore binária e inserindo nós
const tree = new PrintTree(); // Usa a classe PrintTree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

console.log("Traversal em ordem (in-order):");
tree.inOrderTraversal();

console.log("Traversal pré-ordem (pre-order):");
tree.preOrderTraversal();

console.log("Traversal pós-ordem (post-order):");
tree.postOrderTraversal();
