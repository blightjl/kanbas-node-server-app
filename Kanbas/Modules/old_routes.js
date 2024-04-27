// import db from "../Database/index.js";
import * as dao from "./dao.js";

function ModuleRoutes(app) {
    app.put("/api/modules/:mid", (req, res) => {
        console.log(req.body);
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
            (m) => m._id === mid);
        console.log(req.body)
        db.modules[moduleIndex] = {
            ...db.modules[moduleIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    app.delete("/api/modules/:mid", (req, res) => {
        console.log("DELETING MODULE IN MODULES ROUTE");
        const { mid } = req.params;
        console.log(mid);
        var success = false;
        db.modules = db.modules.filter((m) => { const foundMID = m._id !== mid; if (!foundMID) { success = true; } return foundMID });
        if (success) {
            res.sendStatus(200);
            console.log("200");
        }
         else {
            // res.sendStatus(444);
            console.log("404");
        }
        console.log(db.modules);
    });

    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        console.log(newModule);
        db.modules.push(newModule);
        res.send(newModule);
    });

    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        if (cid === "Home") {
            res.send([]);
            return;
        }
        const modules = db.modules.filter((m) => m.course === cid);
        res.send(modules);
    });
}
export default ModuleRoutes;