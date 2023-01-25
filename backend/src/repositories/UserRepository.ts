// definition of the User repository
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { User } from '../entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    // custom methods
    findByEmail(email: string) {
        return this.findOneBy({ email });
    }
    findById(id: number) {
        return this.findOneBy({ id });
    }
    async findAll(): Promise<User[]> {
        const users = await this.createQueryBuilder('user')
            .getMany();
        return users;
    }
    async saveUser(user: User): Promise<User> {
        return await this.save(user);
    }
    async createUser(user: User): Promise<User> {
        return await this.create(user);
    }
}

export const getUserRepository = () => {
    return getCustomRepository(UserRepository);
}
