// const make_year_range = (size = 60, startAt = 1950) => {
//   return [...Array(size).keys()].map(function(v,i,a) { return i + startAt
// }
//   )
// }

// export const YEARS = make_year_range();

const generalMakeRange = (start, end) => {
  let collection = [];
  for(var x = start; x <= end; x++) {
    let item = {key: x, value: x, text: x}
    collection.push(item);
  }
    return collection;
}

export const MONTHS = generalMakeRange(0, 11);

export const DAYS = generalMakeRange(1, 31);

// const other_make_range = () => {
//   let years = [];
//   for(var x = 1950; x <= 2019; x++) {
//     let year = {key: x, value: x, text: x}
//     years.push(year)
//   }
//   return years;
// }

export const YEARS = generalMakeRange(1950, 2019);
