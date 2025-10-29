export default (collectionsApi) =>
  collectionsApi
    .getFilteredByGlob("src/content/projects/*.md")
    .sort((a, b) => new Date(b.data.endDate) - new Date(a.data.endDate));
