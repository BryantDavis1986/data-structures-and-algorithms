using System;

namespace RepeatedString
{
    public class Class1
    {
        static long repeatedString(string s, long n)
        {
            var count = 0L;
            foreach (var letter in s)
            {
                if (letter == 'a')
                    count++;
            }

            var possibleStringRepeatitions = n / s.Length;
            count *= possibleStringRepeatitions;
            var offsetStringLength = n % s.Length;

            for (int i = 0; i < offsetStringLength; i++)
            {
                if (s[i] == 'a')
                    count++;
            }
            return count;
        }
    }
}
