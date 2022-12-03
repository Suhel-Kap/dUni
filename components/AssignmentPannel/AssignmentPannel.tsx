import {
	Badge,
	Button,
	Center,
	Grid,
	Group,
	Modal,
	Paper,
	Text,
	Title,
	useMantineTheme,
} from '@mantine/core';
import { IconPencil } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useContract } from '../../hooks/useContract';
import { DropzoneButton } from '../DropzoneButton/DropzoneButton';

export function AssignmentPannel() {
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();
	const router = useRouter()
	const {getAssignmentIds, getAssignment} = useContract()

	const [data, setData] = useState<any>([])

	useEffect(() => {
		if (router.query.id) {
			fetchAssignments()
		}
	}, [router.query.id])

	const fetchAssignments = async () => {
		const id = router.query.id
		if (typeof id === "string") {
			const ids = await getAssignmentIds(parseInt(id))
			const data = await Promise.all(ids.map(async (id: any) => {
				const res = await getAssignment(parseInt(id))
				const data = await fetch(`https://${res}.ipfs.nftstorage.link`)
				const json = await data.json()
				console.log(json)
				return json
			}))
			setData(data)
		}
	}
	// const data = [
	// 	{
	// 		title: 'PDS Assignment',
	// 		description:
	// 			'Hey there!I have a lot of experience in management and I think I am the best fit for this position :)',
	// 		dueDate: '12/12/2020',
	// 	},
	// 	{
	// 		title: 'Pattric Collins',
	// 		description:
	// 			'Hey! I have done a lot of stuff in digital marketing and I think I am the best fit for this position :)',
	// 		dueDate: '12/12/2020',
	// 	},
	// 	{
	// 		title: 'Andy Samberg',
	// 		description:
	// 			'Hey! I have done a lot of stuff in digital marketing and I think I am the best fit for this position :)',
	// 		dueDate: '12/12/2020',
	// 	},
	// ];

	const assignments = data.map((item: any) => (
		<>
			<Paper shadow='sm' radius='lg' mt={20} p='lg' withBorder>
				<Group position='apart'>
					<Title order={2}>{item.name}</Title>
				</Group>

				<Grid justify=''>
					<Grid.Col span={7}>
						<Text>{item.description}</Text>
					</Grid.Col>

					<Grid.Col span={3} offset={2}>
						<Button
							radius='md'
							variant='light'
							color='green'
							ml={20}
							mt={20}
							onClick={() => setOpened(true)}
						>
							Submit Assignment
						</Button>
					</Grid.Col>
				</Grid>
			</Paper>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				overlayColor={
					theme.colorScheme === 'dark'
						? theme.colors.dark[9]
						: theme.colors.gray[2]
				}
				overlayOpacity={0.55}
				overlayBlur={3}
				centered
			>
				<Title order={3} mb={20} align='center'>
					Submit Your Work
				</Title>
				<DropzoneButton />
			</Modal>
		</>
	));

	return (
		<>
			<Group p='lg'>
				<Text ml={10} mt={32}>
					<IconPencil size={32} />
				</Text>
				<Title mt={30}>Assignment</Title>
			</Group>
			<Grid justify='center'>
				<Grid.Col span={8}>{assignments}</Grid.Col>
			</Grid>
		</>
	);
}
