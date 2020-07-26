using System;
using Xunit;
using StacksAndQueues;

namespace QueTests
{
    public class UnitTest1
    {
        [Fact]
        public void CanEnqueueIntoQueue()
        {
            Queue queue = new Queue();

            queue.Enqueue("Awesome");

            Assert.Equal("Awesome", queue.Front.Value);
        }

        [Fact]
        public void CanEnqueueMultipleIntoQueue()
        {
            Queue queue = new Queue();

            queue.Enqueue("Bryant");
            queue.Enqueue("is");
            queue.Enqueue("Tolerable");


            Assert.Equal("Bryant", queue.Front.Value);
        }

        [Fact]
        public void CanDequeueFromQueue()
        {
            Queue queue = new Queue();

            queue.Enqueue("Awesomeness");
            queue.Enqueue("Defines");
            queue.Enqueue("Bryant");
            string result = queue.Dequeue();

            Assert.Equal("Defines", queue.Front.Value);
            Assert.Equal("Awesomeness", result);
        }

        [Fact]
        public void CanPeekIntoQueue()
        {
            Queue queue = new Queue();
            queue.Enqueue("No one makes me bleed my own blood");

            string peek = queue.Peek();
            Assert.Equal("No one makes me bleed my own blood", peek);
        }

        [Fact]
        public void CanEmptyQueue()
        {
            Queue queue = new Queue();

            queue.Enqueue("Bryant");
            queue.Enqueue("Defines");
            queue.Enqueue("Honor");
            queue.Dequeue();
            queue.Dequeue();
            string result = queue.Dequeue();

            Assert.Null(queue.Front);
            Assert.Equal("Honor", result);
        }

        [Fact]
        public void CanInstantiateEmptyQueue()
        {
            Queue queue = new Queue();
            Assert.Null(queue.Front);
        }

        [Fact]
        public void CanThrowExceptionPeekingAndDequeuingEmpty()
        {
            Queue queue = new Queue();
            var resultPop = Assert.Throws<Exception>(() => queue.Dequeue());
            var resultPeek = Assert.Throws<Exception>(() => queue.Peek());

            Assert.Equal("Empty queue", resultPop.Message);
            Assert.Equal("Empty queue", resultPeek.Message);
        }
    }
}
