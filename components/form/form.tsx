import React from 'react'
import { Form as FormComp, FormField } from '../ui/form'
import { useForm } from 'react-hook-form'

const form = () => {

    const form = useForm()

  return (
    <FormComp>
        <form className='space-y-2'>
            <div className='flex items-center gap-3'>
                <FormField />
            </div>
        </form>
    </FormComp>
  )
}

export default form