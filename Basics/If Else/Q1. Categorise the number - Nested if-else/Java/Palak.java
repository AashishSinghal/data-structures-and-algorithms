//Nested If-else

import java.util.*;

public class Palak
{
  public static void main(String[] args)
  {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter number : ");
    int num = scanner.nextInt();
    if(num==0)
    {
      System.out.println("Invalid");
    }
    else if(num%2==0)
    {
      if(num>0)
      {
        System.out.println("Even-Positive");
      }
      else
      {
        System.out.println("Even-Negative");
      }
    }
    else
    {
      if(num>0)
      {
        System.out.println("Odd-Positive");
      }
      else
      {
        System.out.println("Odd-Negative");
      }
    }
  }
}