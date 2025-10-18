import md from "./md.js";

const libraries = {
  md,
};

export default (config) => {
  Object.entries(libraries).forEach(([name, library]) =>
    config.setLibrary(name, library)
  );
};
