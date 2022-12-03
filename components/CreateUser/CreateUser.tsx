import {
	Container,
	Grid,
	Paper,
	TextInput,
	Center,
	Title,
	Textarea,
	Button,
	Group,
} from '@mantine/core';
import { ImageInput } from '../ImageInput/ImageInput';
import { useState } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { schema } from './Schema';

export function CreateUser() {
	const [image, setImage] = useState<File>();

	const form = useForm({
		validate: zodResolver(schema),
		validateInputOnChange: true,
		initialValues: {
			username: '',
			bio: '',
		},
	});

	const handleSubmit = () => {};

	return (
		<Container>
			<Center>
				<Paper
					shadow='sm'
					radius='lg'
					mt={20}
					p='lg'
					withBorder
					w={700}
				>
					<Title align='center' mb={10}>
						Create User
					</Title>
					<Grid justify='center'>
						<Grid.Col span={9}>
							<Title order={4}>
								Username <span style={{ color: 'red' }}>*</span>
							</Title>
							<TextInput
								placeholder='Enter your username'
								required
								{...form.getInputProps('username')}
							/>
						</Grid.Col>

						<Grid.Col span={9}>
							<Title order={4}>
								Bio <span style={{ color: 'red' }}>*</span>
							</Title>
							<Textarea
								placeholder='Your Bio . . . '
								required
								{...form.getInputProps('bio')}
							/>
						</Grid.Col>

						<Grid.Col span={9}>
							<Title order={4} my={5}>
								Profile Image
							</Title>
							<ImageInput
								width={600}
								height={300}
								onChange={setImage}
								value={image}
							/>
						</Grid.Col>

						<Grid.Col span={9}>
							<Group position='right' mt='lg'>
								<Button onClick={() => handleSubmit()}>
									Submit
								</Button>
							</Group>
						</Grid.Col>
					</Grid>
				</Paper>
			</Center>
		</Container>
	);
}
