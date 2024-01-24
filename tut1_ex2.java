import java.util.Arrays;
import java.util.Scanner;

public class tut1_ex2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of the list: ");
        int num = sc.nextInt();

        int[] nums = new int[num];
        System.out.println("Enter the integers: ");

    //  Enter each element of the array
        for (int i=0; i<num; i++){
            nums[0] = sc.nextInt();
        }
        int max = nums[0];
        for (int i=1; i<num; i++){
            if(nums[i]>max)
                max = nums[i];

        }
        System.out.println("The maximun integer of the list is: "+max);
    }
}
