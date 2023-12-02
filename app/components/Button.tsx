'use client';

import clsx from 'clsx';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	fullWidth?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
	secondary?: boolean;
	danger?: boolean;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	type,
	children,
	onClick,
	secondary,
	danger,
	disabled,
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={clsx(
				`py-3.5 px-4 rounded-lg w-[330px] h-[49px] outline-blue-600 `,
				disabled && 'opacity-50 cursor-default',
				secondary ? 'text-gray-900' : 'text-white',
				danger &&
					'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
				!secondary && !danger && 'bg-[#1877f2] hover:bg-[#1885f2]'
			)}>
			{children}
		</button>
	);
};

export default Button;
