using System;

namespace ArrayShift
{
    class Program
    {
        static void Main(string[] args)
        {
            InsertShiftArray(new int[] { 2, 4, 6, 8 }, 5);
            InsertShiftArray(new int[] { 4, 8, 15, 23, 42 }, 16);

        }
        /// <summary>
        /// Inserts a new number into the middle of the array
        /// </summary>
        /// <param name="currentArray">Is the current array of numbers</param>
        /// <param name="insertedNumber">Is the number to be inserted in the middle of the current array</param>
        /// <returns>A new array with the new number in the middle of the array</returns>
        static int[] InsertShiftArray(int[] currentArray, int insertedNumber)
        {
            int[] newArray = new int[currentArray.Length + 1];
            int insert = newArray.Length / 2;
            for (int i = 0; i < newArray.Length; i++)
            {
                if(i == insert)
                {
                    newArray[i] = insertedNumber;
                }else if(i > insert)
                {
                    newArray[i] = currentArray[i - 1];
                }
                else 
                {
                    newArray[i] = currentArray[i];
                }
            }
            string numbers = "";
            for (int i = 0; i < newArray.Length; i++)
            {
                numbers += $"{newArray[i]},";
            }
            Console.WriteLine($"The new array is {numbers}");
            return newArray;
        }
    }
}
