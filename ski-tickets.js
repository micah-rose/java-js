//file converting Ski Tickets Java assignment to JavaScript

let adultTix = prompt("Number of adult tickets: ");
let youthTix = prompt("Number of youth tickets: ");
let name = prompt("Name: ");

let adultCost = adultTix * 93;
let youthCost = youthTix * 47;
let total = adultCost + youthCost;

alert("Thank you" + name + ", here is your invoice!")

//insert code for html to display a table of the invoice

/* Java code:
import java.util.Scanner;

public class SkiTickets {
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
   
      System.out.print("Number of adult tickets: ");
      int atix = input.nextInt();
      System.out.print("Number of youth tickets: ");
      int ytix = input.nextInt();
      input.nextLine();
      System.out.print("Name: ");
      String name = input.nextLine();
      System.out.println();
      System.out.println();
      
      double acost = (atix * 93);
      double ycost = (ytix * 47);
      double total = acost + ycost;
      String currency = "$";
      
      System.out.printf("Invoice for %s:%n", name);
      System.out.println();
      System.out.printf("Adult tickets %-2d .. %4s %4.2f%n", atix, currency, acost);
      System.out.printf("Youth tickets %-2d .. %4s %4.2f%n", ytix, currency, ycost);
      System.out.println("-------------------------------");
      System.out.printf("%24s %.2f%n", currency, total);
      System.out.println("\t\t\t\t\t\t\t  ========");
   }
}*/
