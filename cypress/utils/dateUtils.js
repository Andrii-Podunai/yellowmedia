export function getCurrentDate(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const day = date.toLocaleDateString('uk-UA', { weekday: 'long' }); 
  const num = date.getDate();


  const months = [
    'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
  ];
  const month = months[date.getMonth()];

  return { day, num, month };
}


export function getFormattedDate(dayOffset) {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0'); 

  return `${year}-${month}-${day}`;
}
