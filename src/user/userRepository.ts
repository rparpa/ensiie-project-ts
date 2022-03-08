import {Client} from "pg";
import {User} from "./user";

export class UserRepository {
    private readonly client: Client;

    public constructor(client: Client) {
        this.client = client;
    }

    public async fetchAll(): Promise<User[]> {
        const {rows} = await this.client.query('SELECT * FROM "user"');
        return rows.map(row => new User(row.id, row.firstname, row.lastname, new Date(row.birthday)));
    }
}