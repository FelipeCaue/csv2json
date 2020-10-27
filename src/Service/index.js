
module.exports.toJson = (body) => {

    const lines = body.csv
    const headers=lines[0].split(",");
    const result = []
  for(var i=1;i<lines.length;i++){

      const obj = {};
      const currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }
      result.push(obj);

  }
  return JSON.stringify(result)
};