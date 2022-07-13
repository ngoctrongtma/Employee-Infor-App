
export interface Employee {
    id: number;
    name: String;
    email: String;
    phone: String;
    website: String;
    address: {
        city: String,
        street?: String
    };
}
