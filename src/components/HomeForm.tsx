'use client'

import { useState } from 'react';
import { FormInput } from '@/components/UI/FormInput';
import { SubmitButton } from '@/components/UI/SubmitButton';
import { z } from 'zod';
import { customErrorMap } from '@/lib/zod';
import { useRouter } from 'next/navigation';

const CoordinatesSchema = z.object({
  latitude: z.number().min(-90, {
    message: 'Широта должна быть больше, чем -90'
  }).max(90, {
    message: 'Широта должна меньше, чем 90'
  }),
  longitude: z.number().min(-180, {
    message: 'Долгота дожна быть больше, чем -180'
  }).max(180, {
    message: 'Долгота должна быть меньше, чем 180'
  }),
})

const HomeForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const submitHandler = async (formData: FormData) => {
    setError(null)

    const coordinates = {
      latitude: parseFloat(formData.get('latitude') as string),
      longitude: parseFloat(formData.get('longitude') as string)
    }

    const parseResult = CoordinatesSchema.safeParse(coordinates, {
      errorMap: customErrorMap
    })

    if (!parseResult.success) {
      let errorMessage = ''
      parseResult.error.issues.forEach(issue => {
        errorMessage += issue.message + '. '
      })

      setError(errorMessage)
      return
    }

    router.push(`?lat=${ coordinates.latitude }&lon=${ coordinates.longitude }`, {
      scroll: false
    })
  }

  return (
    <form className='flex flex-col gap-y-16' action={ submitHandler }>
      <FormInput labelValue='Широта' name='latitude' type='number' step='0.01'/>
      <FormInput labelValue='Долгота' name='longitude' type='number' step='0.01'/>
      <SubmitButton>Показать погоду</SubmitButton>
      { error && <div className='text-3xl text-red-500 font-bold text-center'>{ error }</div> }
    </form>
  );
};

export { HomeForm };