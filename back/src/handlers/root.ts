
import { User } from '../database/models';
export default async (req: any, res: any) => {
    const getAllUsers = new User({}).getAllUsers();
    // const getUserById = new User({ id: 71 }).getUserById('firstName')
    // const updateUser = new User({ id: 2, firstName: "ojd", lastName: "bruno", email: "burono" }).updateUser()
    // const createUser = new User({ lastName: "test", email: "m@gkk.fr", firstName: "jean", password: "ttest" }).createUser()
    // const deleteUser = new User({ id: 71 }).deleteUser()
    res.send({ getAllUsers: await getAllUsers })
    // res.send({ getUserById: await getUserById })
    // res.send({ results: await deleteUser })
    // res.send({ results: await updateUser })

};