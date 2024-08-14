import java.util.*;

public class Palak {
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);
        double total_bill = scanner.nextDouble();
        int single_bill = scanner.nextInt();
        int total_num = (int) (total_bill) /( single_bill);
        System.out.println(total_num);
    }
}
