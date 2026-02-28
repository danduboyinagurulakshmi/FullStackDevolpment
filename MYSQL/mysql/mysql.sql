create database day1;
use day1;
create table student(
sid int,
sname varchar(50),
class varchar(40),
sdob date);
insert into student values(546,"gurulakshmi","cse","2006-05-08");
insert into student values(506,"triveni","cse","2006-05-13");
insert into student values(560,"bhavana","cse","2006-07-11");
insert into student values(563,"jaya","cse","2005-10-03");
select * from student;
drop table student;
drop database day1;
create database practice;
use practice;
CREATE TABLE product (
    pid INT PRIMARY KEY,
    pname VARCHAR(40) NOT NULL,
    cost INT NOT NULL,
    manufacturer_name VARCHAR(40),
    manufactured_date DATE
);
drop table product;
INSERT INTO product VALUES (1, 'lux', 34, 'HUL', '2017-12-12');
INSERT INTO product VALUES (2, 'locks', 1200, 'Godrej', '2018-01-11');
select * from product;
describe product;
SHOW COLUMNS FROM product;
SELECT COLUMN_NAME 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'product';
create table student(
sid int,
name varchar(40),
city varchar(40) default "banglore"
);
insert into student values(101,"guru","chennai");
insert into student(sid,name) values(103,"anjali");
select * from student;
create table employee(
eid int not null,
Name varchar(40),
Email varchar(40)
);
insert into employee values(1,"teja","raviteja@gmail.com");
insert into employee values(2,null,null);
insert into employee values(null,"guru","guru@gmail.com");
select * from employee;
drop table employee;
create database day2;
use day2;
create table patient(
pid int,
fname varchar(40),
lname varchar(40),
age int,
bg varchar(40)
);
INSERT INTO patient(pid, fname, lname, age, bg) VALUES
(1, 'madhava', 'reddy', 45, 'o+ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(4, 'hari', 'kiran', 60, 'b-ve'),
(3, 'madhava', 'kiran', 52, 'o+ve'),
(5, 'veena', 'kumari', 42, NULL),
(6, 'k_iran', 'kumar', 39, 'b-ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(7, 'mahes%h', 'nambootri', 36, 'b+ve'),
(8, 'rahul', 'kumar', 46, 'b-ve'),
(9, 'bharat', 'kumar', 56, 'b-ve');
select * from patient;
SELECT pid, fname, lname, age, bg FROM patient;
SELECT CONCAT(fname, ' ', lname) AS fullname, pid, age FROM patient;
select concat(fname,lname,"'s bg is", bg,"and he/she is from india") from patient;
select concat(fname,lname)as 'full name',age from patient order by age;
select fname,lname,bg from patient order by bg desc;
select fname,age from patient order by concat('hello'+fname+lname) desc;
select * from patient order by age desc;
select distinct fname,age from patient;
select distinct age,bg from patient;
select distinct fname,age,bg from patient order by bg desc;
select fname,lname,age from patient limit 3;
select * from patient order by age desc limit 3 ;
select bg from patient group by bg having avg(age)>45;
select bg,count(*) as 'count' from patient group by bg;
select max(age) as 'max age',bg from patient group by bg;
select lname,MIN(age) from patient group by bg,lname;
select bg,MAX(age) as 'max age' from patient group by bg having MAX(age)>40;
select * from patient;
select p1.* from patient p1 where 3=(select count(distinct(p2.pid)) from patient p2 where p2.age>p1.age);
drop table patient;
CREATE TABLE employee (
    eid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    salary INT NULL,
    dept VARCHAR(20),
    doj DATE
);
drop table employee;
INSERT INTO employee (eid, fname, lname, age, salary, dept, doj) VALUES
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23'),
(2, 'sowmya', 'kumari', 23, 19000, 'db', '2010-11-13'),
(3, 'kishore', 'kumar', 27, 36000, 'android', '2011-10-16'),
(4, 'abimanyu', 'biswal', 22, NULL, 'android', '2010-02-20'),
(5, 'soni', 'kumar', 24, 21800, '.net', '2009-06-21'),
(6, 'anu', '_singh', 22, 12000, 'db', '2010-10-23'),
(7, '_dinesh', 'moh%anty', 23, 15000, '.net', '2009-08-26'),
(8, 'nishala', '_kumari', 22, 18000, 'db', '2008-07-19'),



(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23');
 select * from employee;
 select * from employee order by fname;
 select * from employee order by age;
 select * from employee order by fname desc;
select * from employee order by fname asc;
select * from employee order by lname,fname desc;
select distinct * from employee;
select distinct lname from employee;
select * from employee limit 5;
select fname,lname,age from employee limit 3;
select concat(fname,'',lname)as'fullname',age from employee order by salary desc limit 3;
select distinct fname,age from employee order by age desc limit 6;
select * from employee limit 5,2;
select dept from employee group by dept;
select e1.salary from employee e1 where 1=(select count(*) from employee e2 where e2.salary>e1.salary);
select * from employee;

select * from




