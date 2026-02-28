## **ARRAYS**

## **1Q.Assignment: Array-Based Problems**

## **\*\*Assignment: Array-Based Problems\*\***

\### \*\*Question 1: Frequency of Each Number\*\*

\*\*Problem Statement:\*\*

Given an array \*\*A\*\* of size \*\*N\*\* containing numbers from \*\*1 to N\*\*, find the frequency of each

number in the array.

\*\*Input Format:\*\*  - First line contains an integer \*\*N\*\* (1 <= N <= 10^6), the size of the array.- Second line contains \*\*N\*\* integers \*\*a\[i]\*\* (1 <= a\[i] <= N).

\*\*Output Format:\*\*  - Print the frequency of each number from \*\*1 to N\*\*.

\*\*Example:\*\*

\*\*Input:\*\*

5

1 3 2 1 4

\*\*Output:\*\*

1: 2

2: 1

3: 1

4: 1

5: 0  --

\### \*\*Question 2: Count Distinct Numbers\*\*

\*\*Problem Statement:\*\*

Given an array \*\*A\*\* of size \*\*N\*\*, find how many distinct numbers are present in the array.

\*\*Input Format:\*\*  - First line contains an integer \*\*N\*\* (1 <= N <= 10^6), the size of the array.- Second line contains \*\*N\*\* integers \*\*A\[i]\*\* (1 <= A\[i] <= 10^6).

\*\*Output Format:\*\*  - Print a single integer representing the number of distinct elements in the array.

\*\*Example:\*\*

\*\*Input:\*\*

5

1 2 1 3 1

\*\*Output:\*\*

3  --

\### \*\*Question 3: Find Maximum Element\*\*

\*\*Problem Statement:\*\*

Find the maximum element in a given array of integers.

\*\*Input Format:\*\*  - First line contains an integer \*\*N\*\* (1 <= N <= 100), the size of the array.- Second line contains \*\*N\*\* integers \*\*ar\[i]\*\* (-10^9 <= ar\[i] <= 10^9).

\*\*Output Format:\*\*  - Print the maximum element of the given array.

\*\*Example:\*\*

\*\*Input:\*\*

5  -2 -19 8 15 4

\*\*Output:\*\*

15  --

\### \*\*Question 4: Sum of Odd Elements\*\*

\*\*Problem Statement:\*\*

Print the sum of all odd elements in an array.

\*\*Input Format:\*\*  - First line contains an integer \*\*N\*\* (1 <= N <= 100), the size of the array.- Second line contains \*\*N\*\* integers \*\*ar\[i]\*\* (-10^9 <= ar\[i] <= 10^9).

\*\*Output Format:\*\*  - Print the sum of all odd elements in the array.

\*\*Example:\*\*

\*\*Input:\*\*

5

6 9 8 4 3

\*\*Output:\*\*

12  --

\### \*\*Question 5: Find Duplicate Element\*\*

\*\*Problem Statement:\*\*

Find a duplicate element in the given array of integers. There will be only a single duplicate element

in the array.

\*\*Note:\*\* Do not use any inbuilt functions/libraries for your main logic.

\*\*Input Format:\*\*  - First line contains an integer \*\*N\*\* (2 <= N <= 100), the size of the array.- Second line contains \*\*N\*\* integers \*\*ar\[i]\*\* (0 <= ar\[i] <= 10^9).

\*\*Output Format:\*\*  - Print the duplicate element from the given array.

\*\*Example:\*\*

\*\*Input:\*\*

6

5 4 10 9 21 10

\*\*Output:\*\*

10  --

\*\*Instructions:\*\*

1\. Solve each problem using arrays in a programming language of your choice.

2\. Ensure that the programs correctly handle edge cases.

3\. Submit your solution along with test cases verifying different inputs.

4\. Maintain proper code indentation and readability.







#### **ANSWERS:**

1\)



import java.util.Scanner;

