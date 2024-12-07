import { User } from '../models/user.model';
import { IUser } from '../interfaces/user.interface';

export class UserService {
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData);
    return await user.save();
  }

  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  }
}
