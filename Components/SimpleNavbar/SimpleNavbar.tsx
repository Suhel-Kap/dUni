import { useState } from 'react';
import {
	Navbar,
	Center,
	Tooltip,
	UnstyledButton,
	createStyles,
	Stack,
} from '@mantine/core';
import {
	TablerIcon,
	IconHome2,
	IconGauge,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconCalendarStats,
	IconUser,
	IconSettings,
	IconBellSchool,
	IconSchool,
	IconBook2,
} from '@tabler/icons';
import { ActionToggle } from '../ActionToggle/ActionToggle';
import Link from 'next/link';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
	link: {
		width: 50,
		height: 50,
		borderRadius: theme.radius.md,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.white,
		opacity: 0.85,

		'&:hover': {
			opacity: 1,
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({
					variant: 'filled',
					color: theme.primaryColor,
				}).background!,
				0.1
			),
			// backgroundColor: '#eef4ed',
		},
	},

	active: {
		opacity: 1,
		'&, &:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({
					variant: 'filled',
					color: theme.primaryColor,
				}).background!,
				0.15
			),
			// backgroundColor: '#eef4ed',
		},
	},
}));

interface NavbarLinkProps {
	icon: TablerIcon;
	label: string;
	active?: boolean;
	onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
	const { classes, cx } = useStyles();
	return (
		<Tooltip label={label} position='right' transitionDuration={0}>
			<UnstyledButton
				onClick={onClick}
				mb={10}
				className={cx(classes.link, { [classes.active]: active })}
			>
				<Icon stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	);
}

const mockdata = [
	{ icon: IconHome2, label: 'Home', link: '/home' },
	{
		icon: IconSchool,
		label: 'Create University',
		link: '/create-university',
	},
	{ icon: IconBook2, label: 'Create Course', link: '/create-course' },
	// { icon: IconCalendarStats, label: 'Releases', link: '/' },
	// { icon: IconUser, label: 'Account', link: '/' },
	// { icon: IconFingerprint, label: 'Security', link: '/' },
	// { icon: IconSettings, label: 'Settings', link: '/' },
];

export function SimpleNavbar() {
	const [active, setActive] = useState(0);
	const { classes, cx } = useStyles();

	const links = mockdata.map((link, index) => (
		<Link href={link.link}>
			<NavbarLink
				{...link}
				key={link.label}
				active={index === active}
				onClick={() => {
					setActive(index);
				}}
			/>
		</Link>
	));

	return (
		<Navbar
			height={'100vh'}
			width={{ base: 80 }}
			p='md'
			sx={(theme) => ({
				// backgroundColor: theme.fn.variant({
				// 	variant: 'filled',
				// 	color: theme.primaryColor,
				// }).background,
				backgroundColor: '#000',
			})}
		>
			<Navbar.Section grow mt={50}>
				<Stack justify='center' spacing={4}>
					{links}
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