public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

        if (!sc.hasNextInt()) return;

 

        int N = sc.nextInt();

        int\[] freq = new int\[N + 1];

 

        for (int i = 0; i < N; i++) {

            if (sc.hasNextInt()) {

                int val = sc.nextInt();

                if (val >= 1 \&\& val <= N) {

                    freq\[val]++;

                }

            }

        }

 

        for (int i = 1; i <= N; i++) {

            System.out.println(i + ": " + freq\[i]);

        }

    }

}



2\)

import java.util.Scanner;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

        if (!sc.hasNextInt()) return;



        int N = sc.nextInt();

        // We use a boolean array as a "checklist"

        boolean\[] seen = new boolean\[1000001];

        int distinctCount = 0;

 

        for (int i = 0; i < N; i++) {

            if (sc.hasNextInt()) {

                int val = sc.nextInt();

                if (!seen\[val]) {

                    seen\[val] = true;

                    distinctCount++;

                }

            }

        }

        System.out.println(distinctCount);

    }

}





3\)

import java.util.Scanner;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

 

        if (!sc.hasNextInt()) return;

        int N = sc.nextInt();

        long max = Long.MIN\_VALUE;

 

        for (int i = 0; i < N; i++) {

            if (sc.hasNextLong()) {

                long current = sc.nextLong();

                if (current > max) {

                    max = current;

                }

            }

        }

 

        System.out.println(max);

    }

}



4\)

import java.util.Scanner;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

 

        if (!sc.hasNextInt()) return;

        int N = sc.nextInt();

        long sum = 0;

 

        for (int i = 0; i < N; i++) {

            if (sc.hasNextLong()) {

                long val = sc.nextLong();

                if (val % 2 != 0) {

                    sum += val;

                }

            }

        }

 

        System.out.println(sum);

    }

}



5\)

import java.util.Scanner;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

        if (!sc.hasNextInt()) return;

        int N = sc.nextInt();

        long\[] ar = new long\[N];

        for (int i = 0; i < N; i++) {

            if (sc.hasNextLong()) {

                ar\[i] = sc.nextLong();

            }

        }

        for (int i = 0; i < N; i++) {

 

            for (int j = i + 1; j < N; j++) {

                if (ar\[i] == ar\[j]) {

 

                    System.out.println(ar\[i]);

                    return;

                }

            }

        }

    }

}









## **OOPS**

## 

## **OOPs Concepts Assignment**

\### Problem 1: Class and Object

Problem Statement:

Create a class Car with attributes brand, model, and year. Create an

object of this class and print its attributes.

Input Format:

The input consists of three values: brand, model, and year of the car.

Constraints:

Brand and model are strings, and the year is an integer.

Output Format:

Print the details of the car object.

Example:

Input:

Toyota Corolla 2022

Output:

Brand: Toyota

Model: Corolla

Year: 2022  --

\### Problem 2: Encapsulation

Problem Statement:

Create a class BankAccount with private attributes account\_number

and balance. Implement methods to set and get the balance while

ensuring data security.

Input Format:

The input consists of an account number and initial balance.

Constraints:

Balance should be a non-negative integer.

Output Format:

Print the account details ensuring encapsulation principles.

Example:

Input:

123456789 5000

Output:

Account Number: 123456789

Balance: 5000  --

\### Problem 3: Inheritance

Problem Statement:

Create a base class Animal with a method make\_sound(). Derive a

class Dog from Animal and override the method to print "Bark".

Input Format:

No input required.

Constraints:

The derived class should inherit the base class properties.

Output Format:

Invoke make\_sound() method from Dog class and print the sound.

Example:

Output:

Bark  --

\### Problem 4: Polymorphism

Problem Statement:

Create a class Shape with a method area(). Derive two classes Circle

and Rectangle, overriding area() to calculate respective areas.

Input Format:

The input consists of radius for Circle and length, width for

Rectangle.

Constraints:

