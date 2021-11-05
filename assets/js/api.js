let output = '';
const paragraph = document.getElementById('datas');
paragraph.innerHTML = 'Loading...';
console.log('Loading...')
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    if (json.length > 0) {
      console.log(JSON.stringify(json))
      json.forEach((u) => {

        paragraph.innerHTML = `${u.userId}`
      })
    } else {
      console.log('No data')
    }
  })