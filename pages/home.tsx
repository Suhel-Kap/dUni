import { Center, Grid, Title, Group, Button } from '@mantine/core';
import { IconSchool } from '@tabler/icons';
import Link from 'next/link';
import { Layout } from '../components/Layout/Layout';
import { UniversityCard } from '../components/UniversityCard/UniversityCard';

export default function Home() {
	return (
		<div>
			<Layout>
				<Center>
					<Title>Universities</Title>
				</Center>

				<Group position='right'>
					{/* <Button variant='outline'>1</Button> */}
					<Link href='/create-course'>
						<Button
							variant='outline'
							color='indigo'
							radius='lg'
							size='md'
							mr={20}
							leftIcon={<IconSchool />}
						>
							Create University
						</Button>
					</Link>
				</Group>
				<Grid mt={10}>
					<Grid.Col span={4}>
						<UniversityCard
							university_name={'Sarvajanik University'}
							description={
								'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, perspiciatis ab? Quo provident sint consequatur autem officia placeat aliquid quidem hic est voluptatum quisquam, praesentium natus soluta molestiae commodi eos?'
							}
							image={
								'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxHZk9nSW91dHRPTXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
							}
						/>
					</Grid.Col>

					<Grid.Col span={4}>
						<UniversityCard
							university_name={'University of Alberta'}
							description={
								'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, perspiciatis ab? Quo provident sint consequatur autem officia placeat aliquid quidem hic est voluptatum quisquam, praesentium natus soluta molestiae commodi eos?'
							}
							image={
								'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxHZk9nSW91dHRPTXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
							}
						/>
					</Grid.Col>

					<Grid.Col span={4}>
						<UniversityCard
							university_name={'University of Texas'}
							description={
								'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, perspiciatis ab? Quo provident sint consequatur autem officia placeat aliquid quidem hic est voluptatum quisquam, praesentium natus soluta molestiae commodi eos?'
							}
							image={
								'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxHZk9nSW91dHRPTXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
							}
						/>
					</Grid.Col>
				</Grid>
			</Layout>
		</div>
	);
}
