#ifndef BINARYTREE_H
#define BINARYTREE_H

#include "TreeNode.h"

typedef struct BinaryTree {
    TreeNode* root; // Raiz da árvore
    
    void (*insert)(struct BinaryTree*, int);
    void (*insertNode)(TreeNode**, int);
    TreeNode* (*getRoot)(struct BinaryTree*);
} BinaryTree;

// Funções relacionadas à BinaryTree
BinaryTree* CreateBinaryTree();
void FreeTreeNodes(TreeNode* node);
void FreeMemory(BinaryTree* tree);
void insert(BinaryTree* tree, int value);
TreeNode* getRoot(BinaryTree* tree);

#endif
