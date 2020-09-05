using System;
using Xunit;
using LLLibrary;

namespace LinkedListTests
{
    public class UnitTest1
    {
        [Fact]
        public void CanInstantiateEmptyLinkedList()
        {
            LinkedList list = new LinkedList();
            Assert.Null(list.Head);
        }

        [Fact]
        public void CanInsertIntoLinkedList()
        {
            // insert means add to the front
            //Arrange
            LinkedList list = new LinkedList();
            list.Insert(4);
            Assert.Equal(4, list.Head.Value);
        }

        [Fact]
        public void CanInsertMultipleNodesInLinkedList()
        {
            LinkedList list = new LinkedList();
            list.Insert(4);
            list.Insert(8);
            list.Insert(15);
            list.Insert(16);
            list.Insert(23);
            list.Insert(42);

            Assert.Equal(42, list.Head.Value);

        }

        [Fact]
        public void CanFindValueInList()
        {
            // arrange
            LinkedList list = new LinkedList();

            list.Insert(4);
            list.Insert(8);
            list.Insert(15);
            list.Insert(16);
            list.Insert(23);
            list.Insert(42);

            // Act 
            int searchForValue = 15;
          bool exists = list.Includes(searchForValue);

            // Assert
            Assert.True(exists);

        }

        [Fact]
        public void CannotFindValueInLinkedList()
        {
            // arrange
            LinkedList list = new LinkedList();

            list.Insert(4);
            list.Insert(8);
            list.Insert(15);
            list.Insert(16);
            list.Insert(23);
            list.Insert(42);

            // Act 
            int searchForValue = 100;
            bool exists = list.Includes(searchForValue);

            // Assert
            Assert.False(exists);

        }

        [Fact]
        public void CanReturnAllValuesInLinkedList()
        {
            // Arrange
            LinkedList list = new LinkedList();
            list.Insert(4);
            list.Insert(8);
            list.Insert(15);
            list.Insert(16);
            list.Insert(23);
            list.Insert(42);

            // Act
            string value = list.ToString();

            string expected = "42 -> 23 -> 16 -> 15 -> 8 -> 4 -> NULL";
            // Assert
            Assert.Equal(expected, value);

        }
        [Fact]

        public void CanAddNodeAtEnd()
        {
         
            // Arrange
            LinkedList ll = new LinkedList();

            ll.Insert(2);
            ll.Insert(3);
            ll.Insert(1);
            // Act
            string expected = "1 -> 3 -> 2 -> 5 -> NULL";
            ll.Append(5);
            string actual = ll.ToString();
            // Assert
            Assert.Equal(expected, actual);


        }
        [Fact]

        public void CanAddMultipleNodeAtEnd()
        {

            // Arrange
            LinkedList ll = new LinkedList();

            ll.Insert(2);
            ll.Insert(3);
            ll.Insert(1);

            ll.Append(5);
            ll.Append(15);
            ll.Append(50);

            // Act
            string expected = "1 -> 3 -> 2 -> 5 -> 15 -> 50 -> NULL";
            string actual = ll.ToString();
            // Assert
            Assert.Equal(expected, actual);


        }
        [Fact]

        public void CanInsertNodeBefore()
        {

            // Arrange
            LinkedList ll = new LinkedList();

            ll.Insert(2);
            ll.Insert(3);
            ll.Insert(1);
            ll.InsertBefore(3, 5);

            // Act
            string expected = "1 -> 5 -> 3 -> 2 -> NULL";
            string actual = ll.ToString();
            // Assert
            Assert.Equal(expected, actual);


        }
        [Fact]

        public void CanInsertNodeBeforeFirstNode()
        {

            // Arrange
            LinkedList ll = new LinkedList();

            ll.Insert(2);
            ll.Insert(3);
            ll.Insert(1);
            ll.InsertBefore(1, 5);

            // Act
            string expected = "5 -> 1 -> 3 -> 2 -> NULL";
            string actual = ll.ToString();
            // Assert
            Assert.Equal(expected, actual);


        }
        [Fact]

        public void CanInsertNodeAfterMiddleNode()
        {

            // Arrange
            LinkedList ll = new LinkedList();

            ll.Insert(2);
            ll.Insert(3);
            ll.Insert(1);
            ll.InsertAfter(3, 5);

            // Act
            string expected = "1 -> 3 -> 5 -> 2 -> NULL";
            string actual = ll.ToString();
            // Assert
            Assert.Equal(expected, actual);


        }
        [Fact]

        public void CanInsertNodeAtEnd()
        {

            // Arrange
            LinkedList ll = new LinkedList();

            ll.Insert(2);
            ll.Insert(3);
            ll.Insert(1);
            ll.InsertAfter(2, 5);

            // Act
            string expected = "1 -> 3 -> 2 -> 5 -> NULL";
            string actual = ll.ToString();
            // Assert
            Assert.Equal(expected, actual);


        }
        [Fact]
        public void CanReturnKnthHappyPath()
        {
            LinkedList ll = new LinkedList();

            ll.Insert(10);
            ll.Insert(20);
            ll.Insert(30);
            ll.Insert(40);
            ll.Insert(50);

            int value = ll.kthFromEnd(1);

            Assert.Equal(20, value);
        }
        [Fact]
        public void CanReturnExceptionForEqualLength()
        {
            // Arrange
            LinkedList list = new LinkedList();
            list.Insert(10);
            list.Insert(20);
            list.Insert(30);
            list.Insert(40);
            list.Insert(50);
            // Act 

            // capture the exception inside of a delegate, and confirm the message is what was thrown. 
            var ex = Assert.Throws<Exception>(() => list.kthFromEnd(5));
            Assert.Equal("K cannot be same length as Linked List", ex.Message);
        }
        [Fact]
        public void CannotReceiveNegativeIntK()
        {
            // Arrange
            LinkedList list = new LinkedList();
            list.Insert(10);
            list.Insert(20);
            list.Insert(30);
            list.Insert(40);
            list.Insert(50);
            // Act 

            // capture the exception inside of a delegate, and confirm the message is what was thrown. 
            var ex = Assert.Throws<Exception>(() => list.kthFromEnd(-5));
            Assert.Equal("K cannot be a negative number", ex.Message);
        }
        [Fact]
        public void CanReturnExceptionForLengthOfOne()
        {
            // Arrange
            LinkedList list = new LinkedList();
            list.Insert(10);

            // Act 

            // capture the exception inside of a delegate, and confirm the message is what was thrown. 
            var ex = Assert.Throws<Exception>(() => list.kthFromEnd(1));
            Assert.Equal("K cannot be same length as Linked List", ex.Message);
        }
        [Fact]
        public void CanReturnExceptionForLengthLargerThanLL()
        {
            // Arrange
            LinkedList list = new LinkedList();
            list.Insert(10);
            list.Insert(20);
            list.Insert(30);
            list.Insert(40);
            list.Insert(50);
            // Act 

            // capture the exception inside of a delegate, and confirm the message is what was thrown. 
            var ex = Assert.Throws<Exception>(() => list.kthFromEnd(6));
            Assert.Equal("K cannot be same length as Linked List", ex.Message);
        }
    }
}
