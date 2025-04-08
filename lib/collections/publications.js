export default async (collectionApi) => {
  return collectionApi
    .getFilteredByGlob("src/publications/*.md")
    .filter((item) => item.data.published !== false)
    .sort((a, b) => {
      return new Date(a.data.releaseDate) - new Date(b.data.releaseDate);
    })
    .reverse();
};
