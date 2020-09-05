using System;

namespace CountingValleys
{
    public class Class1
    {
        // Complete the countingValleys function below.
        static int countingValleys(int n, string s)
        {
            int valleys = 0;
            int level = 0;

            foreach(char item in s)
            {
                if(item == 'D')
                {
                    level--;
                }
                if(item == 'U')
                {
                    level++;
                }
                if(level == 0 && item == 'U')
                {
                    valleys++;
                }
            }
            return valleys;

        }

        static void Main(string[] args)
        {
            TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

            int n = Convert.ToInt32(Console.ReadLine());

            string s = Console.ReadLine();

            int result = countingValleys(n, s);

            textWriter.WriteLine(result);

            textWriter.Flush();
            textWriter.Close();
        }
    }
}
