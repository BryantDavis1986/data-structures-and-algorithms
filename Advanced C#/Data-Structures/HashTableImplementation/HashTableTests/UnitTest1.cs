using System;
using Xunit;
using HashTableImplementation;

namespace HashTableTests
{
    public class UnitTest1
    {
        [Fact]
        public void CanAddItemToHashTable()
        {
            HashTable<int> table = new HashTable<int>(16);

            table.Add("Josie", 9);
            Assert.NotNull(table);

        }

        [Fact]
        public void GetValue()
        {
            // arrange
            HashTable<int> table = new HashTable<int>(16);

            table.Add("Josie", 9);
            table.Add("Dog", 10);
            table.Add("Cupcake", 5);

            var result = table.Get("Dog");

            Assert.Equal(10, result);
        }

        [Fact]
        public void FindsContainedValue()
        {
            HashTable<int> table = new HashTable<int>(16);

            table.Add("Josie", 9);
            table.Add("Dog", 10);
            table.Add("Cupcake", 5);

            var contains = table.Contains("Cupcake");

            Assert.True(contains);

        }
    }
}
