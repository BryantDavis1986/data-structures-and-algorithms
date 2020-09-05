using System;
using System.Collections.Generic;
using System.Text;

namespace HashTableImplementation
{
    public class Node<T>
    {
        // Key is the value to be passed into the table to be hashed
        public string Key { get; set; }
        // The value to be hashed
        public T Value { get; set; }

        public Node(T value, string key)
        {
            Key = key;
            Value = value;
        }
    }
}
