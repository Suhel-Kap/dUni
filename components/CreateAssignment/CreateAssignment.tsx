import {
	Paper,
	TextInput,
	Title,
	Text,
	Textarea,
	Center,
	Group,
	Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconFile, IconPaperclip, IconPin, IconUsers } from '@tabler/icons';

export function CreateAssignment() {
	const form = useForm({
		initialValues: {
			assignmentName: '',
			description: '',
		},
	});

	return (
		<div>
			<Group p='lg'>
				<Text ml={10} mt={32}>
					<IconPaperclip size={32} />
				</Text>
				<Title mt={30}>Create Assignment</Title>
			</Group>
			<Center>
				<Paper
					shadow='sm'
					radius='lg'
					mt={20}
					p='lg'
					withBorder
					w={700}
				>
					<Title my={'sm'} order={4}>
						Assignment Name <span style={{ color: 'red' }}>*</span>
					</Title>
					<TextInput
						placeholder='Assignment Name'
						required
						{...form.getInputProps('assignmentName')}
					/>
					<Title my={'sm'} order={4}>
						Assignment Discription
						<span style={{ color: 'red' }}>*</span>
					</Title>
					<Textarea
						autosize={true}
						minRows={3}
						maxRows={12}
						placeholder='Add your assignment discription'
						{...form.getInputProps('description')}
					/>
					<Button mt={20}>Submit</Button>
				</Paper>
			</Center>
		</div>
	);
}
