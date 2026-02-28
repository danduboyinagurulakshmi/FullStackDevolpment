1.Chef team

Our Chef is hosting a cooking competition in which only two teams can compete at the same time. Both sides should have an equal number of participants to make the competition engaging and fair. Chef was given the duty of forming the two teams as an organizer.

There are various conditions for forming teams. He will be assigned a number ‘N’ for each competition, and for each divisor ‘D’ of ‘N’ (including 1 and ‘N’ itself), he will add a member:



If ‘D’ is even, go to the first team.

if ‘D’ is odd, go to the second team.

Chef needs your assistance with the event planning because he is quite busy. Your job is to advise the chef whether or not he can make two teams with the same amount of members.

For Example:

For ‘N’ = 10,

The divisors are:

1, 2, 5, 10.

The first team will have two members corresponding to even divisors 2 and 10.

The second team will have two members corresponding to odd divisors 1 and 5.

So, in this case, Chef can make two teams.



Input Format

First line will contain 

T

T, number of testcases. Then the testcases follow.

The first and only line of each test case contains an integer ‘N’ denoting the number given to Chef.

Output Format

For each test case print 1 if Chef can make two teams of equal members with the given ‘N’, else print 0.



Output for each test case will be printed in a separate line.



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

5

1≤N≤10 

5

&nbsp;

It is guaranteed that the sum of N over all test cases doesn’t exceed 10^5.



Time Limit: 1 sec



**import java.util.\*;**

**public class Main{**

    **public static void main(String\[] args){**

        **Scanner sc=new Scanner(System.in);{**

            **int T=sc.nextInt();**

            **{**

                **for(int h=0;h<T;h++){**

                    **int N=sc.nextInt();**

                    **int even=0;**

                    **int odd=0;**

                    **for(int g=1;g<=N;g++){**

                        **if(N%g==0){**

                            **if(g%2==0){**

                                **even++;**

                            **}**

                            **else{**

                                **odd++;**

                            **}**

                        **}**

                    **}**

                    **if(even==odd){**

                        **System.out.println(1);**

                    **}**

                    **else{**

                        **System.out.println(0);**

                    **}**

                **}**

            **}**

            

        **}**

    **}**

**}**



2\. Solve The Case 

Given a sorted array 

a

r

r

arr, remove the duplicates from 

a

r

r

arr such that each element appears only once and display the new array.



Input:

The first line contains 

T

T, the number of test cases. Then the 

T

T test cases follow.

Each test case contains 

2

2 lines of input:

The first line contains 

n

n, the size of array 

a

r

r

arr.

The second line contains 

n

n space separated elements of array 

a

r

r

arr.

Output:

For each test case, output in a single line, the new array. The elements of the array should be separated by space. Your output format should match with that given in the sample output.



Constraints

1

≤

T

≤

1000

1≤T≤1000

1

≤

n

≤

10

4

1≤n≤10 

4

&nbsp;

−

10

5

≤

a

r

r

\[

i

]

≤

10

5

−10 

5

&nbsp;≤arr\[i]≤10 

5



**import java.util.\*;**

**public class Main**

**{**

	**public static void main(String\[] args) {**

	    **Scanner sc=new Scanner(System.in);**

	    **int T=sc.nextInt();**

	    **for(int h=0;h<T;h++){**

	        **int n=sc.nextInt();**

	        **int \[]arr=new int\[n];**

	        **for(int i=0;i<n;i++){**

	            **arr\[i]=sc.nextInt();**

	        **}**

	            **if(n>0){**

	                **System.out.print(arr\[0]);**

	                

	       

	            **for(int g=1;g<n;g++){**

	                **if(arr\[g]!=arr\[g-1]){**

	                    **System.out.println(" "+arr\[g]);**

	                **}**

	               

	            

	        **}**

	        

	            **}**

	             **System.out.println();**

	        

	        

	    **}**

		

	**}**

**}**



3\. Multiply the Array 

Churchill was a kindhearted man, and he wanted to give a cakewalk problem to the coders present, to warm them up.



&nbsp;Given an array of N integers, print the product of the numbers present in the array.



Use appropriate variable types to avoid overflow errors



Input

The first line contains T, the number of test cases.



Each test cases consists of two lines, the first line containing N, the number of elements, and the second line containing N integers.



Output

&nbsp;For each test case, print the required answer in a single line.



Constraints

1 <= T <= 100

1 <= N <= 10

0 <= A\[i] <= 15



**import java.util.\*;**

**public class Main**

**{**

	**public static void main(String\[] args) {**

	    **Scanner sc=new Scanner(System.in);**

	    **int T=sc.nextInt();**

	    **for(int h=0;h<T;h++){**

	        **int N=sc.nextInt();**

	        **long multiple=1;**

	        **for(int j=0;j<N;j++){**

	            **int c=sc.nextInt();**

	            **multiple=multiple\*c;**

	        **}**

	        **System.out.println(multiple);**

	    **}**

	    

	    

	**}**

**}**



4.Compartment Weights 

Good’s Train is a train which carry weights like grains, vegetables, and many other things in it.



You are given a task to add weights in each compartment of this good’s train. Initially train compartments may or may not be empty, and you will be given 

q

