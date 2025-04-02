all: main

main: main.o models/BinaryTree.o utils/FreeMemoryTree.o
    gcc -o main main.o models/BinaryTree.o utils/FreeMemoryTree.o

main.o: main.c structs/TreeNode.h structs/BinaryTree.h
    gcc -c main.c

models/BinaryTree.o: models/BinaryTree.c structs/BinaryTree.h
    gcc -c models/BinaryTree.c

utils/FreeMemoryTree.o: utils/FreeMemoryTree.c structs/TreeNode.h
    gcc -c utils/FreeMemoryTree.c

clean:
    rm -f *.o main
