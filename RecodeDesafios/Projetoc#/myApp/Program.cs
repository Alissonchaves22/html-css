using System;


namespace myApp
{
    class Program
    {
        static void Main(string[] args)
        {
          int[] array1 = new int[5] { 1, 3, 7, 12, 8 };
          int count = 0;
          foreach (int element in array1)
          {
            Console.WriteLine($"Elemento: #{count}: {element}");
            count++;
          }
          Console.WriteLine($"Número de elementos: {count}");
        }
    }

        
}
    

