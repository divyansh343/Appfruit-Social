const arrify = (arr = []) => {
    const res = [];
    const { length: l } = arr;
    for(let i = 0; i < l; i++){
       const obj = arr[i];
       const subArr = Object.values(obj);
       res.push(subArr);
    };
    console.log(res);
    return res;
 };

export const exportToCsv = (content ,fileName) => {
    var arrayContent = arrify(content);
    var csvContent = arrayContent.join("\n");
    var link = window.document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent));
    link.setAttribute("download", fileName);
    link.click(); 
}