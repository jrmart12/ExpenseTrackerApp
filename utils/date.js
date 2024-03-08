export function getFormattedDate(date){
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export function getDateMinusDays(date,days){
  return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days);
}

export function getCutDateDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth() - 1, days);
}

export function getPayDateDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth() + 1, days);
}