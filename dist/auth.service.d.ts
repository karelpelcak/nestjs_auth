import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        username: string;
        email: string;
        verified: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
