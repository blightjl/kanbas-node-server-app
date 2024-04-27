// import Database from "../Database/index.js";
import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  // app.get("/api/courses/Home", (req, res) => {
  //   const course = [];
  //   res.send(course);
  // });
    // read a course
    app.get("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        if (id === "Home") {
          res.send([]);
          return;
        }
        const course = await dao.findCourseById(id);
        if (!course) {
          res.status(404).send("Course not found");
          return;
        }
        res.send([]);
      });

    // update
    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = req.body;
        const status = await dao.updateCourse(id, course);
        currentCourse = await dao.findCourseById(id);
        console.log(course);
        res.sendStatus(status);
      });
    
    // delete
    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.json(status);
      });
    
    // create
    app.post("/api/courses", async (req, res) => {
        const course = { ...req.body,
            _id: new Date().getTime().toString() };
        const new_course = await dao.createCourse(course);
        res.send(new_course);
        });

    // read all courses
    app.get("/api/courses", async (req, res) => {
      const courses = await dao.findAllCourses();
        res.send(courses);
    });
}
