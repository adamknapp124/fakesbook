'use client';

import { useEffect, useState, useRef } from 'react';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import homeIcon from '@/public/images/gray-home.svg';
import videoIcon from '@/public/images/gray-video.svg';
import marketIcon from '@/public/images/gray-market.svg';
import gameIcon from '@/public/images/gray-gaming.svg';

import facebookIcon from '@/public/images/facebook-icon.svg';

import notificationIcon from '@/public/images/notification-icon.svg';
import placeholderAvatar from '@/public/images/user.png';
import messengerIcon from '@/public/images/messenger-icon.svg';

import logoutIcon from '@/public/images/logout.png';
import settingsIcon from '@/public/images/settings.png';
import helpIcon from '@/public/images/help.png';
import moonIcon from '@/public/images/moon.png';
import feedbackIcon from '@/public/images/feedback.png';
import { signOut } from 'next-auth/react';

const Navbar = () => {
	const [desktopNav, setDesktopNav] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);
	const toggleRef = useRef<HTMLDivElement | null>(null);

	const pathname = usePathname();

	const toggleMenu = (event: React.MouseEvent) => {
		event.stopPropagation();
		setOpenMenu((prev) => !prev);
	};

	const handleClick = (event: MouseEvent) => {
		if (
			menuRef.current &&
			!menuRef.current.contains(event.target as Node) &&
			(!toggleRef.current || !toggleRef.current.contains(event.target as Node))
		) {
			setOpenMenu(false);
		}
	};

	const onClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		console.log('clicked');
		setOpenMenu(false);
	};

	useEffect(() => {
		let handleResize = () => {
			if (window.innerWidth > 700) {
				setDesktopNav(true);
			} else {
				setDesktopNav(false);
			}
		};

		handleResize();

		addEventListener('resize', handleResize);
		addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [desktopNav]);

	return (
		<div className="box-border relative flex justify-between px-2 shadow-md">
			<Link href="/" className="hover:scale-105">
				<Image
					alt="facebook-icon"
					src={facebookIcon}
					className="cursor-pointer"
				/>
			</Link>
			{desktopNav && (
				<div className="absolute h-full m-auto max-w-[600px] left-0 right-0 top-0">
					<div className="flex justify-center gap-2 h-full items-center">
						<div
							className={`${
								pathname === '/'
									? 'flex justify-center border-b-4 border-blue-500'
									: 'flex justify-center'
							}`}>
							<Link
								href="/"
								className="hover:bg-gray-200 rounded-lg cursor-pointer px-10 py-2">
								<Image alt="homeIcon" src={homeIcon} className="h-6 w-6" />
							</Link>
						</div>
						<div
							className={`${
								pathname === '/video'
									? 'flex justify-center border-b-4 border-blue-500'
									: 'flex justify-center'
							}`}>
							<Link
								href="/video"
								className=" hover:bg-gray-200 rounded-lg cursor-pointer px-10 py-2">
								<Image alt="homeIcon" src={videoIcon} className="h-6 w-6" />
							</Link>
						</div>
						<div
							className={`${
								pathname === '/market'
									? 'flex justify-center border-b-4 border-blue-500'
									: 'flex justify-center'
							}`}>
							<Link
								href="/market"
								className=" hover:bg-gray-200 rounded-lg cursor-pointer px-10 py-2">
								<Image alt="homeIcon" src={marketIcon} className="h-6 w-6" />
							</Link>
						</div>
						<div
							className={`${
								pathname === '/games'
									? 'flex justify-center border-b-4 border-blue-500'
									: 'flex justify-center'
							}`}>
							<Link
								href="/games"
								className=" hover:bg-gray-200 rounded-lg cursor-pointer px-10 py-2">
								<Image alt="homeIcon" src={gameIcon} className="h-6 w-6" />
							</Link>
						</div>
					</div>
				</div>
			)}
			<div className="flex items-center gap-2 pr-2">
				<div className="flex items-center justify-center h-10 w-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 cursor-pointer hover:scale-105">
					<Image
						alt="notification-icon"
						src={messengerIcon}
						className="h-4 w-4"
					/>
				</div>
				<div className="flex items-center justify-center h-10 w-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 cursor-pointer hover:scale-105">
					<Image
						alt="notification-icon"
						src={notificationIcon}
						className="h-4 w-4"
					/>
				</div>
				<div
					className="relative flex items-center justify-center"
					ref={toggleRef}>
					<Image
						alt="placeholder-avatar"
						src={placeholderAvatar}
						className="h-10 w-10 cursor-pointer hover:scale-105"
						onClick={toggleMenu}
					/>
					{openMenu && (
						<div
							className="absolute top-11 right-4 z-10 bg-white min-w-fit border-s full-shadow rounded-md shadow-lg py-2 px-2 flex flex-col gap-2"
							ref={menuRef}>
							<div className="flex flex-col gap-1 shadow-lg full-shadow border-neutral-200 rounded-lg p-1">
								<div
									className="flex w-[275px] items-center gap-4 p-2 hover:bg-neutral-100 cursor-pointer rounded-md"
									onClick={onClick}>
									<div className="h-10 w-10">
										<Image
											alt="placeholder-avatar"
											src={placeholderAvatar}
											className=""
										/>
									</div>
									<div className="cursor-default">Adam Knapp</div>
								</div>
								<hr />
								<div
									className="font-semibold text-sm text-blue-600 cursor-pointer hover:bg-neutral-100 p-3 rounded-md"
									onClick={onClick}>
									View Profile
								</div>
							</div>
							<div className="">
								<ul className="flex flex-col text-sm font-medium text-neutral-700">
									<li
										className="flex items-center py-3 px-3 gap-4 hover:bg-neutral-100 rounded-md cursor-pointer"
										onClick={onClick}>
										<div className="bg-gray-100 p-3 flex items center rounded-full">
											<Image
												alt="settings-icon"
												src={settingsIcon}
												width={15}
												height={15}
											/>
										</div>
										<div>Settings & privacy</div>
									</li>
									<li
										className="flex items-center py-3 px-3 gap-4 hover:bg-neutral-100 rounded-md cursor-pointer"
										onClick={onClick}>
										<div className="bg-gray-100 p-3 flex items center rounded-full">
											<Image
												alt="settings-icon"
												src={helpIcon}
												width={15}
												height={15}
											/>
										</div>
										<div>Help & support</div>
									</li>
									<li
										className="flex items-center py-3 px-3 gap-4 hover:bg-neutral-100 rounded-md cursor-pointer"
										onClick={onClick}>
										<div className="bg-gray-100 p-3 flex items center rounded-full">
											<Image
												alt="settings-icon"
												src={moonIcon}
												width={15}
												height={15}
											/>
										</div>
										<div>Display & accessibility</div>
									</li>
									<li
										className="flex items-center py-3 px-3 gap-4 hover:bg-neutral-100 rounded-md cursor-pointer"
										onClick={onClick}>
										<div className="bg-gray-100 p-3 flex items center rounded-full">
											<Image
												alt="settings-icon"
												src={feedbackIcon}
												width={15}
												height={15}
											/>
										</div>
										<div>Give feedback</div>
									</li>
									<li
										className="flex items-center py-3 px-3 gap-4 hover:bg-neutral-100 rounded-md cursor-pointer"
										onClick={onClick}>
										<div className="bg-gray-100 p-3 flex items center rounded-full">
											<Image
												alt="settings-icon"
												src={logoutIcon}
												width={15}
												height={15}
											/>
										</div>
										<div onClick={() => signOut()}>Logout</div>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
