
window.onload = () => {

    const input = document.getElementById('file')

    input.onchange = (event) =>{

        const file = event.target.files[0]
        // console.log(file) Test if the file there.

        if(file){
            // console.log(file) second test
            let fileReader = new FileReader()

            fileReader.readAsBinaryString(file)

            fileReader.onload = (event) => {

                let data = event.target.result

                let workbook = XLSX.read(data, {type: "binary"})

                console.log(workbook)

                workbook.SheetNames.forEach(Sheet => {

                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])

                    console.log(rowObject)

                    document.getElementById('result').innerHTML = JSON.stringify(rowObject)
                    
                })
            }
        }
    }
}