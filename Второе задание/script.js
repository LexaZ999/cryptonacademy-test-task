function readFile(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    let textToArray = reader.result.split("\n").map(function (apart) { return apart.split(" ") });

    textToArray.sort();
    let arr = [];
    arr.push(textToArray[0]);
    let n = 0;
    for (let i = 0; i < textToArray.length; i++) {
      for (let j = 1 + n; j < textToArray.length; j++) {
        if (arr[i][0] == textToArray[j][0]) {
          arr[i][1] = arr[i][1] * 1 + textToArray[j][1] * 1;
          arr[i][2] = arr[i][2] * 1 + textToArray[j][2] * 1;
        } else {
          arr.push(textToArray[j]);
          n = j;
          break;
        };
      };
    };
    for (let i = 0; i < arr.length; i++) {
      arr[i].splice(3, 0, arr[i][1] * arr[i][2]);
    };
    let str = arr.map(function (merged) { return merged.join(" ") }).join('\n');
    console.log(str);

    let blob = new Blob([str], { type: "text" });
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "result.txt");
    link.click();
  };
};
