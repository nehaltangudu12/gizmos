import parse from 'csv-parse';

var rows = parse( fs.readFileSync("datasets/gpa/uiuc-gpa-dataset.csv"), {columns: true} );
rows.forEach(function (row) {
  // Each `row` is a row from the CSV as a dictionary indexed with column headers.

  // Example usage:
  var term = row["Term"];
  var year = row["Year"];
});