using System;
using LLLibrary;

namespace ll_zip
{
    public class Program
    {
        static void Main(string[] args)
        {

        }
        /// <summary>
        /// Takes in 2 different Linked Lists. Combines the two Linked Lists into one and returns the Head.
        /// </summary>
        /// <param name="first"></param>
        /// <param name="second"></param>
        /// <returns>Returns the Head of the newly created Linked Lists</returns>
        public static Node ZipLists(LinkedList first, LinkedList second)
        {
            LinkedList newLinkedList = new LinkedList();
            newLinkedList.Current = newLinkedList.Head;
            first.Current = first.Head;
            second.Current = second.Head;

            while (first.Current != null || second.Current != null)
            {
                if (first.Current != null && second.Current != null)
                {
                    newLinkedList.Insert(second.Current.Value);
                    newLinkedList.Insert(first.Current.Value);
                    second.Current = second.Current.Next;
                    first.Current = first.Current.Next;
                }
                else if (first.Current != null && second.Current == null)
                {
                    newLinkedList.Insert(first.Current.Value);
                    first.Current = first.Current.Next;
                }
                else if (first.Current == null && second.Current != null)
                {
                    newLinkedList.Insert(second.Current.Value);
                    second.Current = second.Current.Next;
                }
                else
                {
                    first.Current = first.Current.Next;
                    second.Current = second.Current.Next;
                }
            }
            return newLinkedList.Head;
        }
    }
}
