import React from 'react';

import PostReel from './components/PostReel';
import ChatsList from './components/ChatsList';

async function Home({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full border-2">
			<div className="w-full h-full m-auto">
				<div className="flex justify-between m-auto p-4 h-full max-w-[1200px] gap-4">
					<div className="flex m-auto w-full h-full max-w-[780px] min-w-[450px]">
						<div className="w-full">
							<PostReel />
						</div>
					</div>
					<div className="hidden md-lg:flex min-w-[350px]">
						<div className="hidden md-lg:flex w-full">
							<ChatsList />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
