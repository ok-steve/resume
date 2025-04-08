export default async (collectionApi) => {
  return collectionApi
    .getFilteredByGlob("src/projects/*.md")
    .filter((item) => item.data.published !== false)
    .sort((a, b) => {
      return new Date(a.data.startDate) - new Date(b.data.startDate);
    })
    .reverse();
};
