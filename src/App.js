import "./App.css";
import studentsGrades from "./modules/students";
import { useRef, useState } from "react";

function App() {
  const studentName = useRef(null);
  const [student, setStudent] = useState("");

  const studentSearch = (e) => {
    e.preventDefault();
    let newStudent = studentName.current.value.toLowerCase();
    setStudent(newStudent);
    // console.log(student);
  };

  let searchedStudent = studentsGrades.filter((currentStudent) => {
    return currentStudent.name.toLowerCase() === student;
  });

  return (
    <div>
      <form onSubmit={studentSearch} className="App">
        <h2>Grades</h2>

        <input type="text" ref={studentName} />
        <input type="submit" value="Submit Form" />
      </form>
      {searchedStudent.length > 0 ? (
        <div style={{ marginLeft: "20px" }}>
          <h4>Name : {searchedStudent[0].name}</h4>
          <h4>GPA : {searchedStudent[0].GPA}</h4>
          {searchedStudent[0].classes.map((classItem, index) => (
            <h4 key={index}>
              Class{index + 1} : {classItem}
            </h4>
          ))}
        </div>
      ) : (
        <h4 style={{ textAlign: "center" }}>
          Name was not found in the database
        </h4>
      )}
    </div>
  );
}

export default App;
