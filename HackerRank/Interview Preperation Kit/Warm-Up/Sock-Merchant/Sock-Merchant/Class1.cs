using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

namespace Sock_Merchant
{
    public class Class1
    {
        // Complete the sockMerchant function below.
        static int sockMerchant(int n, int[] ar)
        {
            HashSet<int> set = new HashSet<int>();
            int pairs = 0;
            for(var i = 0; i < ar.Length; i++)
            {
                if (set.Contains(ar[i]))
                {
                    pairs++;
                    set.Remove(ar[i]);
                }
                else if (!set.Contains(ar[i]))
                {
                    set.Add(ar[i]);
                }
            }
            return pairs;
        }

        static void Main(string[] args)
        {
            TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

            int n = Convert.ToInt32(Console.ReadLine());

            int[] ar = Array.ConvertAll(Console.ReadLine().Split(' '), arTemp => Convert.ToInt32(arTemp))
            ;
            int result = sockMerchant(n, ar);

            textWriter.WriteLine(result);

            textWriter.Flush();
            textWriter.Close();
        }
    }
}
