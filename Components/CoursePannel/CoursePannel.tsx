import { Group, Title, Text, Paper, Grid } from '@mantine/core';
import { IconBook, IconBook2, IconUsers } from '@tabler/icons';
import { CourseCard } from '../CoursesCard/CoursesCard';

export function CoursePannel() {
	return (
		<div>
			<Group p='lg'>
				<Text ml={10} mt={32}>
					<IconBook size={32} />
				</Text>
				<Title mt={30}>Courses Offered</Title>
			</Group>
			<Paper shadow='sm' radius='lg' mt={20} p='lg' withBorder>
				<Grid p={10}>
					<Grid.Col span={4} px={10}>
						<CourseCard />
					</Grid.Col>
					<Grid.Col span={4} px={10}>
						<CourseCard />
					</Grid.Col>
					<Grid.Col span={4} px={10}>
						<CourseCard />
					</Grid.Col>
				</Grid>
			</Paper>
		</div>
	);
}
