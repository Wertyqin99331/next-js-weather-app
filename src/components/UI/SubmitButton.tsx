import { PropsWithChildren } from 'react';


const SubmitButton = ({ children }: PropsWithChildren) => {
  return (
    <button className='w-full px-6 py-5 bg-blue-600 text-white text-[40px] font-normal rounded-lg disabled:bg-blue-400'
            type='submit'>
      Показать погоду
    </button>
  );
};

export { SubmitButton };