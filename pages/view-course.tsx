import { Tabs } from '@mantine/core';
import {
	IconSchool,
	IconUsers,
	IconBook,
	IconPencil,
	IconDeviceTv,
	IconPaperclip,
	IconTarget,
} from '@tabler/icons';
import { AssignmentPannel } from '../components/AssignmentPannel/AssignmentPannel';
import { CourseInfoPannel } from '../components/CourseInfoPannel/CourseInfoPannel';
import { CreateAssignment } from '../components/CreateAssignment/CreateAssignment';
import { Layout } from '../components/Layout/Layout';
import { LiveClassesPannel } from '../components/LiveClassesPannel/LiveClassesPannel';
import { ProffPannel } from '../components/ProffPannel/ProffPannel';
import { SubmissionPannel } from '../components/SubmissionPannel/SubmissionPannel';

export default function Home() {
	return (
		<>
			<Layout>
				<Tabs defaultValue='first'>
					<Tabs.List>
						<Tabs.Tab value='first' icon={<IconSchool size={18} />}>
							Home
						</Tabs.Tab>
						<Tabs.Tab value='second' icon={<IconUsers size={18} />}>
							Teachers
						</Tabs.Tab>
						<Tabs.Tab value='third' icon={<IconPencil size={18} />}>
							Assignments
						</Tabs.Tab>
						<Tabs.Tab
							value='fourth'
							icon={<IconPaperclip size={18} />}
						>
							Create Assignment
						</Tabs.Tab>
						<Tabs.Tab value='fifth' icon={<IconTarget size={18} />}>
							View Submission
						</Tabs.Tab>
						<Tabs.Tab
							value='sixth'
							icon={<IconDeviceTv size={18} />}
							ml='auto'
						>
							Live Classes
						</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value='first'>
						<CourseInfoPannel
							courseName={'Data Science'}
							image={
								'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
							}
							description={
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere pariatur numquam, quisquam recusandae repellendus dolorem ducimus facilis at repudiandae quia accusamus sint totam rerum suscipit nulla quidem eveniet nam enim! Nobis quos a dolorem blanditiis placeat? Iure sunt deserunt aperiam libero dolorum necessitatibus ad minima tenetur expedita odit possimus dignissimos numquam, facere similique exercitationem delectus. Incidunt exercitationem quaerat ut natus! Porro, laborum atque! Reiciendis labore perferendis obcaecati doloremque, suscipit facere alias perspiciatis? Eius neque tenetur illo tempora alias! Nulla nostrum rem optio a fuga praesentium dicta. Doloremque fugiat eos incidunt! Ratione repellendus eligendi quisquam eum accusantium esse obcaecati rerum praesentium consectetur, molestiae suscipit natus tempore consequatur quidem sapiente libero nihil? Nesciunt accusantium odit quidem. Distinctio veniam ullam obcaecati doloribus tenetur! Labore rem id eos aperiam minus suscipit, nisi veritatis accusantium amet quae nemo incidunt necessitatibus dolore culpa vitae natus itaque nulla blanditiis molestiae sit voluptates quasi fuga provident. Dolorem, blanditiis.'
							}
						/>
					</Tabs.Panel>

					<Tabs.Panel value='second'>
						<ProffPannel />
					</Tabs.Panel>

					<Tabs.Panel value='third'>
						<AssignmentPannel />
					</Tabs.Panel>

					<Tabs.Panel value='fourth'>
						<CreateAssignment />
					</Tabs.Panel>

					<Tabs.Panel value='fifth'>
						<SubmissionPannel />
					</Tabs.Panel>

					<Tabs.Panel value='sixth'>
						<LiveClassesPannel />
					</Tabs.Panel>
				</Tabs>
			</Layout>
		</>
	);
}
