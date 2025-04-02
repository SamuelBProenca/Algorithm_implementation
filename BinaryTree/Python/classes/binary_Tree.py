from interfaces.I_Binary_Tree import I_Binary_Tree

class Binary_Tree(I_Binary_Tree):  
    def __init__(self, root) -> None:
        self.root = root
        self.left = None
        self.right = None

    def insert_left(self, new_node):
        if self.left is None:
            self.left = Binary_Tree(new_node)
        else:
            new_tree = Binary_Tree(new_node)
            new_tree.left = self.left
            self.left = new_tree

    def insert_right(self, new_node):
        if self.right is None:
            self.right = Binary_Tree(new_node)
        else:
            new_tree = Binary_Tree(new_node)
            new_tree.right = self.right
            self.right = new_tree