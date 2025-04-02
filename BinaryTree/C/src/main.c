#include <stdio.h>
#include "./structs/BinaryTree.h"

int main() {
    BinaryTree* tree = CreateBinaryTree();
    tree->insert(tree, 10);
    tree->insert(tree, 5);
    tree->insert(tree, 20);

    TreeNode* root = tree->getRoot(tree);
    if (root != NULL) {
        printf("Root Value: %d\n", root->value);
    }

    FreeMemory(tree);
    return 0;
}