Radius, length, and width should be positive integers.

Output Format:

Print the area of the shapes.

Example:

Input:

Circle 5

Rectangle 4 6

Output:

Area of Circle: 78.5

Area of Rectangle: 24  --

\### Problem 5: Abstraction

Problem Statement:

Create an abstract class Vehicle with an abstract method start().

Implement this method in derived classes Car and Bike.

Input Format:

No input required.

Constraints:

Derived classes should implement the abstract method.

Output Format:

Invoke start() method for both classes and print respective messages.

Example:

Output:

Car is starting...

Bike is starting...





#### **ANSWERS:**



1\)

import java.util.Scanner;



class Car {

    String brand;

    String model;

    int year;

    Car(String brand, String model, int year) {

        this.brand = brand;

        this.model = model;

        this.year = year;

    }



    void displayDetails() {

        System.out.println("Brand: " + brand);

        System.out.println("Model: " + model);

        System.out.println("Year: " + year);

    }

}



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

        if(sc.hasNext()) {

            Car myCar = new Car(sc.next(), sc.next(), sc.nextInt());

            myCar.displayDetails();

        }

    }

}



2\)

import java.util.Scanner;



class BankAccount {

    private String accountNumber;

    private int balance;



    public void setAccountDetails(String accNum, int bal) {

        this.accountNumber = accNum;

        if (bal >= 0) {

            this.balance = bal;

        }

    }



    public String getAccountNumber() { return accountNumber; }

    public int getBalance() { return balance; }

}



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

        BankAccount account = new BankAccount();

 

        if(sc.hasNext()) {

            account.setAccountDetails(sc.next(), sc.nextInt());

            System.out.println("Account Number: " + account.getAccountNumber());

            System.out.println("Balance: " + account.getBalance());

        }

    }

}



3\)

class Animal {

    void makeSound() {

        System.out.println("Some sound");

    }

}



class Dog extends Animal {

    @Override

    void makeSound() {

        System.out.println("Bark");

    }

}



public class Main {

    public static void main(String\[] args) {

        Dog myDog = new Dog();

        myDog.makeSound();

    }

}



4\)

import java.util.\*;



// Base class

class Shape {

    void area() {}

}



// Circle class

class Circle extends Shape {

    int radius;



    Circle(int radius) {

        this.radius = radius;

    }



    void area() {

        double result = 3.14 \* radius \* radius;

        System.out.printf("Area of Circle: %.1f\\n", result);

    }

}



// Rectangle class

class Rectangle extends Shape {

    int length, width;



    Rectangle(int length, int width) {

        this.length = length;

        this.width = width;

    }



    void area() {

        int result = length \* width;

        System.out.println("Area of Rectangle: " + result);

    }

}



// Main

public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);



        int r = sc.nextInt();     // only radius

        int l = sc.nextInt();     // length

        int w = sc.nextInt();     // width



        Shape s1 = new Circle(r);

        Shape s2 = new Rectangle(l, w);



        s1.area();

        s2.area();

    }

}



5\)

abstract class Vehicle {

    abstract void start();

}



class Car extends Vehicle {

    @Override

    void start() {

        System.out.println("Car is starting...");

    }

}



class Bike extends Vehicle {

    @Override

    void start() {

        System.out.println("Bike is starting...");

    }

}



public class Main {

    public static void main(String\[] args) {

        Vehicle myCar = new Car();

        Vehicle myBike = new Bike();

 

        myCar.start();

        myBike.start();

    }

}



## **EXCEPTIONS**

## 

## **Exceptions Assignment**

\### Problem: Understanding Runtime Exceptions

Problem Statement:

Identify and handle different types of runtime exceptions in Java.

Implement separate code snippets to demonstrate each exception

and provide appropriate exception handling using try-catch blocks.

Requirements:  - Write separate Java programs for at least five different runtime

exceptions.- Use try-catch blocks to handle exceptions gracefully.- Provide meaningful error messages when an exception occurs.

