from abc import ABC, abstractmethod
# from typing import Optional, TypeVar, Generic

class IBinarytree(ABC) : 
    @abstractmethod
    def insert(self, value : int) -> None :
        pass

    @abstractmethod
    def insertNode(self, value : int) -> None :
        pass
    
    @abstractmethod
    def getRoot(self) -> None : 
        pass
    