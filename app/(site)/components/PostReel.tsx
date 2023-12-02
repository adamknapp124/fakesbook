'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const PostReel = () => {
	const session = useSession();
	const { name, email } = session?.data?.user || {};

	useEffect(() => {
		if (session?.data) {
			console.log('data', session.data);
		}
	}, [session?.data]);

	return (
		<div>
			{name} - {email}
		</div>
	);
};

export default PostReel;
