import { Center, Grid, Title } from '@mantine/core';
import { Layout } from '../Components/Layout/Layout';
import { UniversityCard } from '../Components/UniversityCard/UniversityCard';

export default function Home() {
	return (
		<div>
			<Layout>
				<Center mt={10}>
					<Title>Universities</Title>
				</Center>
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
