import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import Image from 'next/image';
import photoIcon from '../../public/images/blue-market.svg';
import avatar from '../../public/images/profile-image.jpg';

export default function PostEditor() {
	const session = useSession();
	const { name, email } = session?.data?.user || {};

	useEffect(() => {
		if (session?.data) {
			console.log('data', session.data);
		}
	}, [session?.data]);

	return (
		<div className="flex flex-col gap-3 border rounded-lg p-3 bg-white shadow">
			<div className="flex gap-2">
				<div className="m-auto text-center">
					<Image
						src={avatar}
						alt="user-avatar"
						className="rounded-full"
						height={40}
						width={40}
					/>
				</div>
				<div className="w-full m-auto">
					<input
						id="post"
						placeholder={`What's on your mind, ${name?.split(' ')[0]}?`}
						className="w-full outline-none focus:outline-blue-500 bg-gray-100 rounded-full p-2"
					/>
				</div>
			</div>
			<hr className="" />
			<div className="flex justify-around">
				<div className="flex gap-2">
					<Image src={photoIcon} alt="image-icon" height={20} width={20} />
					video
				</div>
				<div className="flex gap-2">
					<Image src={photoIcon} alt="image-icon" height={20} width={20} />
					video/image
				</div>
				<div className="flex gap-2">
					<Image src={photoIcon} alt="image-icon" height={20} width={20} />
					post button
				</div>
			</div>
		</div>
	);
}
