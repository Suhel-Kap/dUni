import { z } from 'zod';

export const schema = z.object({
	username: z
		.string()
		.min(3, { message: 'Username name should have at least 3 characters' })
		.max(24, {
			message: 'Username should not be longer than 24 characters',
		}),
	bio: z.string().max(300, {
		message: 'Bio should be shorter than 300 characters',
	}),
});
