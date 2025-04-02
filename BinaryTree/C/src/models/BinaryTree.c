#include <stdlib.h>
#include "../structs/BinaryTree.h"
#include "../utils/FreeMemorytree.c"

BinaryTree* CreateBinaryTree() {
    BinaryTree* tree = (BinaryTree*)malloc(sizeof(BinaryTree));
    tree->root = NULL;
    tree->insert = insert;
    tree->insertNode = insertNode;
    tree->getRoot = getRoot;
    return tree;
}

void insertNode(TreeNode** root, int value) {
    if (*root == NULL) {
        *root = (TreeNode*)malloc(sizeof(TreeNode));
        (*root)->value = value;
        (*root)->left = NULL;
        (*root)->right = NULL;
        return;
    }
    if (value < (*root)->value) insertNode(&((*root)->left), value);
    else if (value > (*root)->value) insertNode(&((*root)->right), value);
}

void insert(BinaryTree* tree, int value) {
    insertNode(&(tree->root), value);
}

TreeNode* getRoot(BinaryTree* tree) {
    return tree->root;
}
