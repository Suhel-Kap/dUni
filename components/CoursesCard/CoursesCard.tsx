import {
	createStyles,
	Card,
	Image,
	Text,
	Group,
	RingProgress,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	footer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[2]
		}`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
	},
}));

interface CardWithStatsProps {
	image: string;
	title: string;
	description: string;
	stats: {
		title: string;
		value: string;
	}[];
}

export function CourseCard() {
	const { classes } = useStyles();

	const mockData = {
		image: 'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
		title: 'Running challenge',
		description:
			'56 km this month • 17% improvement compared to last month • 443 place in global scoreboard',
		stats: [
			{
				title: 'Distance',
				value: '27.4 km',
			},
			{
				title: 'Avg. speed',
				value: '9.6 km/h',
			},
			{
				title: 'Score',
				value: '88/100',
			},
		],
	};

	const items = mockData.stats.map((stat) => (
		<div key={stat.title}>
			<Text size='xs' color='dimmed'>
				{stat.title}
			</Text>
			<Text weight={500} size='sm'>
				{stat.value}
			</Text>
		</div>
	));

	return (
		<Card withBorder p='lg' className={classes.card} radius='lg'>
			<Card.Section>
				<Image src={mockData.image} alt={mockData.title} height={200} />
			</Card.Section>

			<Group position='apart' mt='xl'>
				<Text size='xl' weight={700} className={classes.title}>
					{mockData.title}
				</Text>
				<Group spacing={5}>
					<Text size='xs' color='dimmed'>
						80% completed
					</Text>
					<RingProgress
						size={18}
						sections={[{ value: 80, color: 'blue' }]}
					/>
				</Group>
			</Group>
			<Text mt='xl' mb='xl' color='dimmed' size='md'>
				{mockData.description}
			</Text>
			<Card.Section className={classes.footer}>{items}</Card.Section>
		</Card>
	);
}
