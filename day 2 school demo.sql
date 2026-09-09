CREATE DATABASE school_demo;

USE school_demo;

CREATE TABLE students (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
grade_level INT
);

INSERT INTO students (first_name, Last_name, grade_level) VALUES
('john', 'doe', 10), 
('maria', 'lopez', 11),
('chris', 'brown', 12);

SELECT * FROM students;

DROP TABLE IF EXISTS students;

INSERT INTO students (first_name, last_name, grade_level) VALUES
('emily', 'carter', 10),
('jason', 'hill', 11),
('maria', 'lopez', 10);

CREATE TABLE classes(
id INT AUTO_INCREMENT PRIMARY KEY,
class_name 	varchar(100),
teacher_name VARCHAR(100)
);

INSERT INTO classes (class_name, teacher_name) VALUES
('algebra 1', 'mr. brown'),
('biology', 'ms.green'),
('english 10', 'mrs. taylor');

CREATE TABLE enrollments(
id INT AUTO_INCREMENT PRIMARY KEY,
student_id INT,
class_id INT,
FOREIGN KEY (student_id) REFERENCES students(id),
FOREIGN KEY (class_id) REFERENCES classes(id)
);

INSERT INTO enrollments (student_id, class_id) VALUES
(1,1),
(1,2),
(2,1),
(3,3);

SELECT * FROM enrollments;

SELECT students.first_name, students.last_name, classes.class_name, classes.teacher_name FROM enrollments JOIN students
ON enrollments.student_id=students.id JOIN classes ON enrollments.class_id=classes.id;

CREATE TABLE grades(
id INT AUTO_INCREMENT PRIMARY KEY,
student_id INT,
class_id INT,
grade_value VARCHAR(5),
FOREIGN KEY (student_id) REFERENCES students(id),
FOREIGN KEY(class_id) REFERENCES classes(id)
);

INSERT INTO grades (student_id, class_id, grade_value) VALUES
(1,1,'A'),
(1,2,'B'),
(2,1, 'A'),
(3,3, 'C');

SELECT * FROM grades;