'use client';

import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
	placeholder: string;
	id: string;
	type?: string;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	id,
	register,
	required,
	errors,
	type = 'text',
	disabled,
}) => {
	return (
		<div>
			<div className="h-[63px] p-1.5 flex justify-center m-auto rounded-lg py-4">
				<input
					placeholder={placeholder}
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					{...register(id, { required })}
					className={clsx(
						`
            py-3.5 px-4 rounded-lg w-full h-[49px] outline-blue-600 border`,
						errors[id] && 'focus:ring-rose-500',
						disabled && 'opacity-50 cursor-default'
					)}
				/>
			</div>
		</div>
	);
};

export default Input;
