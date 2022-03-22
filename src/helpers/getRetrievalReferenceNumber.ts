const getDaysFromYearStart = (date: Date, startDate: Date) => {
  const daysAmount = Math.floor((Number(date) - Number(startDate)) / (1000 * 60 * 60 * 24) + 1);

  if (daysAmount < 10) return `00${daysAmount}`;
  if (daysAmount < 100) return `0${daysAmount}`;

  return daysAmount;
};

const formatHour = (hour: number) => (hour < 10 ? `0${hour}` : hour);

const getRetrievalReferenceNumber = (traceAuditNumber: number) => {
  const date = new Date();
  const startDate = new Date(date.getFullYear(), 0);
  const lastNumberOfTheYear = date.getFullYear() % 10;
  const dayFromYearStart = getDaysFromYearStart(date, startDate);
  const hour = formatHour(date.getHours());

  return `${lastNumberOfTheYear}${dayFromYearStart}${hour}${traceAuditNumber}`;
};

export default getRetrievalReferenceNumber;
