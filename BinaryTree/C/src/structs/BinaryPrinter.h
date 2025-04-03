#ifndef BINARYPRINTER_H
#define BINARYPRINTER_H
#include "TreeNode.h"
#include "BinaryTree.h"

typedef struct BinaryPrinter {
    int* value;  // Use um ponteiro para maior flexibilidade

    void (*PrintInOrderTraversal)(struct TreeNode* node, int);
    void (*PrintInTransversalReverse)(struct TreeNode* node, int);
    void (*PrintPreOrderTraversal)(struct TreeNode* node, int);

} BinaryPrinter;


void PrintInOrderTraversal(TreeNode* node);
void PrintPreOrderTraversal(TreeNode* node);
void PrintPostOrderTraversal(TreeNode* node);


#endif


