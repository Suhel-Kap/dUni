import { Container } from '@mantine/core';
import Head from 'next/head';
import { CreateUniversity } from '../Components/CreateUniversity/CreateUniversity';
import { Layout } from '../Components/Layout/Layout';

export default function Home() {
	return (
		<div>
			<Layout>
				<Head>
					<title>Create University</title>
				</Head>
				<Container size={'xs'}>
					<CreateUniversity />
				</Container>
			</Layout>
		</div>
	);
}
