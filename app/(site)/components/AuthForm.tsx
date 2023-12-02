'use client';

import Image from 'next/image';

import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';

import guestImage from '@/public/images/post-image.jpg';
import plusIcon from '@/public/images/plus-icon.svg';
import { BsGithub, BsGoogle } from 'react-icons/bs';

import axios from 'axios';
import { toast } from 'react-hot-toast';

import AuthSocialButton from './AuthSocialButton';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
	const session = useSession();
	const router = useRouter();
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (session?.status === 'authenticated') {
			router.push('/');
		}
	}, [session?.status, router]);

	const toggleVariant = useCallback(() => {
		if (variant === 'LOGIN') {
			setVariant('REGISTER');
		} else {
			setVariant('LOGIN');
		}
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		if (variant === 'REGISTER') {
			axios
				.post('/api/register', data)
				.then(() => signIn('credentials', data))
				.catch(() => toast.error('Something went wrong!'))
				.finally(() => setIsLoading(false));
		}

		if (variant === 'LOGIN') {
			signIn('credentials', { ...data, redirect: false })
				.then((callback) => {
					if (callback?.error) {
						toast.error('Invalid credentials');
					}

					if (callback?.ok && !callback?.error) {
						toast.success('Logged in');
						router.push('/');
					}
				})
				.finally(() => setIsLoading(false));
		}
	};

	const socialAction = (action: string) => {
		setIsLoading(true);

		signIn(action, { redirect: false })
			.then((callback) => {
				if (callback?.error) {
					toast.error('Invalid credentials');
				}

				if (callback?.ok && !callback?.error) {
					toast.success('Logged in');
				}
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div>
			{variant === 'LOGIN' ? (
				<div className="lg:h-[720px] h-[940px] bg-[#f0f2f5]">
					<div className="m-auto pt-6 lg:pt-[92px] pb-[132px] px-4">
						<div className="max-w-[980px] flex flex-col lg:flex-row justify-center lg:justify-between items-center m-auto">
							<div className="lg:pr-12">
								<div className="text-4xl text-[#0866ff] text-center lg:text-left font-extrabold py-2">
									facebook
								</div>
								{variant === 'LOGIN' && (
									<>
										<div className="text-4xl font-normal pt-2 text-center lg:text-left">
											Recent Logins
										</div>
										<div className="text-sm leading-8 text-center lg:text-left text-gray-800 pb-6">
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
											<div
												className="flex flex-col bg-[#f5f6f7] border-2 hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
												onClick={toggleVariant}>
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
									</>
								)}
							</div>
							<div className="flex lg:items-end h-[496px]">
								<div className="h-[456px] flex flex-col items-start">
									<div className="mt-[40px] pt-[10px] pb-[24px] bg-white rounded-lg flex flex-col gap-4 shadow-lg px-2">
										<form onSubmit={handleSubmit(onSubmit)}>
											<Input
												placeholder="Email"
												disabled={isLoading}
												register={register}
												errors={errors}
												required
												id="email"
												type="email"
											/>
											<Input
												placeholder="Password"
												disabled={isLoading}
												register={register}
												errors={errors}
												required
												id="password"
												type="password"
											/>
											<div className="h-[63px] p-1.5 flex justify-center m-auto rounded-lg py-4 text-white font-bold text-md">
												<Button disabled={isLoading} type="submit">
													{variant === 'LOGIN' ? 'Log In' : 'Register'}
												</Button>
											</div>
										</form>
										<hr />
										<div className="p-1 m-auto text-center flex flex-col gap-2">
											<div className="text-[#1877f2] cursor-pointer hover:underline text-sm">
												Forgot password?
											</div>
											<div
												className="cursor-pointer text-xs hover:underline"
												onClick={toggleVariant}>
												Don&apos;t have an account? Sign up!
											</div>
										</div>
										<div className="relative">
											<div className="absolute inset-0 flex items-center">
												<div className="w-full border-t border-gray-300" />
											</div>
											<div className="relative flex justify-center text-sm">
												<span className="bg-white px-2 text-gray-500">
													Or continue with
												</span>
											</div>
										</div>
										<div className="flex px-5 gap-3">
											<AuthSocialButton
												icon={BsGithub}
												onClick={() => socialAction('github')}
											/>
											<AuthSocialButton
												icon={BsGoogle}
												onClick={() => socialAction('google')}
											/>
										</div>
									</div>
									<div className="text-xs m-auto">
										<div className="mt-3">
											<span className="font-bold">Create a Page</span> for a
											celebrity, brand or business.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="bg-[#f0f2f5] justify-center lg:h-[720px] h-[940px]">
					<div className="flex justify-center items-center pt-6 lg:pt-[92px] pb-[132px] px-4">
						<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center m-auto">
							<div className="flex lg:items-end m-auto">
								<div className="flex flex-col justify-center items-center">
									<div className="text-4xl text-[#0866ff] text-center lg:text-left font-extrabold py-2">
										fakesbook
									</div>
									<div className="mt-[40px] pt-[10px] pb-[24px] bg-white rounded-lg flex flex-col gap-4 shadow-lg px-2">
										<form onSubmit={handleSubmit(onSubmit)}>
											<Input
												placeholder="Name"
												disabled={isLoading}
												register={register}
												errors={errors}
												required
												id="name"
												type="name"
											/>
											<Input
												placeholder="Email"
												disabled={isLoading}
												register={register}
												errors={errors}
												required
												id="email"
												type="email"
											/>
											<Input
												placeholder="Password"
												disabled={isLoading}
												register={register}
												errors={errors}
												required
												id="password"
												type="password"
											/>
											<div className="h-[63px] p-1.5 flex justify-center m-auto rounded-lg py-4 text-white font-bold text-md">
												<Button disabled={isLoading} type="submit">
													{variant === 'REGISTER' ? 'Register' : 'Log In'}
												</Button>
											</div>
										</form>
										<div
											className="text-center text-[#1877f2] cursor-pointer hover:underline"
											onClick={toggleVariant}>
											Already have an account?
										</div>
									</div>
									<div className="text-xs m-auto">
										<div className="mt-3">
											<span className="font-bold">Create a Page</span> for a
											celebrity, brand or business.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AuthForm;
