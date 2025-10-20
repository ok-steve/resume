export default (collectionsApi) =>
  collectionsApi
    .getFilteredByGlob("src/content/education/*.md")
    .sort((a, b) => b.data.endDate - a.data.endDate);
