import education from "./education.js";
import projects from "./projects.js";
import publications from "./publications.js";
import work from "./work.js";

const collections = {
  education,
  projects,
  publications,
  work,
};

export default (config) => {
  Object.entries(collections).forEach(([name, collection]) => {
    config.addCollection(name, collection);
  });
};
