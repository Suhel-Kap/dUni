import { createStyles, Group, Header, Title } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ActionToggle } from '../ActionToggle/ActionToggle';

const useStyles = createStyles((theme) => ({
	title: {
		cursor: 'pointer',
		[theme.fn.smallerThan('md')]: {
			fontSize: theme.fontSizes.xl,
		},
	},

	headBackColor: {
		backgroundColor: '#003049',
	},
}));

export function SimpleHeader() {
	const { classes, theme } = useStyles();

	return (
		<Header
			height={100}
			p='md'
			className={classes.headBackColor}
			sx={{ borderWidth: 0 }}
		>
			<Group position='apart' p={'md'} sx={{ height: '100%' }}>
				<Group>
					<Title order={1} className={classes.title} color='white'>
						dUni
					</Title>
				</Group>
				<Group>
					<ConnectButton
						accountStatus={{
							smallScreen: 'avatar',
							largeScreen: 'full',
						}}
						showBalance={false}
					/>
					<ActionToggle />
				</Group>
			</Group>
		</Header>
	);
}
