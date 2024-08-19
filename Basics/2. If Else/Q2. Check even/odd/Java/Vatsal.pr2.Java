import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = num1%2;
        if(num2!=0){
            System.out.println("1");
        }else{
            System.out.println("0");
        }
    }
}