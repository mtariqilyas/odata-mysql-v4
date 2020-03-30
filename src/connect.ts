import * as mysql from "mysql";
import promisify from "./utils/promisify";

const config: mysql.IConnectionConfig = <mysql.IConnectionConfig>{
    "host": "database-1.co724hnza5vm.us-east-1.rds.amazonaws.com",
    "user": "admin",
    "password": "database123",
    "database": "database-1"
};

let connection = null;

export async function connect() {
    return connection || (connection = promisify(await mysql.createConnection(config)));
};


export function formatSql(sql, params){

    return mysql.format(sql, params);
}