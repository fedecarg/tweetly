export function formatCreatedAtDate(date) {
  let d = date.split(' ');
  return `${d[1]} ${d[2]}, ${d[5]} ${d[3]}`;
}
