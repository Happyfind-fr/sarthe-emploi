export default class Formatter {

    constructor() {

    };
    async textEscaper(array: any[]) {        
        return Object.keys(array).map((obj,index) => { return "$"+(index+1) }).join(',');
    }
    async jobsProvidersDataFormatter() {
        // TODO: create format function for jobs providers data wich converts into db like data
    }
}