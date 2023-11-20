import { InputHTMLAttributes } from 'react';

type FormInputProps = {
  labelValue: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput = ({ labelValue, ...props }: FormInputProps) => {
  return (
    <>
      <label className='flex gap-x-12'>
        <span className='text-black text-[40px] w-[165px]'>{ labelValue }</span>
        <input className='border-2 border-black border-solid flex-grow text-2xl px-4 py-1.5' { ...props }/>
      </label>
    </>
  );
};

export { FormInput };