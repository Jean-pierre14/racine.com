window.onload = () => {
  const input = document.getElementById("file");

  input.onchange = (event) => {
    const file = event.target.files[0];
    // console.log(file) Test if the file there.

    if (file) {
      // console.log(file) second test
      let fileReader = new FileReader();

      fileReader.readAsBinaryString(file);

      fileReader.onload = (event) => {
        let data = event.target.result;

        let workbook = XLSX.read(data, { type: "binary" });

        console.log(workbook);

        workbook.SheetNames.forEach((sheet) => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );

          //   console.log(rowObject);
          let data = "";
          let myObj = JSON.parse(rowObject);

          data += "<table>";
          for (let x in myObj) {
            data = `<tr><td> ${myObj[x].name}</td></tr>`;
          }
          data = "</table>";
          document.getElementById("result").innerHTML = data;
        });
      };
    }
  };
};