q task, in each task you will be provided with 3 data stated as below.



start number of compartment

end number of compartment

The weights, that needs to be onboarded in each compartment in the given range.

After you have completed all your 

q

q tasks, you will need to give the total weights that is currently in this Good’s Train.



Input:

The first line of the input contains a single integer 

T

T. 

T

T denoting the number of test cases. The description of 

T

T test cases is as follows.

The next line of the input contains a single integer 

N

N. 

N

N denotes the total number of compartments in Good’s Train(numbered from 

1

1 to 

N

N).

The next line of the input contains 

N

N space-separated integers 

A

1

,

A

2

,

A

3...

A

n

A1,A2,A3...An where 

i

t

h

ith number denotes the initial weight of Good’s that 

i

t

h

ith compartment have.

The next line of the input contains a single integer 

q

q. 

q

q denotes the total number of tasks given to you.

Next 

q

q lines contains, 3 space-separated integers 

S

,

E

,

W

S,E,W denoting the start, end number of compartments(both inclusive) and 

W

W denotes the weight to be onboarded in each compartment.

Output:

After completing all your 

q

q tasks, print the total weights that is currently in this Good’s Train.

Constraints:

1

≤

T

≤

10

2

1≤T≤10 

2

&nbsp;

1

≤

N

≤

10

5

1≤N≤10 

5

&nbsp;

1

≤

A

1

,

A

2

,

A

3...

A

n

≤

10

7

1≤A1,A2,A3...An≤10 

7

&nbsp;

1

≤

Q

≤

10

6

1≤Q≤10 

6

&nbsp;

1

≤

S

,

E

≤

N

1≤S,E≤N

1

≤

X

≤

10

7

1≤X≤10 

7

**import java.io.BufferedReader;**

**import java.io.InputStreamReader;**

**import java.util.StringTokenizer;**

**import java.io.IOException;**



**public class Main {**

    

    **static class FastReader {**

        **BufferedReader br;**

        **StringTokenizer st;**



        **public FastReader() {**

            **br = new BufferedReader(new InputStreamReader(System.in));**

        **}**



        **String next() {**

            **while (st == null || !st.hasMoreElements()) {**

                **try {**

                    **String line = br.readLine();**

                    **if (line == null) return null;**

                    **st = new StringTokenizer(line);**

                **} catch (IOException e) {**

                    **return null;**

                **}**

            **}**

            **return st.nextToken();**

        **}**



        **int nextInt() { return Integer.parseInt(next()); }**

        **long nextLong() { return Long.parseLong(next()); }**

    **}**



    **public static void main(String\[] args) {**

        **FastReader fr = new FastReader();**

        

        **String tInput = fr.next();**

        **if (tInput == null) return;**

        

        **int T = Integer.parseInt(tInput);**

        

        **while (T-- > 0) {**

            **int N = fr.nextInt();**

            

            **long totalWeight = 0;**

    

            **for (int i = 0; i < N; i++) {**

                **totalWeight += fr.nextLong();**

            **}**

            

            **int Q = fr.nextInt();**

            

    

            **for (int i = 0; i < Q; i++) {**

                **long S = fr.nextLong();**

                **long E = fr.nextLong();**

                **long W = fr.nextLong();**

                

               

                **totalWeight += (E - S + 1) \* W;**

            **}**

            



            **System.out.println(totalWeight);**

        **}**

    **}**

**}**



5.Birthday of Anabelle 

**import java.io.BufferedReader;**

**import java.io.InputStreamReader;**

**import java.util.StringTokenizer;**

**import java.util.HashSet;**

**import java.io.IOException;**



**public class Main {**

    **static class FastReader {**

        **BufferedReader br;**

        **StringTokenizer st;**



        **public FastReader() {**

            **br = new BufferedReader(new InputStreamReader(System.in));**

        **}**



        **String next() {**

            **while (st == null || !st.hasMoreElements()) {**

                **try {**

                    **String line = br.readLine();**

                    **if (line == null) return null;**

                    **st = new StringTokenizer(line);**

                **} catch (IOException e) {**

                    **return null;**

                **}**

            **}**

            **return st.nextToken();**

        **}**



        **int nextInt() { return Integer.parseInt(next()); }**

    **}**



    **public static void main(String\[] args) {**

        **FastReader fr = new FastReader();**

        **String tInput = fr.next();**

        **if (tInput == null) return;**

        

        **int T = Integer.parseInt(tInput);**

        **int target = 2000;** 



        **while (T-- > 0) {**

            **int N = fr.nextInt();**

            **int\[] prices = new int\[N];**

            **for (int i = 0; i < N; i++) {**

                **prices\[i] = fr.nextInt();**

            **}**



            **if (canAcceptGifts(prices, target)) {**

                **System.out.println("Accepted");**

            **} else {**

                **System.out.println("Rejected");**

            **}**

        **}**

    **}**



    **public static boolean canAcceptGifts(int\[] prices, int target) {**

        **HashSet<Integer> seen = new HashSet<>();**

        

        **for (int price : prices) {**

            **int complement = target - price;**

            

            

            **if (seen.contains(complement)) {**

                **return true;**

            **}**

            

            **seen.add(price);**

        **}**

        **return false;**

    **}**

**}**

