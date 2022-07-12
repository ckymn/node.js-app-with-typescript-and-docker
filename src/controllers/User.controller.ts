import User, { IUser } from "../models/User.model";

interface ICreateUserInput {
    email: IUser["email"];
    firtName: IUser["firstName"];
    lastName: IUser["lastName"];
}

const CreateUser = async (input: ICreateUserInput): Promise<IUser> => {
    return User.create(input)
        .then((data: IUser) => {
            return data;
        })
        .catch((err: Error) => {
            throw {
                status: 500,
                message: err?.message || "Internal Server Error",
            }
        })
}

export default {
    CreateUser
}