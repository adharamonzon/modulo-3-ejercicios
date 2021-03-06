const ENDPOINT = 'https://randomuser.me/api/?results=50';

const getDataFromApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let users = [];
      for (let item of data.results) {
        let peopleUser = {
          name: item.name.first,
          lastName: item.name.last,
          city: item.location.city,
          country: item.location.country,
          age: item.dob.age,
          photo: item.picture.large,
          gender: item.gender,
        };
        users.push(peopleUser);
      }
      return users;
    });
};

export { getDataFromApi };
