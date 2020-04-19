const formatSerieItem = (seriesItem) => {
  const image = seriesItem.show.image === null ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV' : seriesItem.show.image.medium;
  return {
    id: seriesItem.show.id,
    name: seriesItem.show.name,
    image: image,
  };
};

const getDataFromApi = (searchText) => {
  return fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
    .then((response) => response.json())
    .then((series) => series.map(formatSerieItem));
};

//es necesario retornar la promesa, el fetch para en app poder hacer un .tehn y poder meterlo en el estado

export default getDataFromApi;
