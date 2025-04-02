import { BinaryTree } from "../classes/BinaryTree";
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;

describe("Binarytree", () => {
    let binaryTree: BinaryTree;

    beforeEach(() => {
        binaryTree = new BinaryTree();
    }) 

    it("should create a binary tree with a null root", () => {
        const root =  binaryTree.getRoot();
        expect(root).toBeNull();
    })
    
    it("should insert smaller values to the left and large values to the right", () =>{
        binaryTree.insert(10);
        binaryTree.insert(5);
        binaryTree.insert(15);

        const root = binaryTree.getRoot();
        expect(root?.left?.node).toBe(5);
        expect(root?.right?.node).toBe(15);
    });

    it("should not insert duplicated values", () => {
        binaryTree.insert(10);
        binaryTree.insert(10);

        const root = binaryTree.getRoot();
        expect(root?.node).toBe(10);
        expect(root?.right).toBeNull();
        expect(root?.left).toBeNull();
    })

    it("should build a balanced tree structure", () => {
        binaryTree.insert(10);
        binaryTree.insert(5);
        binaryTree.insert(15);
        binaryTree.insert(3);
        binaryTree.insert(7);

        const root = binaryTree.getRoot();
        expect(root?.left?.node).toBe(5);
        expect(root?.right?.node).toBe(15);
        expect(root?.left?.left?.node).toBe(3);
        expect(root?.left?.right?.node).toBe(7);
        expect(root?.right?.left).toBeNull();
        expect(root?.right?.right).toBeNull();
    })

    it("should handle large and small values correctly", ()=> {
        binaryTree.insert(MAX_SAFE_INTEGER);
        binaryTree.insert(MIN_SAFE_INTEGER);

        const root = binaryTree.getRoot();
        expect(root?.node).toBe(MAX_SAFE_INTEGER);  
        expect(root?.left?.node).toBe(MIN_SAFE_INTEGER);
    })

    it("should handle negative values correctly", () => {
        binaryTree.insert(-5);
        binaryTree.insert(-15);
        binaryTree.insert(-10);

        const root = binaryTree.getRoot();
        expect(root?.node).toBe(-5)
        expect(root?.left?.node).toBe(-15);
        expect(root?.left?.right?.node).toBe(-10);
    })

    
});