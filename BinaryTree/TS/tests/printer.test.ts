import { BinaryTree } from "../classes/BinaryTree";
import { PrintTree } from "../classes/PrintTree";

describe("Integration tests: BinaryTree and PrintTree", () => {
    let printTree: PrintTree;

    beforeEach(() => {
        printTree = new PrintTree();
    });

    it("should correctly traverse and print nodes in in-order", () => {
        printTree.insert(10);
        printTree.insert(5);
        printTree.insert(15);
        printTree.insert(3);
        printTree.insert(7);

        const consoleSpy = jest.spyOn(console, "log"); // Espia o console.log
        printTree.inOrderTraversal();

        expect(consoleSpy.mock.calls.map(call => call[0])).toEqual([3, 5, 7, 10, 15]);
        consoleSpy.mockRestore(); // Restaura o console para evitar interferências
    });

    it("should correctly traverse and print nodes in pre-order", () => {
        printTree.insert(10);
        printTree.insert(5);
        printTree.insert(15);
        printTree.insert(3);
        printTree.insert(7);

        const consoleSpy = jest.spyOn(console, "log");
        printTree.preOrderTraversal();

        expect(consoleSpy.mock.calls.map(call => call[0])).toEqual([10, 5, 3, 7, 15]);
        consoleSpy.mockRestore();
    });

    it("should correctly traverse and print nodes in post-order", () => {
        printTree.insert(10);
        printTree.insert(5);
        printTree.insert(15);
        printTree.insert(3);
        printTree.insert(7);

        const consoleSpy = jest.spyOn(console, "log");
        printTree.postOrderTraversal();

        expect(consoleSpy.mock.calls.map(call => call[0])).toEqual([3, 7, 5, 15, 10]);
        consoleSpy.mockRestore();
    });

    it("should handle an empty tree traversal gracefully", () => {
        const consoleSpy = jest.spyOn(console, "log");
        printTree.inOrderTraversal();

        expect(consoleSpy).not.toHaveBeenCalled();
        consoleSpy.mockRestore();
    });
});
