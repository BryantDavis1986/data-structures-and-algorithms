using System;

namespace JumpingOnTheClouds
{
    public class Class1
    {
        static int jumpingOnClouds(int[] c)
        {
            int jumps = 0;
            int i = 0;
            while (i < c.Length - 1)
            {
                if (c.Length > i + 2 && c[i + 2] != 1)
                {
                    jumps++;
                    i = i + 2;
                }
                else if (c[i + 1] != 1)
                {
                    jumps++;
                    i++;
                }

            }
            return jumps;
        }
    }
}
