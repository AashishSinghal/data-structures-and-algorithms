import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        float num1 = sc.nextFloat();//error was coming as i was using nextInt with float so searched on google and corrected it 
        int num2 = sc.nextInt();
        int num3 = (int) num1/num2;// another error of conversion from float to int without using (int) before num1/num2

        System.out.println(num3); 
    }
}
