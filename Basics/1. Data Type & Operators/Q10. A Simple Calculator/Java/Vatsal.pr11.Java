import java.util.*;
public class main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int add = num1+num2;
        int sub = num1-num2;
        int multiply = num1*num2;
        int division = num1/num2;
        System.out.printf("%s %s %s %s", add, multiply, sub, division);
        }
}