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
    role: Role,
    username: string,
    profilePhotoUrl: string,
    gender: Gender
}

export enum Role {
    STAFF = "Staff",
    STUDENT = "Student",
    MANAGER = "Manager",
    ADMIN = "Admin"
}

export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "Other"
}