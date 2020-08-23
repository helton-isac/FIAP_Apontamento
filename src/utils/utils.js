export default class Utils {
    static dateFormatted(date) {
        const day = ("0" + date.getDate().toString()).slice(-2);
        const month = ("0" + (date.getMonth() + 1).toString()).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}
