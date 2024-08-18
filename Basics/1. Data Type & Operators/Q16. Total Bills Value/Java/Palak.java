import java.util.*;

public class Palak {
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);
        int single_bill = scanner.nextInt();
        int num_bill = scanner.nextInt();
        int total_value = single_bill * num_bill;
        System.out.println(total_value);
    }
}
