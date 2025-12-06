// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Scanner;
class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int no=sc.nextInt();
        System.out.println("Enter No");
        boolean result=true;
        if(no<=1)
        {
            result=false;
        }
        for(int i=2;i<=no/2;i++)
            {
                if(no%i==0)
                {
                    result=false;
                }
            }
            if(result)
            {
               System.out.println("Prime"); 
            }
            else
            {
              System.out.println(" Not Prime");
            }
        
    }
}