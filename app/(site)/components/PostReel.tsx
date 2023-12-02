'use client';

import PostEditor from '@/app/components/PostEditor';
import PostCard from '@/app/components/PostCard';

const PostReel = () => {
	return (
		<div className="mt-12 flex flex-col gap-4">
			<PostEditor />
			<PostCard />
		</div>
	);
};

export default PostReel;
