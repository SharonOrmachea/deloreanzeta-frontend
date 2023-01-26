// definition of the New repository
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { New } from '../entity/New';

@EntityRepository(New)
export class NewRepository extends Repository<New> {
    // custom methods
    async findAll(): Promise<New[]> {
        const news = await this.createQueryBuilder('new')
            .getMany();
        return news;
    }
    async findById(id: number): Promise<New> {
        const neww = await this.createQueryBuilder('new')
            .where('new.id = :id', { id })
            .getOneOrFail();
        return neww;
    }
    async saveNew(neww: New): Promise<New> {
        return await this.save(neww);
    }
    async createNew(neww: New): Promise<New> {
        return await this.create(neww);
    }
    async updateNew(neww: New): Promise<New> {
        return await this.save(neww);
    }
    async deleteNew(neww: New): Promise<New> {
        return await this.remove(neww);
    }
}

export const getNewRepository = () => {
    return getCustomRepository(NewRepository);
}