Exceptions to Cover:

1\. ArithmeticException - Division by zero.

2\. NullPointerException - Accessing a method or property of a null

object.

3\. ArrayIndexOutOfBoundsException - Accessing an invalid index in

an array.

4\. NumberFormatException - Converting an invalid string to a

number.

5\. ClassCastException - Incorrect type casting.

Input Format:

Each program should take an input that can potentially cause the

exception.

Constraints:  - Handle exceptions properly without crashing the program.- Use appropriate messages to inform the user about the error.

Output Format:  - Print a meaningful message when an exception occurs.- Ensure program execution continues smoothly even after an

exception.

Example:

Example for ArithmeticException:

Input:

Enter numerator: 10

Enter denominator: 0

Output:

Error: Division by zero is not allowed.



#### **ANSWERS:**

**Arithmetic:**



import java.util.\*;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);



        try {

            System.out.print("Enter numerator: ");

            int a = sc.nextInt();



            System.out.print("Enter denominator: ");

            int b = sc.nextInt();



            int result = a / b;

            System.out.println("Result: " + result);



        } catch (ArithmeticException e) {

            System.out.println("Error: Division by zero is not allowed.");

        }



    }

}



**NullPointerException:**



public class Main {

    public static void main(String\[] args) {

        try {

            String str = null;

            System.out.println(str.length());

        } catch (NullPointerException e) {

            System.out.println("Error: Attempted to access a method on a null object.");

        }

    }

}



**ArrayIndexOutOfBoundsException:**



import java.util.Scanner;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

        int\[] numbers = {10, 20, 30};

 

        try {

            System.out.print("Enter index to access (0-2): ");

            int index = sc.nextInt();

            System.out.println("Value at index: " + numbers\[index]);

        } catch (ArrayIndexOutOfBoundsException e) {

            System.out.println("Error: Invalid index. Please choose between 0 and 2.");

        }

    }

}





NumberFormatException:





import java.util.Scanner;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

        try {

            System.out.print("Enter a number: ");

            String input = sc.next();

            int num = Integer.parseInt(input);

            System.out.println("Square: " + (num \* num));

        } catch (NumberFormatException e) {

            System.out.println("Error: Invalid input. Please enter a valid integer.");

        }

    }

}



ClassCastException:



public class Main {

    public static void main(String\[] args) {

        try {

            Object obj = "Hello World";

            Integer num = (Integer) obj;

            System.out.println(num);

        } catch (ClassCastException e) {

            System.out.println("Error: Incorrect type casting. String cannot be cast to Integer.");

        }

    }

}





### **THREADS:**

### 

### **Threads Assignment**

\### Problem: Multi-threading and Synchronization

Problem Statement:

Create a Java program that demonstrates the concept of

multi-threading and synchronization. Implement a shared

BankAccount class where multiple threads (representing different

users) try to withdraw money concurrently. Use synchronization to

ensure that the account balance does not become inconsistent.

Requirements:  - Create a BankAccount class with an initial balance.- Implement a withdraw() method that ensures synchronized access.- Create multiple threads that try to withdraw money from the same

account.- Ensure that withdrawals do not allow the balance to go negative.

Input Format:  - The initial balance of the bank account.- Multiple withdrawal amounts requested by different threads.

Constraints:  - The balance should be a non-negative integer.- Each withdrawal amount should be a positive integer.

Output Format:  - Print the remaining balance after each successful withdrawal.- Display a message if a withdrawal cannot be processed due to

insufficient funds.

Example:

Input:

Initial Balance: 1000

Withdrawals: 300, 500, 400

Output:

Withdrawal of 300 successful. Remaining balance: 700

Withdrawal of 500 successful. Remaining balance: 200

Insufficient balance for withdrawal of 400



### **ANSWERS:**



import java.util.Scanner;



class BankAccount {

    private int balance;



