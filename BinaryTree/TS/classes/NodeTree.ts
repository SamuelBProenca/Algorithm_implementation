export class NodeTree {
    /*  
        No NodeTree definimos que cada nó recebido tem até dois 
        filhos iniciados como um node tree ou null para o caso de não existir.
        O nó é um número, mas poderia ser qualquer tipo de dado.
    */
    readonly node: number;
    left: NodeTree | null;
    right: NodeTree | null;

    constructor(node: number) {
        /*  
            O construtor recebe um número e inicia os filhos como null.
            O nó é o número recebido e os filhos são iniciados como null.
        */ 
        this.node = node;
        this.left = null;
        this.right = null;
    }
}
