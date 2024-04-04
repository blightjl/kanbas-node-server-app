import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [printJSON, setPrint] = useState(false);
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  const toggleJSON = () => {
    setPrint(prevState => !prevState);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);


  return (
    <div>
      <h1>Working With Objects</h1>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Modifying Properties</h4>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <br/>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary" href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>
      <h1>Assignment Object</h1>
      Assignment Score
      <br/>
      <input type="number" value={assignment.score}
        onChange={(e) => setAssignment({
          ...assignment, score: parseInt(e.target.value)
        })} />
        <br/>
        <a className="btn btn-danger" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}> Update score </a>
        <br/>
        <label>
        <input checked={assignment.completed} type="checkbox"
          onChange={(e) => setAssignment({
            ...assignment, completed: e.target.checked
          })} />
        Completed
        <br/>
        <a className="btn btn-warning" href={`${ASSIGNMENT_URL}/complete/${assignment.completed}`}> Update completion </a>
        <br/>
        <button className="btn btn-success" onClick={toggleJSON}>CLICK FOR ASSIGNMENT DETAILS</button>
        <br/>
       {printJSON && JSON.stringify(assignment)}
      </label>
    </div>
  );
}
export default WorkingWithObjects;