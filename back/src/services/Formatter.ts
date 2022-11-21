export default class Formatter {

    constructor() {

    };
    async textEscaper(str: string) {
        let escaped = str;
        escaped = str.replace(/'/g, "\\");
        //@ts-ignore
        escaped = escaped.replaceAll('"', "'");
        return escaped;
    }
    async jobsProvidersDataFormatter() {
        // TODO: create format function for jobs providers data wich converts into db like data
    }
}