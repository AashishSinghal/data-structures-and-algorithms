import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        if(num1==1){
            System.out.println("January");
        }else if(num1==2){
            System.out.println("February");
        }
        else if(num1==3){
            System.out.println("March");
        }
        else if(num1==4){
            System.out.println("April");
        }
        else if(num1==5){
            System.out.println("May");
        }
        else if(num1==6){
            System.out.println("June");
        }
        else if(num1==7){
            System.out.println("July");
        }
        else if(num1==8){
            System.out.println("August");
        }
        else if(num1==9){
            System.out.println("September");
        }
        else if(num1==10){
            System.out.println("October");
        }
        else if(num1==11){
            System.out.println("November");
        }
        else if(num1==12){
            System.out.println("December");
        }
        else{
            System.out.println("wrong month number");  
        }
    }
}