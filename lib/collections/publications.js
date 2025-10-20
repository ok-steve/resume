export default (collectionsApi) => {
  return collectionsApi
    .getFilteredByGlob("src/content/publications/*.md")
    .sort((a, b) => {
      return b.data.releaseDate - a.data.releaseDate;
    });
};
