import { Container } from '@mantine/core';
import Head from 'next/head';
import { CreateCourse } from '../Components/CreateCourse/CreateCourse';
import { Layout } from '../Components/Layout/Layout';

export default function Home() {
	return (
		<div>
			<Layout>
				<Head>
					<title>Create Project</title>
				</Head>
				<Container size={'xs'}>
					<CreateCourse />
				</Container>
			</Layout>
		</div>
	);
}
