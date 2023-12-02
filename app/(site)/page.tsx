import React from 'react';

import Navbar from '../components/navbar/Navbar';
import UserInfoPanel from './components/UserInfoPanel';
import PostReel from './components/PostReel';
import ChatsList from './components/ChatsList';

const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="flex m-auto p-4">
				<div className="w-full">
					<PostReel />
				</div>
				<div className="hidden sm:block border-2 w-2/5 max-w-[350px]">
					<ChatsList />
				</div>
			</div>
		</div>
	);
};

export default Home;
