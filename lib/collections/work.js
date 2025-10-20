export default (collectionsApi) =>
  collectionsApi
    .getFilteredByGlob("src/content/work/*.md")
    .sort((a, b) => b.data.startDate - a.data.startDate);
