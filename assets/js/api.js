let output = '';
const paragraph = document.getElementById('Datas');
if (paragraph) {
  paragraph.innerHTML = 'Loading...';
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    if (json.length > 0) {
      console.log(JSON.stringify(json))
      let output = ''
      json.forEach((u) => {
        output += `
        <div class="Card">
          <div class="Card-Header">
            <h3 class="d-flex justify-content-between">Username <a href="#${u.userId}">${u.id}</a></h3>
          </div>
          <div class="Card-Body padding-5">
            <p>${u.title}</p>
          </div>
          <div class="Card-Footer">
            <button type="button" class="button btn btn-success">${u.completed}</button>
          </div>
        </div>
        `
      })
      paragraph.innerHTML = ''
      paragraph.innerHTML = output
    } else {
      console.log('No data')
    }
  })

// Fetch users using the fake jsonplaceholder api
const UsersDom = document.getElementById('Datas-users')
let data = 'Loading'
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json => {
    if (json.length > 0) {
      data = ''
      json.forEach((user) => {
        data += `
        <li>
          <a href="#user=uniqueId">
              <span>
                  <img src="./assets/img/racine14.jpg" alt="Friends img" class="img-profil" />
              </span>
              <span>${user.name}</span>
          </a>
      </li>
        `
      })
    } else {
      data = '<p class="info danger">There no data</p>'
    }
    UsersDom.innerHTML = data
  })
  .catch((e) => console.log(e))