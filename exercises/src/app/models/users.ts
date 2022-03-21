export interface IUser {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: Date,
    address: {
        city: string,
        street: string,
        postalCode: string
    },
    role: string,
    username: string,
    profilePhotoUrl: string,
    companies: [
        {
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        },
        {
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        }
    ]
    gender: string
}