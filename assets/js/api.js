let output = ''
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => {
      if(data.ok){
          console.log(`Fake data`)
      }else{
          console.log('Zero')
      }
  })
.catch(err => {
	console.error(err);
});