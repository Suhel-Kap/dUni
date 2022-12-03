import {
	Stepper,
	Title,
	Text,
	TextInput,
	Input,
	Tooltip,
	Select,
	MultiSelect,
	Stack,
	Group,
	Button,
	Textarea,
	List,
	Code,
	NumberInput,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useListState } from '@mantine/hooks';
import {
	IconAlertCircle,
	IconCurrencyEthereum,
	IconWorldWww,
} from '@tabler/icons';
import { useState } from 'react';
import { AddressInput } from '../AddressInput/AddressInput';
import { GalleryInput } from '../GalleryInput/GalleryInput';
import { ImageInput } from '../ImageInput/ImageInput';
import { MemberList } from '../MemberList/MemberList';
import { NameInput } from '../NameInput/NameInput';
import { schema } from './schema';

export function CreateCourse() {
	const [active, setActive] = useState(0);
	const [image, setImage] = useState<File>();
	const [mainCapsule, setMainCapsule] = useState<File>();
	const [gallery, setGallery] = useState<File[]>([]);
	const [members, membersHandlers] = useListState<string>([]);

	const defaultTypes = ['web', 'native', 'cli'];

	const defaultTags = [
		'Blockchain',
		'Airtificial Intelligence',
		'Machine Learning',
		'Data science',
		'Cryptography',
		'Cyber Security',
		'Web Development',
	];

	const form = useForm({
		validate: zodResolver(schema),
		validateInputOnChange: true,
		initialValues: {
			projectName: '',
			displayName: '',
			website: '',
			description: '',
			shortDescription: '',
			youTubeLink: '',
			tags: [],
			// type: '',
			price: 0,
		},
	});

	const nextStep = () =>
		setActive((current) => {
			// if (form.validate().hasErrors) {
			// 	return current;
			// }
			return current < 4 ? current + 1 : current;
		});

	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	const handleSubmit = async () => {
		console.log('submit');
	};

	return (
		<>
			<Stepper active={active} breakpoint='sm' style={{ marginTop: 75 }}>
				<Stepper.Step my={'sm'} label='Basic Info'>
					<Title mt='lg'>Basic Info</Title>
					<Text color='dimmed'>This is your public course info.</Text>
					<Title my={'sm'} order={4}>
						Course Image
					</Title>
					<ImageInput
						width={600}
						height={300}
						onChange={setImage}
						value={image}
					/>
					<Title my={'sm'} order={4}>
						Course Name (cannot be changed){' '}
						<span style={{ color: 'red' }}>*</span>
					</Title>
					<NameInput
						parentId={'fdsfsf'} // TODO: pass the organisation name here
						required
						placeholder='Unique Account Name'
						{...form.getInputProps('projectName')}
					/>
					<Title my={'sm'} order={4}>
						Display Name <span style={{ color: 'red' }}>*</span>
					</Title>
					<TextInput
						placeholder='Display Name'
						{...form.getInputProps('displayName')}
					/>
					<Title my={'sm'} order={4}>
						Website
					</Title>
					<Input
						icon={<IconWorldWww size={16} />}
						my={'sm'}
						placeholder='Your Website'
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
					{/* <Title my={'sm'} order={4}>
						Type
					</Title>
					<Select
						data={defaultTypes}
						{...form.getInputProps('type')}
						placeholder='Select Type'
						nothingFound='Nothing found'
						searchable
						creatable
						getCreateLabel={(query) => `+ Create ${query}`}
						{...form.getInputProps('type')}
					/> */}
					<Title my={'sm'} order={4}>
						Price
					</Title>
					<NumberInput
						defaultValue={0.05}
						precision={2}
						min={0}
						step={0.01}
						// max={}
						icon={<IconCurrencyEthereum />}
						{...form.getInputProps('price')}
					/>

					<Title my={'sm'} order={4}>
						Tags
					</Title>
					<MultiSelect
						data={defaultTags}
						placeholder='Select tags'
						searchable
						creatable
						getCreateLabel={(query) => `+ Create ${query}`}
						{...form.getInputProps('tags')}
					/>
				</Stepper.Step>

				<Stepper.Step my={'sm'} label='Description'>
					<Stack style={{ maxWidth: 784 }}>
						<Title mt='lg'>Description</Title>
						<Text color='dimmed'>
							Let everyone know about your project.
						</Text>
						<Title order={2}>Short Description</Title>
						<Text color='dimmed'>
							Enter a brief summary of the project. This will be
							displayed on the project card or thumbnail.
						</Text>
						<TextInput
							label='Short Description'
							{...form.getInputProps('shortDescription')}
						/>
						<Title order={2}>Description</Title>
						<Text color='dimmed'>
							Give an extensive overview of your project. This
							will be displayed on your project landing page.
						</Text>
						<Textarea
							label='Description'
							autosize={true}
							minRows={4}
							maxRows={12}
							{...form.getInputProps('description')}
						/>
					</Stack>
				</Stepper.Step>

				<Stepper.Step label='Members'>
					<Stack style={{ maxWidth: 784 }}>
						<Title mt='lg'>Members</Title>
						<Text color={'dimmed'}>
							Members can perform the following actions:
						</Text>
						<List>
							<List.Item>Update course info</List.Item>
							<List.Item>Add or remove course members</List.Item>
							<List.Item>Publish new releases</List.Item>
						</List>
						<Title order={2}>Project Member</Title>
						<AddressInput /* onSubmit={addMember} */ />
						<MemberList
							label='Project Member'
							members={members}
							editable={true}
							// onRemove={removeMember}
						/>
					</Stack>
				</Stepper.Step>

				<Stepper.Step label='Media'>
					<Stack style={{ maxWidth: 784 }}>
						<Title mt='lg'>Media</Title>
						<Text color='dimmed'>
							Show your course with videos and images.
						</Text>
						<Title order={2}>YouTube Link</Title>
						<Text color='dimmed'>Paste a link to your video.</Text>
						<TextInput
							label='YouTube Link'
							{...form.getInputProps('youTubeLink')}
						/>
						<Title order={2}>Header Image</Title>
						<Text color='dimmed'>
							This can be the cover image of your course.
							Recommended size is (616x353).
						</Text>
						<ImageInput
							width={616}
							height={353}
							onChange={setMainCapsule}
							value={mainCapsule}
						/>
						<Title order={2}>Gallery Images</Title>
						<Text color='dimmed'>
							Additional images of your course. Recommended size
							is (1280x720 or 1920x1080).
						</Text>
						<GalleryInput onChange={setGallery} value={gallery} />
					</Stack>
				</Stepper.Step>

				<Stepper.Completed>
					Completed! Form values:
					<Code block mt='xl'>
						{JSON.stringify(form.values, null, 2)}
						{JSON.stringify(members, null, 2)}
					</Code>
				</Stepper.Completed>
			</Stepper>

			<Group position='right' mt='xl'>
				{active !== 0 && (
					<Button variant='default' onClick={prevStep}>
						Back
					</Button>
				)}
				{active !== 4 && <Button onClick={nextStep}>Next step</Button>}
				{active === 4 && (
					<Button onClick={() => handleSubmit()}>Confirm</Button>
				)}
			</Group>
		</>
	);
}
