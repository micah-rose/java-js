//file converting Ski Tickets Java assignment to JavaScript
//Status: IN PROGRESS
//write code for html to display the invoice

var adultTix = prompt("Number of adult tickets: ");
var youthTix = prompt("Number of youth tickets: ");
var name = prompt("Name: ");
var adultPrice = 93;
var youthPrice = 47;

var adultCost = adultTix * adultPrice;
var youthCost = youthTix * youthPrice;
var total = adultCost + youthCost;

alert("Thank you " + name + ", you purchased " + adultTix + " adult tickets and " + youthTix + " youth tickets. Your total is $" + total + " . Have a nice day!!");


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
