using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace LLLibrary
{
    public class LinkedList
    {
        public Node Head { get; set; }
        public Node Current { get; set; }

        public LinkedList()
        {
            Head = null;
            Current = Head;
        }

        /// <summary>
        /// Inserts a new node with an O(1) operation into linkedList
        /// </summary>
        /// <param name="value">value to be strored in the node</param>
        public void Insert(int value)
        {
            Current = Head;
            // create teh new node that needs to be added
            Node node = new Node(value);
            node.Next = Head;
            Head = node;
        }

        /// <summary>
        /// Finds a specific value in the linked list
        /// O(n) time efficiency
        /// </summary>
        /// <param name="value">searchable value</param>
        /// <returns>response if it exists</returns>
        public bool Includes(int value)
        {
            Current = Head;
            // While loop
            // traverse the linked list and do the comparison
            while (Current != null)
            {
                // check if it's equal to the given value
                if (Current.Value == value)
                {
                    return true;
                }

                // move to the next one
                Current = Current.Next;
            }

            return false;
        }

        /// <summary>
        /// Overriding current behavior of tostring method to output all values in the linked list as a string 
        /// </summary>
        /// <returns>a string containing all the values of the linked list</returns>
        public override string ToString()
        {
            Current = Head;
            // StringBuilder class. 
            // why would you use Stringbuilder over string concatination??

            StringBuilder sb = new StringBuilder();

            // start constructing sb
            while (Current != null)
            {
                sb.Append($"{Current.Value} -> ");
                Current = Current.Next;
            }

            sb.Append("NULL");

            return sb.ToString();
        }

        public void Append(int value)
        {
            Current = Head;

            while(Current != null)
            {
                if(Current.Next == null)
                {
                    Node node = new Node(value);
                    Current.Next = node;
                    Current = Current.Next;
                }
                Current = Current.Next;
            }
        }
        public void InsertBefore(int value, int newValue)
        {
            Current = Head;
            if(Current.Value == value)
            {
                Insert(newValue);
            }
            else
            {

            Node last = Current;
            while(Current != null)
            {
                if(Current.Value == value)
                {
                    Node node = new Node(newValue);
                    node.Next = Current;
                    last.Next = node;
                        break;
                }
                last = Current;
                Current = Current.Next;
            }
            }
        }
        public void InsertAfter(int value, int newValue)
        {
            Current = Head;

                while (Current != null)
                {
                    if (Current.Value == value)
                    {
                        Node node = new Node(newValue);
                    node.Next = Current.Next;
                    Current.Next = node;
                    }
                    Current = Current.Next;
                }
            }
        public int kthFromEnd(int key)
        {
            Current = Head;
            Node walking = Current;
            Node running = Current;

            int k = key;
            if (k < 0)
            {
                throw new Exception("K cannot be a negative number");

            }
            while (k > 0)
            {
                if(running.Next != null)
                {
                    k--;
                    running = running.Next;
                }
                else
                {
                    throw new Exception("K cannot be same length as Linked List");
                }
            }
            while(running.Next != null)
            {
                walking = walking.Next;
                running = running.Next;
            }
            return walking.Value;
        }
    }

    }

