let output = '';
const paragraph = document.getElementById('Datas');
if (paragraph) {
  paragraph.innerHTML = 'Loading...';
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    if (json.length > 0) {
      // console.log(JSON.stringify(json))
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
      if (paragraph.innerHTML = '') { paragraph.innerHTML = 'Loading' } else { paragraph.innerHTML = output }
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
          <a href="user.html?get=${user.id}">
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

// To Get the params using javascript
function User() {
  let UrlString = window.location.href
  let url = new URL(UrlString)
  let getData = url.searchParams.get('get')
  // alert(getData)

  fetch(`https://jsonplaceholder.typicode.com/users/${getData}`)
    .then(res => res.json())
    .then(json => {
      data = `
        <div class="Card">
          <div class="Card-Header">
            <h2>${json.name}</h2>
          </div>
          <div class="Card-Body padding-20">
            <ul class="">
              <li class="flex justify-content-between list-items">
                <span>Username: </span>
                <span>${json.username}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>Email: </span>
                <span>${json.email}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>Phone: </span>
                <span>${json.phone}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>WebSite: </span>
                <span>${json.website}</span>
              </li>
            </ul>
        </div>
      </div>

        <div class="margin-top-20 Card">
          <div class="Card-Header">
            <h3>Address</h3>
          </div>
          <div class="Card-Body padding-20">
            <ul>
              <li class="flex justify-content-between list-items">
                <span>Street:</span>
                <span>${json.address.street}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>Suite:</span>
                <span>${json.address.suite}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>City:</span>
                <span>${json.address.city}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>Zip code:</span>
                <span>${json.address.zipcode}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>Geo map:</span>
                <span>Lat: ${json.address.geo.lat}</span>
                <span>Lng: ${json.address.geo.lng}</span>
              </li>
            </ul>
          </div>
        </div>
      `
      let Details = ''
      Details = `
        <div class="Card">
          <div class="Card-Header">
            <h3>Campany: ${(json.company.name === '' ? 'Goma' : json.company.name)}</h3>
          </div>
          <div class="Card-Body padding-20">
            <ul>
              <li class="flex justify-content-between list-items">
                <span>catch Phrase: </span>
                <span>${(json.company.catchPhrase === '' ? 'Goma' : json.company.catchPhrase)}</span>
              </li>
              <li class="flex justify-content-between list-items">
                <span>catch Phrase: </span>
                <span>${(json.company.bs === '' ? 'Goma' : json.company.bs)}</span>
              </li>
            </ul>
          </div>
          <div class="Card-Body"></div>
        </div>
      `
      document.getElementById('Datas-user-Details').innerHTML = Details
      document.getElementById('Datas-user').innerHTML = data
      // console.log(data)
    })
    .catch(e => console.log(e))
}

User()