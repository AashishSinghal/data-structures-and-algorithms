import java.util.*;
public class Problem2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Input : ");
    int num = sc.nextInt();
    if (num<0 & num%2==0){
      System.out.println("Even-Negative ");
    } else if (num>0 & num%2==0){
      System.out.println("Even-Positive ");
    } else if (num<0 & num%2!=0){
      System.out.println("Odd-Negative ");
    } else{
      System.out.println("Odd-Positive ");
    }

      
  }
}

