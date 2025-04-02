class TreeNode : 
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.parent = None

    def __str__(self):
        return str(self.value)