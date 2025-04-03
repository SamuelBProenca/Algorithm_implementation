#ifndef BINARYTREE_H
#define BINARYTREE_H

#include "TreeNode.h"

typedef struct BinaryTree {
    TreeNode* root;

    void (*insert)(struct BinaryTree*, int);
    TreeNode* (*getRoot)(struct BinaryTree*);
} BinaryTree;

// Funções
BinaryTree* CreateBinaryTree();
void FreeTreeNodes(TreeNode* node);
void FreeMemory(BinaryTree* tree);
void insert(BinaryTree* tree, int value);
TreeNode* getRoot(BinaryTree* tree);

#endif
