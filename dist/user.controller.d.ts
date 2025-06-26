import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(userData: Partial<User>): Promise<Omit<User, 'password'>>;
    getUser(id: number): Promise<Omit<User, 'password'> | null>;
}
