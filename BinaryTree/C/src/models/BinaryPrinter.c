#include "../structs/BinaryPrinter.h"

void PrintInOrderTraversal(TreeNode* node) {
    if (node != NULL) {
        PrintInOrderTraversal(node->left);
        printf("%d ", node->value);
        PrintInOrderTraversal(node->right);
    }
}

void PrintPreOrderTraversal(TreeNode* node) {
    if (node != NULL) {
        printf("%d ", node->value);
        PrintPreOrderTraversal(node->left);
        PrintPreOrderTraversal(node->right);
    }
}

void PrintPostOrderTraversal(TreeNode* node) {
    if (node != NULL) {
        PrintPostOrderTraversal(node->left);
        PrintPostOrderTraversal(node->right);
        printf("%d ", node->value);
    }
}
