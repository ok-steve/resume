export default (collectionsApi) =>
  collectionsApi
    .getFilteredByGlob("src/content/projects/*.md")
    .sort((a, b) => b.data.endDate - a.data.endDate);
