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
} from '@mantine/core';
import { IconSchool, IconBook2, IconBooks } from '@tabler/icons';
import Link from 'next/link';

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

					<Grid gutter='md' mt={60} mx={20} justify='flex-end'>
						{/* <Link href='/create-course'>
							<Button
								variant='outline'
								color='indigo'
								radius='lg'
								size='md'
								mt={20}
								leftIcon={<IconBook2 />}
							>
								Create Course
							</Button>
						</Link> */}

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
