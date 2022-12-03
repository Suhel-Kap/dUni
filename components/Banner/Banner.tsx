import {
	createStyles,
	Card,
	Avatar,
	Text,
	Button,
	Center,
	Stack,
	Modal,
} from '@mantine/core';
import {
	IconEdit,
} from '@tabler/icons';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import { CreateUser } from '../CreateUser/CreateUser';
import {useAccount} from "wagmi";
import useLens from "../../hooks/useLens";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	avatar: {
		border: `2px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
		}`,
	},
}));

interface UserCardImageProps {
	image?: string;
	avatar?: string;
	name?: string;
	stats?: any;
	website?: string;
	twitter?: string;
	github?: string;
	designation?: string;
	isOwner?: boolean;
	profId?: string;
}

export function Banner({
	isOwner,
}: UserCardImageProps) {
	const { classes, theme } = useStyles();
	const [stats, setStats] = useState<any>();
	const [opened, setOpened] = useState(false);
	const {address, isConnected, isDisconnected, status} = useAccount();
	const {getProfile} = useLens()

	const router = useRouter();
	useEffect(() => {
		if(isDisconnected){
			alert("Please connect your wallet")
			router.push("/")
		}
		console.log("rq",router.query)
		if(router.query.address === undefined){
			return
		}
		const fetchProfile = async () => {
			const res = await getProfile(router.query.address as string)
			console.log("res", res)
			setStats(res)
		}
		fetchProfile()
	}, [isConnected, isDisconnected, router.isReady, router.query])
	return (
		<Card p='xl' className={classes.card}>
			<Avatar
				src={stats?.picture}
				size={160}
				radius={80}
				m='auto'
				className={classes.avatar}
			/>
			<Text align='center' size='lg' weight={500} mt='sm'>
				{stats?.handle || "..."}
			</Text>

			{isOwner &&
				<>
					<Stack m={'md'}>
						<Center mb={0}>
							<Button
								radius='md'
								mt='xl'
								size='md'
								fullWidth={false}
								variant='gradient'
								gradient={{ from: 'indigo', to: 'cyan' }}
								color={
									theme.colorScheme === 'dark'
										? undefined
										: 'dark'
								}
								// onClick={() => {
								// 	handleFollow();
								// }}
								onClick={() => {
									setOpened(true);
								}}
								leftIcon={<IconEdit />}
							>
								Edit Profile
							</Button>
						</Center>
					</Stack>

					<Modal
						opened={opened}
						onClose={() => setOpened(false)}
						size='lg'
					>
						<CreateUser />
					</Modal>
				</>}
		</Card>
	);
}
