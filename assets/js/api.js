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
        <div class="card my-2">
          <div class="card-header">
            <h3 class="d-flex justify-content-between">Username <a>${u.id}</a></h3>
          </div>
          <div class="card-body">
            <p>${u.title}</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-success">${u.completed}</button>
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