import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useForm } from 'react-hook-form'

import { createUser, getUser } from '../api/userApi'
import { useEffect } from 'react'
import { useUser } from '../query'
import { useAddUserMutation, useUpdateUserMutation } from '../mutation'

type Inputs = {
  name: string
  email: string
  age: number
}

export default function UserForm({ userId }: { userId?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const { data: userData } = useUser(userId)

  useEffect(() => {
    if (userId && userData) {
      reset({ age: userData.age, email: userData.email, name: userData.name })
    }
  }, [userData])

  const { mutateAsync: addUser, isPending: isAddPending } = useAddUserMutation()
  const { mutateAsync: updateUser, isPending: isUpdatePending } = useUpdateUserMutation()

  const onSubmit = async (data: Inputs) => {
    if (userId) {
      await updateUser({ ...data, id: userId })
    } else {
      await addUser(data)
    }
  }

  return (
    <form onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <span>Name is required</span>}

      <input {...register('email', { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}

      <input
        type="number"
        {...register('age', { required: true, valueAsNumber: true })}
        placeholder="Age"
      />
      {errors.age && <span>Age is required</span>}

      {!userId && (
        <button type="submit" disabled={isAddPending}>
          {isAddPending ? 'Saving...' : 'Add User'}
        </button>
      )}
      {userId && (
        <button type="submit" disabled={isUpdatePending}>
          {isUpdatePending ? 'Updating...' : 'Update User'}
        </button>
      )}
    </form>
  )
}
