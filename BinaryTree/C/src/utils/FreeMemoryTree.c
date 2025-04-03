#include <stdlib.h>
#include "../structs/TreeNode.h"
#include "../structs/BinaryTree.h"

void FreeTreeNodes(TreeNode* node) {
    if (node == NULL) return;
    FreeTreeNodes(node->left);
    FreeTreeNodes(node->right);
    free(node);
}

void FreeMemory(BinaryTree* tree) {
    FreeTreeNodes(tree->root);
    free(tree);
}
