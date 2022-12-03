import { Layout } from '../components/Layout/Layout';
import { Tabs } from '@mantine/core';
import { IconBook, IconSchool, IconUsers } from '@tabler/icons';
import { UniversityPannel } from '../components/UniversityPannel/UniversityPannel';
import { ProffPannel } from '../components/ProffPannel/ProffPannel';
import { CoursePannel } from '../components/CoursePannel/CoursePannel';
import { Chat } from "@pushprotocol/uiweb";
import {useAccount} from "wagmi";

export default function University() {
	const {address} = useAccount()

	return (
		<div>
			<Layout>
				<Tabs defaultValue='first'>
					<Tabs.List>
						<Tabs.Tab value='first' icon={<IconSchool size={18} />}>
							Home
						</Tabs.Tab>
						<Tabs.Tab value='second' icon={<IconUsers size={18} />}>
							University Admin
						</Tabs.Tab>
						<Tabs.Tab value='third' icon={<IconBook size={18} />}>
							Courses Offered
						</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value='first'>
						<UniversityPannel
							universityName={'Sarvajanik University'}
							image={
								'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
							}
							description={
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quibusdam iste assumenda quis nulla minima voluptatem, eius fuga tempore vitae a soluta nobis adipisci. Commodi nobis eos magnam minus modi! Ex deserunt deleniti consequuntur illo nam! Provident commodi dolorum sed quaerat debitis tempore vero ipsam maiores veritatis facilis, doloribus non odio, aut quasi in suscipit inventore eius ex necessitatibus repellat. Exercitationem voluptates sint expedita cumque quidem ipsa veniam fugit quam ducimus, beatae voluptatum alias? Deleniti molestias recusandae nesciunt culpa blanditiis cupiditate corporis facilis eius laborum, est nisi maiores nulla esse! Impedit quia quo illum ut repellendus beatae nisi quisquam placeat reiciendis cum vitae quod vero ducimus illo fugiat laborum, ratione eligendi aliquam est ipsam provident accusamus? Animi voluptas explicabo fugit. Alias illum cum cupiditate sapiente? Facere iure laboriosam animi vero ea facilis sapiente sed reiciendis cumque minima? Error, ratione dolor quasi, et magni ipsa itaque quo nesciunt voluptas, voluptatem necessitatibus.'
							}
						/>
					</Tabs.Panel>

					<Tabs.Panel value='second'>
						<ProffPannel />
					</Tabs.Panel>

					<Tabs.Panel value='third'>
						<CoursePannel />
					</Tabs.Panel>
				</Tabs>
				<Chat
					// @ts-ignore
					account={address} //user address
					supportAddress="0x9e03C44b5A09db89bf152F8C5500dF3360c1C5bF" //support address
					apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
					env="staging"
				/>
			</Layout>
		</div>
	);
}
