import {
	createStyles,
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import Link from 'next/link';
import image from './image.svg';

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing.xl * 1,
		paddingBottom: theme.spacing.xl * 1,
	},

	content: {
		maxWidth: 480,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 44,
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan('xs')]: {
			fontSize: 28,
		},
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	highlight: {
		position: 'relative',
		backgroundColor: theme.fn.variant({
			variant: 'light',
			color: theme.primaryColor,
		}).background,
		borderRadius: theme.radius.sm,
		padding: '4px 12px',
	},
}));

export function Hero() {
	const { classes } = useStyles();
	return (
		<div>
			<Container>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							{/* A <span className={classes.highlight}>modern</span>{' '}
							React <br /> components library */}
							<span className={classes.highlight}>dUni</span> -
							Decentralized University.
						</Title>
						<Text color='dimmed' mt='md'>
							dUni is a decentralized university that allows you
							to create your own courses, recruit students, and
							conduct live classes.
						</Text>

						<List
							mt={30}
							spacing='sm'
							size='sm'
							icon={
								<ThemeIcon size={20} radius='xl'>
									<IconCheck size={12} stroke={1.5} />
								</ThemeIcon>
							}
						>
							<List.Item>
								<b>Learning made easy</b> – We provide a
								user-friendly interface that allows you to
								create courses, enroll students, and use the
								content library. All your course materials are
								stored in the decentralized storage so there is
								no need to worry about hosting costs.
							</List.Item>
							<List.Item>
								<b>An NFT degree certificate</b> – dUni provides
								an NFT degree certificate which is recognized
								globally and can be verified on the blockchain.
								You can also upgrade it with a customized
								design.
							</List.Item>
							<List.Item>
								<b>The future of education</b> – dUni's key
								features include live classes,
								student-to-student interaction, and self-paced
								learning - giving you the chance to become
								anything you want!
							</List.Item>
						</List>

						<Group mt={30}>
							<Link href='/home'>
								<Button
									radius='xl'
									size='md'
									className={classes.control}
								>
									Get started
								</Button>
							</Link>

							<Link href='https://github.com/Suhel-Kap/dUni'>
								<Button
									variant='default'
									radius='xl'
									size='md'
									className={classes.control}
								>
									Source code
								</Button>
							</Link>
						</Group>
					</div>
					<Image src={image.src} className={classes.image} />
				</div>
			</Container>
		</div>
	);
}
