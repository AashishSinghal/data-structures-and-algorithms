import java.util.*;

public class Palak
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int temp = b;
        int count = 0;

        //calculate number of digits in b
        while(temp>0)
        {
            count++;
            temp /= 10;
        }

        //check if b = 0;
        if(count==0)
        {
            count=1;
        }

        int mul = 1;
        for(int i=0;i<count;i++)
        {
            mul *= 10;
        }
        int c = a*mul + b;
        System.out.println(c);
    }
}