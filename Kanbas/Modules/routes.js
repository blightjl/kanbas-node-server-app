// import db from "../Database/index.js";
import * as dao from "./dao.js";

function ModuleRoutes(app) {
    // update
    app.put("/api/modules/:mid", async (req, res) => {
        console.log(req.body);
        const { mid } = req.params;
        const status = await dao.updateUser(mid, req.body);
        currentModule = await dao.findModuleById(mid);
        console.log(req.body);
        res.sendStatus(status);
    });
    // delete
    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
        console.log(db.modules);
    });
    // create
    app.post("/api/courses/:cid/modules", async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    });
    // read
    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        if (cid === "Home") {
            res.send([]);
            return;
        }
        console.log("CID");
        // console.log(cid);
        console.log("CID HERE");
        const modules = await dao.findModuleById(cid);
        // console.log(modules);
        res.send([]);
    });
}
export default ModuleRoutes;