    public BankAccount(int initialBalance) {

        this.balance = initialBalance;

    }



    public synchronized void withdraw(int amount) {

        if (amount <= balance) {

            balance -= amount;

            System.out.println("Withdrawal of " + amount + " successful. Remaining balance: " + balance);

        } else {

            System.out.println("Insufficient balance for withdrawal of " + amount);

        }

    }

}



class UserThread extends Thread {

    private BankAccount account;

    private int amount;



    public UserThread(BankAccount account, int amount) {

        this.account = account;

        this.amount = amount;

    }



    public void run() {

        account.withdraw(amount);

    }

}



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);



        try {

            System.out.print("Initial Balance: ");

            int initialBalance = Integer.parseInt(sc.nextLine().trim());

            BankAccount sharedAccount = new BankAccount(initialBalance);



            System.out.print("Withdrawals (separated by spaces or commas): ");

            String input = sc.nextLine();

 

 

            String\[] parts = input.split("\[,\\\\s]+");



            UserThread\[] threads = new UserThread\[parts.length];

            for (int i = 0; i < parts.length; i++) {

                int amount = Integer.parseInt(parts\[i].trim());

                threads\[i] = new UserThread(sharedAccount, amount);

                threads\[i].start();

            }



 

            for (Thread t : threads) {

                t.join();

            }



        } catch (Exception e) {

            System.out.println("Error: Please enter numbers only. " + e.getMessage());

        }

    }

}



## **Abstract Class Implementation – Media**

## **Library**





import java.util.Scanner;

abstract class Media {

    String title;

    String creator;

    int duration;

    Scanner sc = new Scanner(System.in);



    abstract void printDetails();

}





class Book extends Media {

    @Override

    void printDetails() {

        System.out.println("Entering Book Details...");

        System.out.print("Enter Book Title: ");

        title = sc.nextLine();

        System.out.print("Enter Author Name: ");

        creator = sc.nextLine();

        System.out.print("Enter Number of Pages: ");

        duration = sc.nextInt();

        sc.nextLine(); // Clear buffer



        System.out.println("Book - Title: " + title + ", Author: " + creator + ", Pages: " + duration);

    }

}



class Movie extends Media {

    @Override

    void printDetails() {

        System.out.println("\\nEntering Movie Details...");

        System.out.print("Enter Movie Title: ");

        title = sc.nextLine();

        System.out.print("Enter Director Name: ");

        creator = sc.nextLine();

        System.out.print("Enter Duration (in minutes): ");

        duration = sc.nextInt();

        sc.nextLine(); // Clear buffer



        System.out.println("Movie - Title: " + title + ", Director: " + creator + ", Duration: " + duration + " mins");

    }

}



class Song extends Media {

    @Override

    void printDetails() {

        System.out.println("\\nEntering Song Details...");

        System.out.print("Enter Song Title: ");

        title = sc.nextLine();

        System.out.print("Enter Singer Name: ");

        creator = sc.nextLine();

        System.out.print("Enter Duration (in minutes): ");

        duration = sc.nextInt();

        sc.nextLine();



        System.out.println("Song - Title: " + title + ", Singer: " + creator + ", Duration: " + duration + " mins");

    }

}



public class Main {

    public static void main(String\[] args) {

        Media myMedia;



        // Dynamic Method Dispatch

        myMedia = new Book();

        myMedia.printDetails();



        myMedia = new Movie();

        myMedia.printDetails();



        myMedia = new Song();

        myMedia.printDetails();

    }

}





#### **Interface-Based Implementation – Smart**

#### **Device Control**



interface RemoteControl {

    void powerOn();

    void powerOff();

    void increaseVolume();

    void decreaseVolume();

}





class TV implements RemoteControl {

    public void powerOn() { System.out.println("TV is now ON."); }

    public void powerOff() { System.out.println("TV is now OFF."); }

    public void increaseVolume() { System.out.println("TV volume increased."); }

