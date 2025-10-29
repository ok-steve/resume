export default (collectionsApi) =>
  collectionsApi
    .getFilteredByGlob("src/content/work/*.md")
    .sort((a, b) => new Date(b.data.startDate) - new Date(a.data.startDate));
