import { CoffeeClient } from '../../index.js';
import { EventInterface } from '../../types.js';
import { logger } from '../../components/exports.js';
import { Events } from 'discord.js';

const event: EventInterface = {
	name: Events.ClientReady,
	options: { once: true, rest: false },
	execute: async (client: CoffeeClient) => {
		logger.info(`Client Ready.`);
	},
};

export default event;
