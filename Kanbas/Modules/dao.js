// The Data Access Object (DAO) design pattern

import model from "./model.js";

export const createModule = (module) => {
    delete module._id
    model.create(module);
};
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById({ course: moduleId });
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });