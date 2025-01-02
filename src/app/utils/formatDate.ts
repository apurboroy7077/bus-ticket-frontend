export const formatDateAr7 = (timestamp: number) => {
  return new Date(timestamp).toLocaleString();
};
export const convertToUnixTimestamp = (dateString: string) => {
  const [date, time] = dateString.split(", ");
  const [day, month, year] = date.split("/");
  const [hours, minutes, seconds] = time.split(":");

  const formattedDate = new Date(
    `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
  );
  return formattedDate.getTime();
};
export const convertToDatetimeLocalFormat = (timestamp: number) => {
  const date = new Date(timestamp);

  // Extract date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if needed

  // Extract time components
  const hours = String(date.getHours()).padStart(2, "0"); // Add leading zero if needed
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Add leading zero if needed

  // Return formatted string
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
export const convertDateTimeLocalToUnixTimestamp = (datetimeLocal: string) => {
  const date = new Date(datetimeLocal);
  return date.getTime();
};
