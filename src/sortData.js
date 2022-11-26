function sortData(arr) {
  let copy = [...arr].sort((a,b) => a.name < b.name? -1: 1);
  for(let obj of copy) {
    let {scores} = obj
    scores.sort((a, b) => (a.s > b.s ? -1 : 1));
  }
}

export default sortData;