#ifndef TREENODE_H
#define TREENODE_H

typedef struct TreeNode {
    int value;
    struct TreeNode* right; // Ponteiro para o nó da direita 
    struct TreeNode* left;  // Ponteiro para o nó da esquerda
} TreeNode;

#endif
