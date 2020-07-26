using System;
using Xunit;
using StacksAndQueues;

namespace StackTests
{
    public class UnitTest1
    {
        [Fact]
        public void CanPushToStack()
        {
            Stack stack = new Stack();
            stack.Push("Bryant is Awesome");

            Assert.Equal("Bryant is Awesome", stack.Top.Value);
        }

        [Fact]
        public void CanPushMultipleToStack()
        {
            Stack stack = new Stack();
            stack.Push("Bryant");
            Assert.Equal("Bryant", stack.Top.Value);
            
            stack.Push("can");
            Assert.Equal("can", stack.Top.Value);
            
            stack.Push("test");
            Assert.Equal("test", stack.Top.Value);
        }

        [Fact]
        public void CanPopFromStack()
        {
            Stack stack = new Stack();
            stack.Push("bryant");
            stack.Push("can");
            stack.Push("test");
            string result = stack.Pop();

            Assert.Equal("test", result);
        }

        [Fact]
        public void CanEmptyStack()
        {
            Stack stack = new Stack();

            stack.Push("bryant");
            stack.Push("can");
            stack.Push("test");

            string result1 = stack.Pop();
            string result2 = stack.Pop();
            string result3 = stack.Pop();

            Assert.Equal("test", result1);
            Assert.Equal("can", result2);
            Assert.Equal("bryant", result3);
            Assert.Null(stack.Top);
        }

        [Fact]
        public void CanPeekTopNode()
        {
            Stack stack = new Stack();
            stack.Push("bryant");
            stack.Push("can");
            stack.Push("test");
            string result = stack.Peek();

            Assert.Equal("test", result);
        }

        [Fact]
        public void CanCreateEmptyStack()
        {
            Stack stack = new Stack();

            Assert.Null(stack.Top);
        }

        [Fact]
        public void CanThrowExceptionOnEmptyStack()
        {
            Stack stack = new Stack();

            var pop = Assert.Throws<Exception>(() => stack.Pop());
            var peek = Assert.Throws<Exception>(() => stack.Peek());

            Assert.Equal("Empty stack", pop.Message);
            Assert.Equal("Empty stack", peek.Message);

        }
    }
}
