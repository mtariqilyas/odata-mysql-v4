import * as mysql from "mysql";
import promisify from "./utils/promisify";

const config: mysql.IConnectionConfig = <mysql.IConnectionConfig>{
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "northwind"
};

let connection = null;

export async function connect() {
    return connection || (connection = promisify(await mysql.createConnection(config)));
};


export function formatSql(sql, params){

    return mysql.format(sql, params);
}