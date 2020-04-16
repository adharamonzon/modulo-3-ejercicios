/* const formatSerieItem = (seriesItem) => {
  const image = seriesItem.show.Image === null ? 'https://via.placeholder.com/210x295/ffffff/666666?text=tv' : seriesItem.show.image.medium;
  return { id: seriesItem.show.id, name: seriesItem.show.name, image: image };
}; */

const getDataApi = (searchText) => {
  return fetch(`http://api.tvmaze.com/search/shows?q?${searchText}`).then((response) => response.json()); /* 
    .then((series) => series.map(formatSerieItem)); */ //se guardan todos los datos en el estado
};

export default getDataApi;
