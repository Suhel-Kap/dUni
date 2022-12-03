import {
	Group,
	Title,
	Text,
	Accordion,
	Avatar,
	Paper,
	ScrollArea,
	Table,
} from '@mantine/core';
import { IconPencil, IconPlus, IconTarget } from '@tabler/icons';
import makeBlockie from 'ethereum-blockies-base64';
import { Container } from 'tabler-icons-react';
import { Button } from '../Button/Button';

export function SubmissionPannel() {
	const data = [
		{
			title: 'PDS Assignment',
			marks: [
				{
					address: '0x044B595C9b94A17Adc489bD29696af40ccb3E4d2',
					grade: '78',
				},
				{
					address: '0x044B595C9b94A17Adc489bD29696af40ccb3E4d1',
					grade: '85',
				},
				{
					address: '0x044B595C9b94A17Adc489bD29696af40ccb3E4d3',
					grade: '61',
				},
			],
		},
		{
			title: 'ADA Assignment',
			marks: [
				{
					address: '0x044B595C9b94A17Adc489bD29696af40ccb3E4d2',
					grade: '78',
				},
				{
					address: '0x044B595C9b94A17Adc489bD29696af40ccb3E4d1',
					grade: '85',
				},
				{
					address: '0x044B595C9b94A17Adc489bD29696af40ccb3E4d3',
					grade: '61',
				},
			],
		},
	];

	const assignments = data.map((item) => (
		<>
			<Accordion.Item value={item.title}>
				<Accordion.Control>
					<Title order={4}>{item.title}</Title>
				</Accordion.Control>
				<Accordion.Panel>
					{item.marks.map((mark) => (
						<>
							<Paper
								shadow='sm'
								radius='lg'
								mt={20}
								p='lg'
								withBorder
							>
								<ScrollArea>
									<Table
										sx={{ minWidth: 800 }}
										verticalSpacing='md'
									>
										<tbody>
											<tr>
												<th>
													<Text align='left'>
														Student Address
													</Text>
												</th>
												<th>
													<Text align='left'></Text>
												</th>
												<th>
													<Text align='left'></Text>
												</th>
												<th>
													<Text align='left'>
														Grade
													</Text>
												</th>
											</tr>
											<tr key={mark.address}>
												<td>
													<Group spacing='sm'>
														<Avatar
															size={40}
															src={makeBlockie(
																mark.address
															)}
															radius={40}
														/>
														<div>
															<Text
																size='md'
																weight={500}
															>
																{mark.address}
															</Text>
														</div>
													</Group>
												</td>
												<td>
													<Button>
														View Submission
													</Button>
												</td>
												<td>
													<Button>
														Assign Grades
													</Button>
												</td>
												<td>
													<Text size='md'>
														{mark.grade}
													</Text>
												</td>
											</tr>
										</tbody>
									</Table>
								</ScrollArea>
							</Paper>
						</>
					))}
				</Accordion.Panel>
			</Accordion.Item>
		</>
	));

	return (
		<>
			<Group p='lg'>
				<Text ml={10} mt={32}>
					<IconTarget size={32} />
				</Text>
				<Title mt={30}>Assignment</Title>
			</Group>

			<Accordion
				chevron={<IconPlus size={16} />}
				transitionDuration={1000}
				styles={{
					chevron: {
						'&[data-rotate]': {
							transform: 'rotate(45deg)',
						},
					},
				}}
			>
				{assignments}
			</Accordion>
		</>
	);
}
