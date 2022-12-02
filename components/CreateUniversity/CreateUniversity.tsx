import {
	Button,
	Code,
	Group,
	Input,
	List,
	Stack,
	Stepper,
	TextInput,
	Title,
	Tooltip,
	Text,
} from '@mantine/core';
import { IconWorldWww, IconAlertCircle } from '@tabler/icons';
import { useState } from 'react';
import { ImageInput } from '../ImageInput/ImageInput';
import { NameInput } from '../NameInput/NameInput';
import { useForm, zodResolver } from '@mantine/form';
import { AddressInput } from '../AddressInput/AddressInput';
import { MemberList } from '../MemberList/MemberList';
import { useListState } from '@mantine/hooks';
import { schema } from './Schema';

export function CreateUniversity() {
	const [active, setActive] = useState(0);
	const [image, setImage] = useState<File>();
	const [members, membersHandlers] = useListState<string>([]);

	const form = useForm({
		validate: zodResolver(schema),
		validateInputOnChange: true,
		initialValues: {
			accountName: '',
			displayName: '',
			website: '',
			description: '',
		},
	});

	const nextStep = () =>
		setActive((current) => {
			if (form.validate().hasErrors) {
				return current;
			}
			return current < 3 ? current + 1 : current;
		});

	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	const handleSubmit = () => {};

	return (
		<>
			<Stepper active={active} breakpoint='sm' style={{ marginTop: 75 }}>
				<Stepper.Step
					label='Basic Info'
					description={'This is your public University info.'}
				>
					<Title order={4} my={5}>
						University Image
					</Title>
					<ImageInput
						width={600}
						height={300}
						onChange={setImage}
						value={image}
					/>
					<Title order={4} my={5}>
						University Name (cannot be changed)
						<span style={{ color: 'red' }}> *</span>
					</Title>
					<NameInput
						parentId={80001}
						required
						placeholder='Unique University Name'
						{...form.getInputProps('accountName')}
					/>
					<Title order={4} my={5}>
						Display Name <span style={{ color: 'red' }}>*</span>
					</Title>
					<TextInput
						placeholder='Display Name'
						{...form.getInputProps('displayName')}
					/>
					<Title order={4} my={5}>
						Website
					</Title>
					<Input
						icon={<IconWorldWww size={16} />}
						placeholder='University Website'
						{...form.getInputProps('website')}
						rightSection={
							<Tooltip
								label='This is public'
								position='top-end'
								withArrow
							>
								<div>
									<IconAlertCircle
										size={18}
										style={{
											display: 'block',
											opacity: 0.5,
										}}
									/>
								</div>
							</Tooltip>
						}
					/>
					<Title order={4} my={5}>
						Description
					</Title>
					<TextInput
						placeholder='Description of your University'
						{...form.getInputProps('description')}
					/>
				</Stepper.Step>

				<Stepper.Step
					label='Members'
					description='Members of this organisation'
				>
					<Stack style={{ maxWidth: 784 }}>
						<Title mt='lg'>Members</Title>
						<Text color={'dimmed'}>
							Members can perform the following actions:
						</Text>
						<List>
							<List.Item>Update account info</List.Item>
							<List.Item>Add or remove account members</List.Item>
							<List.Item>Create new projects</List.Item>
							<List.Item>Add or remove project members</List.Item>
							<List.Item>Update project info</List.Item>
							<List.Item>Publish new releases</List.Item>
						</List>
						<Title order={2}>Account Admins</Title>
						<AddressInput /*onSubmit={addMember}*/ />
						<MemberList
							label='Account Admin'
							members={members}
							editable={true}
							// onRemove={removeMember}
						/>
					</Stack>
				</Stepper.Step>
				<Stepper.Completed>
					Completed! Form values:
					{/* <Code block mt='xl'>
						{JSON.stringify(form.values, null, 2)}
						{JSON.stringify(members, null, 2)}
					</Code> */}
				</Stepper.Completed>
			</Stepper>

			<Group position='right' mt='xl'>
				{active !== 0 && (
					<Button variant='default' onClick={prevStep}>
						Back
					</Button>
				)}
				{active !== 2 && <Button onClick={nextStep}>Next step</Button>}
				{active === 2 && (
					<Button onClick={() => handleSubmit()}>Confirm</Button>
				)}
			</Group>
		</>
	);
}
