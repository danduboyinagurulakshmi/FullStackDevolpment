1. Write a program which prints 1000 "Hello World".



Input

There is no input for this problem.



Output

The output consists of 1000 lines. Print "Hello World" in each line.



**public class Main{**

    **public static void main(String\[] args) {**

        **for(int g=0;g<1000;g++){**

        **System.out.println("Hello World");**

        **}**

    **}**

**}**



2\. Write a program which prints small/large/equal relation of given two integers a and b.



Input

Two integers a and b separated by a single space are given in a line.



Output

For given two integers a and b, print



a < b

if a is less than b,



a > b

if a is greater than b, and



a == b

if a equals to b.



Constraints

-1000 ≤ a, b ≤ 1000



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**



 

        **if (sc.hasNextInt()) {**

            **int a = sc.nextInt();**

            **int b = sc.nextInt();**



     

            **if (a < b) {**

                **System.out.println("a < b");**

            **} else if (a > b) {**

                **System.out.println("a > b");**

            **} else {**

                **System.out.println("a == b");**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



3\. Divide the apples - 2 

n schoolchildren divide 

k

k apples evenly, the residue remains in the basket. How many apples remain in the basket?



Input

Two positive integers 

n

n and 

k

k not greater than 

1500

1500 — rarely are there more pupils in school, and where to find such a basket?



Output

Print the number of apples in the basket.



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

   

        **if (sc.hasNextInt()) {**

            **int n = sc.nextInt();**

            **int k = sc.nextInt();**

            

           

            **int remainder = k % n;**

            

          

            **System.out.println(remainder);**

        **}**

        

        **sc.close();**

    **}**

**}**



4\. Fever 

Chef is not feeling well today. He measured his body temperature using a thermometer and it came out to be 

X

X °F.



A person is said to have fever if his body temperature is strictly greater than 

98

98 °F.



Determine if Chef has fever or not.



Input Format

The first line contains a single integer 

T

T — the number of test cases. Then the test cases follow.

The first and only line of each test case contains one integer 

X

X - the body temperature of Chef in °F.

Output Format

For each test case, output YES if Chef has fever. Otherwise, output NO.



You may print each character of YES and NO in uppercase or lowercase (for example, yes, yEs, Yes will be considered identical).



Constraints

1

≤

T

≤

10

1≤T≤10

94

≤

X

≤

103