    public void decreaseVolume() { System.out.println("TV volume decreased."); }

}





class AC implements RemoteControl {

    public void powerOn() { System.out.println("AC is now ON."); }

    public void powerOff() { System.out.println("AC is now OFF."); }



    public void increaseVolume() { System.out.println("AC cooling increased."); }

    public void decreaseVolume() { System.out.println("AC cooling decreased."); }

}





class Speaker implements RemoteControl {

    public void powerOn() { System.out.println("Speaker is now ON."); }

    public void powerOff() { System.out.println("Speaker is now OFF."); }

    public void increaseVolume() { System.out.println("Speaker volume increased."); }

    public void decreaseVolume() { System.out.println("Speaker volume decreased."); }

}





public class Main {

    public static void main(String\[] args) {

        RemoteControl remote;



 

        System.out.println("=== TV Control ===");

        remote = new TV();

        remote.powerOn();

        remote.increaseVolume();

        remote.decreaseVolume();

        remote.powerOff();





        System.out.println("\\n=== AC Control ===");

        remote = new AC();

        remote.powerOn();

        remote.increaseVolume();

        remote.decreaseVolume();

        remote.powerOff();



 

        System.out.println("\\n=== Speaker Control ===");

        remote = new Speaker();

        remote.powerOn();

        remote.increaseVolume();

        remote.decreaseVolume();

        remote.powerOff();

    }

}



##### **G - Diagonal Traversal of Matrix**





import java.util.Scanner;



public class Main {

    public static void main(String\[] args) {

        Scanner sc = new Scanner(System.in);

 

        if (!sc.hasNextInt()) return;

        int T = sc.nextInt();

 

        while (T-- > 0) {

            if (!sc.hasNextInt()) break;

            int N = sc.nextInt();

            int\[]\[] matrix = new int\[N]\[N];

 

            for (int i = 0; i < N; i++) {

                for (int j = 0; j < N; j++) {

                    matrix\[i]\[j] = sc.nextInt();

                }

            }

 

            for (int k = N - 1; k >= -(N - 1); k--) {

                int diagonalSum = 0;

                for (int i = 0; i < N; i++) {

                    int j = i + k;

                    if (j >= 0 \&\& j < N) {

                        diagonalSum += matrix\[i]\[j];

                    }

                }

                System.out.print(diagonalSum + " ");

            }

            System.out.println();

        }

        sc.close();

    }

}



##### **L - Matrix Zig-Zag Traversal**



**import java.util.Scanner;**



**public class Main {**

&nbsp;   \*\*public static void main(String\\\[] args) {\*\*

        \*\*Scanner sc = new Scanner(System.in);\*\*



        \*\*if (!sc.hasNextInt()) return;\*\*

        \*\*int N = sc.nextInt();\*\*

        \*\*int M = sc.nextInt();\*\*

        

        \*\*int\\\[]\\\[] matrix = new int\\\[N]\\\[M];\*\*

        \*\*for (int i = 0; i < N; i++) {\*\*

            \*\*for (int j = 0; j < M; j++) {\*\*

                \*\*matrix\\\[i]\\\[j] = sc.nextInt();\*\*

            \*\*}\*\*

        \*\*}\*\*

        \*\*for (int i = 0; i < N; i++) {\*\*

            \*\*if (i % 2 == 0) {\*\*

                

                \*\*for (int j = 0; j < M; j++) {\*\*

                    \*\*System.out.print(matrix\\\[i]\\\[j] + " ");\*\*

                \*\*}\*\*

            \*\*} else {\*\*

            

                \*\*for (int j = M - 1; j >= 0; j--) {\*\*

                    \*\*System.out.print(matrix\\\[i]\\\[j] + " ");\*\*

                \*\*}\*\*

            \*\*}\*\*

        \*\*}\*\*

        \*\*System.out.println();\*\* 

        \*\*sc.close();\*\*

    \*\*}\*\*


**}**

