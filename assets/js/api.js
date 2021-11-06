let output = '';
const paragraph = document.getElementById('Datas');
paragraph.innerHTML = 'Loading...';

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