import { Request, Response, NextFunction } from 'express';
import { getUserRepository } from '../repositories/UserRepository';

export const checkRole = (roles: Array<String>) => {
	return async (_, res: Response, next: NextFunction) => {
        const userRepository = getUserRepository();

		try {
			const { userId } = res.locals.jwtPayload;
            const { role } = await userRepository.findOneOrFail(userId);
            if (roles.includes(role)) {
                next();
            } else {
                throw new Error('Not Authorized');
            }
		} catch (e) {
			res.status(401).json({ message: e.message });
		}
	};
};
