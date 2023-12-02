import searchIcon from '@/public/images/search-icon.svg';
import threeDotMenu from '@/public/images/three-dots-icon.svg';

import Image from 'next/image';

const ChatsList = () => {
	return (
		<div className="flex mt-12 border-2 w-full">
			<div className="w-full">
				<div className="px-3 py-2 flex items-center justify-between w-full">
					<div className="text-md font-semibold text-gray-500">Contacts</div>
					<div className="flex gap-2">
						<div className="flex justify-center rounded-full hover:bg-slate-200 w-8 h-8 hover:cursor-pointer">
							<Image
								alt="search-icon"
								src={searchIcon}
								width={16}
								height={16}
							/>
						</div>
						<div className="flex justify-center rounded-full hover:bg-slate-200 w-8 h-8 hover:cursor-pointer">
							<Image
								alt="menu-icon"
								src={threeDotMenu}
								width={16}
								height={16}
							/>
						</div>
					</div>
				</div>
				<div className="px-3">Users</div>
			</div>
		</div>
	);
};

export default ChatsList;
