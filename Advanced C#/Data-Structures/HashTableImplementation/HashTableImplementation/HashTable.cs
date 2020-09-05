using System;
using System.Collections.Generic;

namespace HashTableImplementation
{
    public class HashTable<T>
    {
        // We are now in the matrix, This is the map of a labrynth. Essentialy it is an array that at each index has a LinkedList that is made up of nodes that
        // consists of keys and values per node.
        public LinkedList<LinkedListNode<Node<T>>>[] Map { get; set; }

        public HashTable(int size)
        {
            // the size of the array to be created or more specifically of the table
            Map = new LinkedList<LinkedListNode<Node<T>>>[size];
        }

        /// <summary>
        /// Computes a hash integer from a given key value
        /// </summary>
        /// <param name="key">the given key to hash</param>
        /// <returns>index of the array placement</returns>
        private int GetHash(string key)
        {
            // Determine our alogirithm for our hash.
            // a string is a list of char
            // a char is a numeric value

            int total = 0;
            for (int i = 0; i < key.Length; i++)
            {
                total += key[i];
            }
            // the algorithm used for the hash table for the location in the array to be stored
            int primeValue = total * 599;
            int index = primeValue % Map.Length;

            return index;

        }

        /// <summary>
        /// Adds the key and value to the current LL, if no LL exists creates a new one and places the key and value inside of that which then gets placed
        /// inside of the index in the table
        /// </summary>
        /// <param name="key">the given key to hash</param>
        /// <param name="value">the value of the hash</param>
        public void Add(string key, T value)
        {
            int index = GetHash(key);
            Node<T> htNode = new Node<T>(value, key);
            LinkedListNode<Node<T>> node = new LinkedListNode<Node<T>>(htNode);

            // if their is nothing in the current location create a new LL to put in that location
            if (Map[index] is null)
            {
                // instantiate a new linked list
                Map[index] = new LinkedList<LinkedListNode<Node<T>>>();

            }
            // addes the node in the last position, works whether an empty LL or a LL with other items
            Map[index].AddLast(node);

        }

        /// <summary>
        /// Retrieves the Hash
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public T Get(string key)
        {
            // the location of the key to be accessed
            int index = GetHash(key);
            // conditional for as long as the table isn't empty
            if (!(Map[index] is null))
            {

                if (Map[index].Count == 1)
                {
                    // if only one item exist inside of this index grab the first one since its theo nly one
                    var first = Map[index].First;
                    // {LinkedListNode} {HashtTableNode Value} {Property}
                    // due to us layering things such as this we require the values values value to return back
                    return first.Value.Value.Value;
                }
                // iterates over the index linked list and as long as the current is not not will check to see if the key of each node is equal to the key entered
                // once it is foudn that it is equal then it will return that value
                else
                {
                    var current = Map[index].First;
                    while (current != null)
                    {
                        if (current.Value.Value.Key == key)
                        {
                            return current.Value.Value.Value;
                        }
                        current = current.Next;
                    }
                }
            }
            return default;
        }

        public bool Contains(string key)
        {
            int index = GetHash(key);

            var location = Map[index];

            if (!(location is null))
            {
                var current = Map[index].First;

                while (current != null)
                {
                    if (current.Value.Value.Key == key)
                    {
                        return true;
                    }

                }
            }
            return false;
        }
    }
}
