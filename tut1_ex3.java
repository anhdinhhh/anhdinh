import java.util.Arrays;
import java.util.Scanner;

public class tut1_ex3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of the list: ");
        int num = sc.nextInt();

        int[] nums = new int[num];
        System.out.println("Enter the integers: ");

        for (int i=0; i<num; i++){
            nums[i] = sc.nextInt();
        }

        Arrays.sort(nums);

        System.out.println("The list in ascending order is: ");
        for (int i=0; i<num;i++){
            System.out.print(nums[i]+" ");
        }

    }
}
