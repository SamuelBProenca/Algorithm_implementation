#include <stdlib.h>
#include "../structs/TreeNode.h"

void FreeTreeNodes(TreeNode* node) {
    if (node == NULL) return;

    FreeTreeNodes(node->left);
    FreeTreeNodes(node->right);
    free(node);
}
