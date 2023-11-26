import Image from 'next/image';
import React from 'react';

import guestImage from '@/public/images/post-image.jpg';
import plusIcon from '@/public/images/plus-icon.svg';

const page = () => {
	return (
		<div>
			<div className="lg:h-[720px] h-[940px] bg-[#f0f2f5]">
				<div className="m-auto pt-6 lg:pt-[92px] pb-[132px] px-4">
					<div className="max-w-[980px] flex flex-col lg:flex-row justify-center lg:justify-between items-center m-auto">
						<div className="lg:pr-12">
							<div className="text-4xl text-[#0866ff] font-extrabold py-2">
								facebook
							</div>
							<div className="text-4xl font-normal pt-2">Recent Logins</div>
							<div className="text-sm leading-8 text-gray-800 pb-6">
								Click your picture or add an account
							</div>
							<div className="flex gap-4">
								<div className="border-2 hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer">
									<Image
										alt="guest-login"
										src={guestImage}
										className="object-cover h-[160px] w-[160px] rounded-t-lg"
									/>
									<div className="flex justify-center items-center h-[46px] text-lg font-medium text-gray-600 bg-white">
										Guest Login
									</div>
								</div>
								<div className="flex flex-col bg-[#f5f6f7] border-2 hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer">
									<div className="flex items-center justify-center h-[160px] w-[160px]">
										<Image
											alt="guest-login"
											src={plusIcon}
											className="object-cover h-[50px] w-[50px] rounded-t-lg"
										/>
									</div>
									<div className="flex justify-center items-center h-[46px] text-lg font-medium text-[#1877f2] bg-white">
										Create Account
									</div>
								</div>
							</div>
						</div>
						<div className="flex lg:items-end h-[496px]">
							<div className="h-[456px] flex flex-col items-start">
								<div className="mt-[40px] pt-[10px] pb-[24px] bg-white rounded-lg flex flex-col gap-4 shadow-lg px-2">
									<form className="">
										<div className="">
											<div className="h-[63px] p-1.5 flex justify-center m-auto rounded-lg py-4">
												<input
													name="email"
													placeholder="Email Address"
													className="py-3.5 px-4 rounded-lg w-full h-[49px] outline-blue-600 border"
												/>
											</div>
											<div className="h-[63px] p-1.5 flex justify-center m-auto rounded-lg py-4">
												<input
													name="password"
													type="password"
													placeholder="Password"
													className="py-3.5 px-4 rounded-lg w-full h-[49px] outline-blue-600 border"
												/>
											</div>
											<div className="h-[63px] p-1.5 flex justify-center m-auto rounded-lg py-4 text-white font-bold text-md">
												<button
													type="submit"
													name="password"
													placeholder="Password"
													className="py-3.5 px-4 rounded-lg w-[330px] h-[49px] outline-blue-600 bg-[#1877f2]">
													Log In
												</button>
											</div>
										</div>
									</form>
									<hr />
									<div className="p-5 m-auto text-[#1877f2] cursor-pointer hover:underline">
										<div>Forgot password?</div>
									</div>
								</div>
								<div className="text-xs m-auto">
									<div>
										<span className="font-bold">Create a Page</span> for a
										celebrity, brand or business.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
