from abc import ABC, abstractmethod
# from typing import Optional, TypeVar, Generic

class ITreePrinter(ABC) : 
    @abstractmethod
    def printTreeInOrder(self) -> None :
        pass
    
    @abstractmethod
    def printTreePreOrder(self) -> None :
        pass
    
    @abstractmethod
    def printTreePostOrder(self) -> None :
        pass

    @abstractmethod
    def printTreeReverseOrder(self) -> None :
        pass
