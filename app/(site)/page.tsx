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
			<div className="flex justify-between max-w-[980px] m-auto">
				<div className="hidden md:block">
					<UserInfoPanel />
				</div>
				<div>
					<PostReel />
				</div>
				<div className="hidden sm:block">
					<ChatsList />
				</div>
			</div>
		</div>
	);
};

export default Home;
