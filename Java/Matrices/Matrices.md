1.Trace of Matrix 

Read problems statements in Mandarin chinese and Vietnamese as well.

Chef is learning linear algebra. Recently, he learnt that for a square matrix 

M

M, 

trace

(

M

)

trace(M) is defined as the sum of all elements on the main diagonal of 

M

M (an element lies on the main diagonal if its row index and column index are equal).



Now, Chef wants to solve some excercises related to this new quantity, so he wrote down a square matrix 

A

A with size 

N

×

N

N×N. A square submatrix of 

A

A with size 

l

×

l

l×l is a contiguous block of 

l

×

l

l×l elements of 

A

A. Formally, if 

B

B is a submatrix of 

A

A with size 

l

×

l

l×l, then there must be integers 

r

r and 

c

c (

1

≤

r

,

c

≤

N

\+

1

−

l

1≤r,c≤N+1−l) such that 

B

i

,

j

=

A

r

\+

i

−

1

,

c

\+

j

−

1

B 

i,j

​

&nbsp;=A 

r+i−1,c+j−1

​

&nbsp; for each 

1

≤

i

,

j

≤

l

1≤i,j≤l.



Help Chef find the maximum trace of a square submatrix of 

A

A.



Input

The first line of the input contains a single integer 

T

T denoting the number of test cases. The description of 

T

T test cases follows.

The first line of each test case contains a single integer 

N

N.

N

N lines follow. For each 

i

i (

1

≤

i

≤

N

1≤i≤N), the 

i

i-th of these lines contains 

N

N space-separated integers 

A

i

,

1

,

A

i

,

2

,

…

,

A

i

,

N

A 

i,1

​

&nbsp;,A 

i,2

​

&nbsp;,…,A 

i,N

​

&nbsp; denoting the 

i

i-th row of the matrix 

A

A.

Output

For each test case, print a single line containing one integer — the maximum possible trace.



Constraints

1

≤

T

≤

100

1≤T≤100

2

≤

N

≤

100

2≤N≤100

1

≤

A

i

,

j

≤

100

1≤A 

i,j

​

&nbsp;≤100 for each valid 

i

,

j

i,j



**import java.util.Scanner;**



**public class Main {**

    **public static void main(String\[] args) {**

        **Scanner sc = new Scanner(System.in);**

        

        **if (!sc.hasNextInt()) return;**

        **int T = sc.nextInt();**

        

        **while (T-- > 0) {**

            **int N = sc.nextInt();**

            **int\[]\[] A = new int\[N]\[N];**

            

            **for (int i = 0; i < N; i++) {**

                **for (int j = 0; j < N; j++) {**

                    **A\[i]\[j] = sc.nextInt();**

                **}**

            **}**

            

            **long maxTrace = 0;**

            **for (int k = -(N - 1); k <= (N - 1); k++) {**

                **long currentDiagonalSum = 0;**

                

                **for (int i = 0; i < N; i++) {**

                    **int j = i + k;**

                    **if (j >= 0 \&\& j < N) {**

                        **currentDiagonalSum += A\[i]\[j];**

                    **}**

                **}**

                **if (currentDiagonalSum > maxTrace) {**

                    **maxTrace = currentDiagonalSum;**

                **}**

            **}**

            

            **System.out.println(maxTrace);**

        **}**

        **sc.close();**

    **}**

**}**

