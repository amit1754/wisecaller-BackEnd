export default class Connection {
    static _con: any;
    static hasConfigurations(): void;
    static getDbConnection(): Promise<any>;
}
