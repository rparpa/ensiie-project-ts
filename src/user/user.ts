export class User {
    public readonly id: number;

    public readonly firstname: string;

    public readonly lastname: string;

    public readonly birthday: Date;

    public constructor(id: number, firstname: string, lastname: string, birthday: Date) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
    }

    public getAge(): number {
        const now = new Date();

        if (now < this.birthday) {
            throw new RangeError('Birthday in the future');
        }

        const ageDifMs = Date.now() - this.birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}