import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findByEmail(email: string): Promise<User | undefined>;
    findByUsername(username: string): Promise<User | undefined>;
    create(userData: Partial<User>): Promise<User>;
    findById(id: number): Promise<User | undefined>;
}
