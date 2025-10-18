import date from "./date.js";

const filters = {
  date,
};

export default (config) => {
  Object.entries(filters).forEach(([name, filter]) =>
    config.addFilter(name, filter)
  );
};
