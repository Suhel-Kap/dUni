import {
	Card,
	Image,
	Text,
	Group,
	Badge,
	createStyles,
	Center,
	Button,
	Title,
} from '@mantine/core';
import {
	IconBooks,
	IconFileCertificate,
	IconGasStation,
	IconGauge,
	IconManualGearbox,
	IconUsers,
} from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
	},

	imageSection: {
		padding: theme.spacing.sm,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[4]
				: theme.colors.gray[3]
		}`,
	},

	label: {
		marginBottom: theme.spacing.xs,
		lineHeight: 1,
		fontWeight: 700,
		fontSize: theme.fontSizes.xs,
		letterSpacing: -0.25,
		textTransform: 'uppercase',
	},

	section: {
		padding: theme.spacing.md,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[4]
				: theme.colors.gray[3]
		}`,
	},

	icon: {
		marginRight: 5,
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[2]
				: theme.colors.gray[5],
	},
}));

const mockdata = [
	{ label: '450 students enrolled', icon: IconUsers },
	{ label: '12+ Courses offered', icon: IconBooks },
	{ label: '20+ PHD Prof.', icon: IconFileCertificate },
];

interface UniversityCardProps {
	university_name: string;
	description: string;
	image: string;
}

export function UniversityCard({
	university_name,
	description,
	image,
}: UniversityCardProps) {
	const { classes } = useStyles();
	const features = mockdata.map((feature) => (
		<Center key={feature.label}>
			<feature.icon size={18} className={classes.icon} stroke={1.5} />
			<Text size='xs'>{feature.label}</Text>
		</Center>
	));

	return (
		<Card withBorder radius='md' mt={20} mx={20} className={classes.card}>
			<Card.Section className={classes.imageSection}>
				<Image src={image} alt='University Image' />
			</Card.Section>

			<Group position='apart' mt='md'>
				<div>
					<Title weight={500} order={2}>
						{university_name}
					</Title>
					<Text size='md' color='dimmed'>
						{description}
					</Text>
				</div>
				{/* <Badge variant='outline'>25% off</Badge> */}
			</Group>

			<Card.Section className={classes.section} mt='md'>
				<Text size='sm' color='dimmed' className={classes.label}>
					Basic configuration
				</Text>

				<Group spacing={8} mb={-8}>
					{features}
				</Group>
			</Card.Section>

			<Card.Section className={classes.section}>
				{/* <Group> */}
				{/* <div>
						<Text size='xl' weight={700} sx={{ lineHeight: 1 }}>
							$168.00
						</Text>
						<Text
							size='sm'
							color='dimmed'
							weight={500}
							sx={{ lineHeight: 1 }}
							mt={3}
						>
							per day
						</Text>
					</div> */}

				{/* <Link href='/university'>
						<Button radius='xl' style={{ flex: 1 }} fullWidth>
							View University
						</Button>
					</Link> */}
				{/* </Group> */}
				<Link href='/university'>
					<Button
						radius='xl'
						variant='outline'
						style={{ flex: 1 }}
						fullWidth
						color='indigo'
					>
						View University
					</Button>
				</Link>
			</Card.Section>
		</Card>
	);
}
