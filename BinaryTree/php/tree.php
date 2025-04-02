<?php

// Tree implementation in PHP

// Object Oriented Tree class
class Node{
    // Node class of the tree
    private static $node = null;
    private static $node_left = null;
    private static $node_right = null;
    
}


class BinaryTree extends Node{
    private static $root = null;

    public static function insert($value){
        // Insert a value into the tree
        if (self::$root == null) {
            self::$root = new Node($value);
        };
        
        self::insert(self::$root, $value);
        
    }

}


?>