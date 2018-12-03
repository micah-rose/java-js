//file converting Dice Java assignment to JavaScript
//Status: IN PROGRESS

// JavaScript code:

   var num = 36000;
   var diceArray = new Array(13); 
   var die1;
   var die2;
   var total;
   var rand = Math.floor((Math.random()*6) + 1);

   for(i = 1; i <=num; i++){
      die1 = rand; 
      die2 = rand;
      total = die1+die2;
      ++diceArray[total];
   }
             
   console.log("%s %s %s", "Sum", "Frequency", "Percentage");
         
   for (i = 2; i < diceArray.length; i++){
      console.log("%i %i %f", i, diceArray[i], 
         (diceArray[i]/num)*100);        
   } 

/* Java code:
import java.util.Random;
public class Dice{
   public static final int N = 36000;
   public static void main( String[] args){
   
      Random rand = new Random(); 
      int[] diceArray = new int[ 13 ]; 
      int die1;
      int die2;
      int total;
      for(int i = 1; i <=N; i++ ){
         die1 = rand.nextInt(6)+1;
         die2 = rand.nextInt(6)+1;
         total = die1+die2;
         ++diceArray[total];
      }
             
      System.out.printf("%s%10s%12s\n", "Sum", "Frequency", "Percentage");
         
      for (int i = 2; i < diceArray.length; i++ )
      System.out.printf("%2d%10d%12.1f%%\n", i, diceArray[i], 
         ((double)diceArray[i]/N)*100);        
   } 
}
*/
