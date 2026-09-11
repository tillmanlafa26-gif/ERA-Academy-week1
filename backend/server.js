const express = require('express');
const db = require('./db');

const cors = require('cors');
const app = express();

const PORT = 3000;
app.use(cors());

app.use(cors());
app.use(express.json());
// root route - - confirms server is running 
app.get('/', (req, res) => {
  res.send('Backend is running with mySQL');
});

//GET /students - retrieves all students from my SQL database
app.get('/students', (req, res) => {
  const SQL = "SELECT * FROM students";
  db.query(SQL, (error, results) => {
    if (error) {
      console.error("Error getting students:", error);
      return res.status(500).json("failed to get students");
       
    }
    res.json(results);
  });
});

//GET / classes returns all classes from mySQL
app.get('/classes', (req, res) => {
  const SQL = "SELECT * FROM classes";
  db.query(SQL, (error, results) => {
    if (error) {
      console.error("Error getting classes:", error);
      return res.status(500).json("failed to get classes");
    }
    res.json(results);
  });
});

// GET / enrollments -- returns joined dada (student name = class name)
app.get('/enrollments', (req, res) => {
    const SQL = "SELECT students.first_name, students.last_name, classes.class_name, classes.teacher_name FROM enrollments JOIN students ON enrollments.student_id = students.id JOIN classes ON enrollments.class_id = classes.id";
    db.query(SQL, (error, results) => {
        if (error) {
            console.error("Error getting enrollments:", error);
            return res.status(500).json({ error: "failed to get enrollments" });
        }
        res.json(results);
    });
});


// GET / students/:id -- returns 1 student by ID
app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const SQL = "SELECT * FROM students WHERE id = ?";
  db.query(SQL, [id], (error, results) => {
    if (error) {
      console.error("Error getting student:", error);
      return res.status(500).json({ error: "failed to get student" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "student not found" });
    }
    res.json(results[0]);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});