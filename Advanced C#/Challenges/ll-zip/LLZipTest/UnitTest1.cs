using System;
using Xunit;
using LLLibrary;
using static ll_zip.Program;

namespace LLZipTest
{
    public class UnitTest1
    {
        [Fact]
        public void CanReturnHeadHappyPath()
        {
            LinkedList one = new LinkedList();
            LinkedList two = new LinkedList();

            one.Insert(5);
            one.Insert(15);
            one.Insert(50);

            two.Insert(1);
            two.Insert(10);
            two.Insert(100);

            Node answer = ZipLists(one, two);

            LinkedList linkedListResult = new LinkedList();
            linkedListResult.Head = answer;

            string expected = "5 -> 1 -> 15 -> 10 -> 50 -> 100 -> NULL";

            Assert.Equal(expected, linkedListResult.ToString());
        }
        [Fact]
        public void CanReturnHeadWithFirstLLShorterThanSecond()
        {
            LinkedList one = new LinkedList();
            LinkedList two = new LinkedList();

            one.Insert(5);
            one.Insert(15);

            two.Insert(1);
            two.Insert(10);
            two.Insert(100);


            Node answer = ZipLists(one, two);

            LinkedList linkedListResult = new LinkedList();
            linkedListResult.Head = answer;

            string expected = "1 -> 5 -> 10 -> 15 -> 100 -> NULL";

            Assert.Equal(expected, linkedListResult.ToString());
        }
        [Fact]
        public void CanReturnHeadWithSecondLLShorterThanFirst()
        {
            LinkedList one = new LinkedList();
            LinkedList two = new LinkedList();

            one.Insert(5);
            one.Insert(15);
            one.Insert(50);

            two.Insert(1);
            two.Insert(10);

            Node answer = ZipLists(one, two);

            LinkedList linkedListResult = new LinkedList();
            linkedListResult.Head = answer;

            string expected = "5 -> 15 -> 1 -> 50 -> 10 -> NULL";

            Assert.Equal(expected, linkedListResult.ToString());
        }
        [Fact]
        public void CanReturnHeadWithFirstLLBeingEmpty()
        {
            LinkedList one = new LinkedList();
            LinkedList two = new LinkedList();



            two.Insert(1);
            two.Insert(10);

            Node answer = ZipLists(one, two);

            LinkedList linkedListResult = new LinkedList();
            linkedListResult.Head = answer;

            string expected = "1 -> 10 -> NULL";

            Assert.Equal(expected, linkedListResult.ToString());
        }
        [Fact]
        public void CanReturnHeadWithSecondLLBeingEmpty()
        {
            LinkedList one = new LinkedList();
            LinkedList two = new LinkedList();



            one.Insert(1);
            one.Insert(10);

            Node answer = ZipLists(one, two);

            LinkedList linkedListResult = new LinkedList();
            linkedListResult.Head = answer;

            string expected = "1 -> 10 -> NULL";

            Assert.Equal(expected, linkedListResult.ToString());
        }
        [Fact]
        public void CanReturnHeadWithTwoEmptyLL()
        {
            LinkedList one = new LinkedList();
            LinkedList two = new LinkedList();





            Node answer = ZipLists(one, two);

            LinkedList linkedListResult = new LinkedList();
            linkedListResult.Head = answer;

            string expected = "NULL";

            Assert.Equal(expected, linkedListResult.ToString());
        }
    }
}
