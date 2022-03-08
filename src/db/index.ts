import {Client} from "pg";

let client: Client | null = null

export async function getClient(): Promise<Client> {
    if (client) {
        return client;
    }

    const localClient = new Client({
        port: 5432,
        host: "postgres",
        password: process.env["DB_PASSWORD"],
        user: process.env["DB_USER"]
    })

    await localClient.connect()

    console.info("Postgres client connected")

    client = localClient

    return client
}