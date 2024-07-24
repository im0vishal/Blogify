
export const getParsedDate = (date) => {
    const parsedDate = new Date(date);
    return parsedDate.toDateString().substring(4);
}