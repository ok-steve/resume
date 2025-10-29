export default (collectionsApi) =>
  collectionsApi
    .getFilteredByGlob("src/content/education/*.md")
    .sort((a, b) => new Date(b.data.endDate) - new Date(a.data.endDate));