94≤X≤103



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**



     

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**



         

            **for (int i = 0; i < T; i++) {**

                **int X = sc.nextInt();**



               

                **if (X > 98) {**

                    **System.out.println("YES");**

                **} else {**

                    **System.out.println("NO");**

                **}**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



5\. Lunchtime 

Chef has his lunch only between 

1

1 pm and 

4

4 pm (both inclusive).



Given that the current time is 

X

X pm, find out whether it is lunchtime for Chef.



Input Format

The first line of input will contain a single integer 

T

T, the number of test cases. Then the test cases follow.

Each test case contains a single line of input, containing one integer 

X

X.

Output Format

For each test case, print in a single line 

YES

YES if it is lunchtime for Chef. Otherwise, print 

NO

NO.



You may print each character of the string in either uppercase or lowercase (for example, the strings 

YeS

YeS, 

yEs

yEs, 

yes

yes and 

YES

YES will all be treated as identical).



Constraints

1

≤

T

≤

12

1≤T≤12

1

≤

X

≤

12

1≤X≤12

**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**

            

            **for (int i = 0; i < T; i++) {**

                **int X = sc.nextInt();**

                

               

                **if (X >= 1 \&\& X <= 4) {**

                    **System.out.println("YES");**

                **} else {**

                    **System.out.println("NO");**

                **}**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



6 .Is it hot or cold 

Chef considers the climate HOT if the temperature is above 

20

20, otherwise he considers it COLD. You are given the temperature 

C

C, find whether the climate is HOT or COLD.



Input Format

The first line of input will contain a single integer 

T

T, denoting the number of test cases.

The first and only line of each test case contains a single integer, the temperature 

C

C.

Output Format

For each test case, print on a new line whether the climate is HOT or COLD.



You may print each character of the string in either uppercase or lowercase (for example, the strings hOt, hot, Hot, and HOT will all be treated as identical).



Constraints

1

≤

T

≤

50

1≤T≤50

0

≤

C

≤

40

0≤C≤40



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**



     

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**



            **while (T-- > 0) {** 

                **int C = sc.nextInt();**



              

                **String HOTCOLD = (C > 20) ? "HOT" : "COLD";**

                

                **System.out.println(HOTCOLD);**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



7\. Discount 

Alice buys a toy with a selling price of 

100

100 rupees. There is a discount of 

x

x percent on the toy. Find the amount Alice needs to pay for it.



Input Format

The first line of input will contain a single integer 

T

T, denoting the number of test cases.

The first and only line of each test case contains a single integer, 

x

x — the discount on the toy.

Output Format

For each test case, output on a new line the price that Alice needs to pay.



Constraints

1

≤

T

≤

100

1≤T≤100

0

≤

x

<

100

0≤x<100



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**

            

            **while (T-- > 0) {**

                **int x = sc.nextInt();**

                

               

                **int total = 100 - x;**

                

                **System.out.println(total);**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



8.TV Discount 

Chef is looking to buy a TV and has shortlisted two models. The first one costs 

A

A rupees, while the second one costs 

B

B rupees.



Since there is a huge sale coming up on Chefzon, Chef can get a flat discount of 

C

C rupees on the first TV, and a flat discount of 

D

D rupees on the second one.



Help Chef determine which of the two TVs would be cheaper to buy during the sale.



Input Format

The first line contains a single integer 

T

T — the number of test cases. Then the test cases follow.

The first and only line of each test case contains four space-separated integers 

A

A, 

B

B, 

C

C and 

D

D — the marked price (in rupees) of the first TV, the marked price (in rupees) of the second TV, the flat discount (in rupees) of the first TV, and the flat discount (in rupees) of the second TV.

Output Format

For each test case, print a single line containing the string First if the first TV is cheaper to buy with discount, or Second if the second TV is cheaper to buy with discount. If both of them cost the same after discount, print Any.



You may print each character of the string in uppercase or lowercase (for example, the strings first, First, fIRSt, and FIRST will all be treated as identical).



Constraints

1

≤

T

≤

5000

1≤T≤5000

1

≤

A

,

B

≤

100

1≤A,B≤100

0

≤

C

≤

A

0≤C≤A

0

≤

D

≤

B

0≤D≤B



**import java.util.Scanner;** 



**public class Main {** 

    **public static void main(String\[] args) {** 

        **Scanner sc = new Scanner(System.in);**



        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**

            **while (T-- > 0) {**

                

                **int M = sc.nextInt();**

                **int N= sc.nextInt();**

                **int O = sc.nextInt();**

                **int P = sc.nextInt();**



                **int price1 = M- N;**

                **int price2 = O - P;**



                **if (price1 < price2) {**

                    **System.out.println("First");**

                **} else if (price1 > price2) {**

                    **System.out.println("Second");**

                **} else {**

                    **System.out.println("Any");**

                **}**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



9\. Battery Low

Chef’s phone shows a Battery Low notification if the battery level is 

15

%

15% or less.



Given that the battery level of Chef’s phone is 

X

%

X%, determine whether it would show a Battery low notification.



Input Format

First line will contain 

T

T, number of test cases. Then the test cases follow.

Each test case contains a single line of input, an integer 

X

X, denoting the battery level of the phone.

Output Format

For each test case, output in a single line 

Yes

Yes, if the battery level is 

15

%

15% or below. Otherwise, print 

No

No.



You may print each character of 

Yes

Yes and 

No

No in uppercase or lowercase (for example, 

YeS

YeS, 

YES

YES, 

yes

yes will be considered identical).



Constraints

1

≤

T

≤

100

1≤T≤100

1

≤

X

≤

100

1≤X≤100



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

       

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**

            

           

            **while (T-- > 0) {**

                **int X = sc.nextInt();**

                

              

                **if (X <= 15) {**

                    **System.out.println("Yes");**

                **} else {**

                    **System.out.println("No");**

                **}**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



10\. Chef and Candies 

There are 

N

N children and Chef wants to give them 

1

1 candy each. Chef already has 

X

X candies with him. To buy the rest, he visits a candy shop. In the shop, packets containing exactly 

4

4 candies are available.



Determine the minimum number of candy packets Chef must buy so that he is able to give 

1

1 candy to each of the 

N

N children.



Input Format

The first line of input will contain a single integer 

T

T, denoting the number of test cases.

The first and only line of each test case contains two integers 

N

N and 

X

X — the number of children and the number of candies Chef already has.

Output Format

For each test case, output the minimum number of candy packets Chef must buy so that he is able to give 

1

1 candy to each of the 

N

N children.



Constraints

1

≤

T

≤

1000

1≤T≤1000

1

≤

N

,

X

≤

100

1≤N,X≤100



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**

            **while (T-- > 0) {**

                **int N = sc.nextInt();**

                **int X = sc.nextInt();**



                **if (X >= N) {**

                    **System.out.println(0);**

                **} else {**

                    **int deficit = N - X;**

                   

                    **int pac = (deficit + 3) / 4;**

                    **System.out.println(pac);**

                **}**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



11.Minimum Pizzas 

Each pizza consists of 

4

4 slices. There are 

N

N friends and each friend needs exactly 

X

X slices.



Find the minimum number of pizzas they should order to satisfy their appetite.



Input Format

The first line of input will contain a single integer 

T

T, denoting the number of test cases.

Each test case consists of two integers 

N

N and 

X

X, the number of friends and the number of slices each friend wants respectively.

Output Format

For each test case, output the minimum number of pizzas required.



Constraints

1

≤

T

≤

100

1≤T≤100

1

≤

N

,

X

≤

10

1≤N,X≤10



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**

            

            **while (T-- > 0) {**

                **int N = sc.nextInt();**

                **int X = sc.nextInt();**

                

               

                **int totalSlices = N \* X;**

                

             

                **int mPizza = (totalSlices + 3) / 4;**

                

                **System.out.println(mPizza);**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



12.Sugarcane Juice Business 

While Alice was drinking sugarcane juice, she started wondering about the following facts:



The juicer sells each glass of sugarcane juice for 

50

50 coins.

He spends 

20

%

20% of his total income on buying sugarcane.

He spends 

20

%

20% of his total income on buying salt and mint leaves.

He spends 

30

%

30% of his total income on shop rent.

Alice wonders, what is the juicer’s profit (in coins) when he sells 

N

N glasses of sugarcane juice?



Input Format

The first line of input will contain an integer 

T

T — the number of test cases. The description of 

T

T test cases follows.

The first and only line of each test case contains an integer 

N

N, as described in the problem statement.

Output Format

For each test case, output on a new line the juicer’s profit when he sells 

N

N glasses of juice.



Constraints

1

≤

T

≤

1000

1≤T≤1000

1

≤

N

≤

10

6

1≤N≤10 

6



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

        **if (sc.hasNextInt()) {**

            **int T = sc.nextInt();**

            

            **while (T-- > 0) {**

             

                **int N = sc.nextInt();**

                

            

                **long gain = (long) N \* 15;**

                

                **System.out.println(gain);**

            **}**

        **}**

        **sc.close();**

    **}**

**}**



13.Watching Movies at 2x 

Chef started watching a movie that runs for a total of 

X

X minutes.



Chef has decided to watch the first 

Y

Y minutes of the movie at twice the usual speed as he was warned by his friends that the movie gets interesting only after the first 

Y

Y minutes.



How long will Chef spend watching the movie in total?



Note: It is guaranteed that 

Y

Y is even.



Input Format

The first line contains two space separated integers 

X

,

Y

X,Y - as per the problem statement.

Output Format

Print in a single line, an integer denoting the total number of minutes that Chef spends in watching the movie.

Constraints

1

≤

X

,

Y

≤

1000

1≤X,Y≤1000

Y

Y is an even integer.

Subtasks

Subtask #1 (100 points): original constraints

**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

        **if (sc.hasNextInt()) {**

            **int X = sc.nextInt();**

            **int Y =sc.nextInt();**

            **int fasstimee=Y/2;**

            **int remaininng=X-Y;**

                

                **System.out.println(fasstimee+remaininng);**

            

        **}**

        **sc.close();**

    **}**

**}**





