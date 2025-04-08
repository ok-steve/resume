export default async (collectionApi) => {
  return collectionApi
    .getFilteredByGlob("src/education/*.md")
    .filter((item) => item.data.published !== false)
    .sort((a, b) => {
      return new Date(a.data.endDate) - new Date(b.data.endDate);
    })
    .reverse();
};
