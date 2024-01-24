import java.util.Scanner;

public class tut1_ex4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of the list: ");
        int n = sc.nextInt();

        String[] name = new String[n];
        System.out.println("Enter the names: ");
        String s = sc.nextLine();

        for (int i = 0; i < n; i++) {
            name[i] = sc.nextLine();
        }
        System.out.println("Enter a name for searching: ");
        String search = sc.nextLine();

        int position = -1;
        for (int i = 0; i < n; i++) {
            if (name[i].equals(search)) {
                position = i;
                break;
            }
        }
        System.out.println("The position of this name in the list is: " + position);

    }
}