'use client';

import Image from 'next/image';

import profileImage from '@/public/images/profile-image.jpg';

import closeIcon from '@/public/images/close-icon.svg';
import threeDotsMenu from '@/public/images/three-dots-icon.svg';
import tempImage from '@/public/images/profile-image.jpg';
import thumbIcon from '@/public/images/thumb-icon.svg';

const PostCard = () => {
	return (
		<div className="flex flex-col gap-3 border rounded-lg bg-white shadow mb-12">
			<div className="flex justify-between px-4 pt-3">
				<div className="w-full flex justify-between gap-2">
					<div className="flex gap-2">
						<Image
							src={profileImage}
							alt="profile-image"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div>
							<div className="text-md font-semibold">User name</div>
							<div className="text-sm">When posted</div>
						</div>
					</div>
					<div className="flex gap-4">
						<Image alt="close-icon" src={threeDotsMenu} />
						<Image alt="close-icon" src={closeIcon} />
					</div>
				</div>
			</div>
			<div className="px-4">title</div>
			<div className="w-auto">
				<Image alt="" src={tempImage} className="w-full" />
			</div>
			<div className="flex flex-col gap-2 px-4">
				<div>Names of commentors</div>
				<hr />
				<div className="flex gap-2 justify-around items-center">
					<div className="flex gap-2 items-center hover:bg-[#f0f2f5] w-full justify-center rounded-md">
						<Image alt="thumbs-icon" src={thumbIcon} />
						Like
					</div>
					<div className="flex gap-2 items-center hover:bg-[#f0f2f5] w-full justify-center rounded-md">
						<Image alt="thumbs-icon" src={thumbIcon} />
						Like
					</div>
				</div>
				<hr />
				<div className="flex w-full mb-2">
					<div className="flex gap-1 py-2 w-full">
						<Image
							src={profileImage}
							alt="commentor-image"
							className="rounded-full"
							width={40}
							height={40}
						/>
						<div className="flex w-full">
							<input
								type="text"
								name="comment"
								title="comment"
								placeholder="Write a comment..."
								className="bg-[#f0f2f5] w-full rounded-full px-3 focus:outline-none"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
