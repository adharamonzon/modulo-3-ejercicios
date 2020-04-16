const ENDPOINT = 'https://randomuser.me/api/?results=50';

let users = [];

const fetchReasons = () => {
  fetch(ENDPOINT).then((response) =>
    response.json().then((data) => {
      debugger;
      for (let i = 0; i < data.length; i++) {
        users.push({
          gender: data.results[i].gender,
          putoName: data.results[i].name,
        });
      }
      return users;
    })
  );
};

export { fetchReasons };
//al exportar un fetch no hace falta poner el default
console.log(users);
