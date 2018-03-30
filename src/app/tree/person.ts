export class Person {
    public id: number = 1;
    public name: string;
    public phone: number;
    public children: Array<any> = [];
}

export class PersonList {
    members: Array<Person> = [];
}
