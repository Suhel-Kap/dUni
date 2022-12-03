import {
	Button,
	Grid,
	Group,
	Paper,
	SimpleGrid,
	Title,
	useMantineTheme,
	Text,
	Image,
	Modal,
} from '@mantine/core';
import { IconSchool, IconBook2, IconBooks, IconCamera } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useContract } from '../../hooks/useContract';

interface CourseInfoPannelProps {
	courseName: string;
	image: string;
	description: string;
}

export function CourseInfoPannel({
	courseName,
	image,
	description,
}: CourseInfoPannelProps) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const {getStream} = useContract()
	const router = useRouter()
	const [streamKey, setStreamKey] = useState(null);

	useEffect(() => {
		(async() => {
			const id = router.query.id
			if (typeof id === "string") {
				const key = await getStream(parseInt(id))
				setStreamKey(key)
			}
		})()
	}, [router.query]);
	return (
		<>
			<Paper shadow='sm' radius='lg' mt={20} p='md' withBorder>
				<SimpleGrid
					cols={2}
					spacing='md'
					breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
				>
					<Grid gutter='md'>
						<Grid.Col>
							<Group>
								<Text ml={10} mt={32}>
									<IconBooks size={42} />
								</Text>
								<Title mt={30}>{courseName}</Title>
							</Group>
						</Grid.Col>
						<Grid.Col>
							<Text align='justify' fz='lg' px={20}>
								{description}
							</Text>
						</Grid.Col>
					</Grid>

					<Grid gutter='md' mt={0} mx={20} justify='flex-end'>
						<Button
							variant='outline'
							color='indigo'
							radius='lg'
							size='md'
							mt={20}
							leftIcon={<IconCamera />}
							onClick={() => setOpened(true)}
						>
							Start Live Class
						</Button>

						<Modal
							opened={opened}
							onClose={() => setOpened(false)}
							centered
							title='Start Live Class'
						>
							<Text>
								Stream URL: rtmp://rtmp.livepeer.com/live
							</Text>

							<Text>
								Stream key:{' '}
								{streamKey ? streamKey : 'Please wait...'}
							</Text>
						</Modal>

						<Image
							height={360}
							mt={20}
							radius='md'
							// src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
							src={image}
						/>
					</Grid>
				</SimpleGrid>
			</Paper>
		</>
	);
}
