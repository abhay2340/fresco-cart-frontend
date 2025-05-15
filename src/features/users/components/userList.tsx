import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteUser } from '../api/userApi'
import { useUsers } from '../query'
import { useNavigate } from 'react-router-dom'
import { useBus } from '../query/useBus'

export default function UserList() {
  const { data: users, isLoading } = useUsers()
  const queryClient = useQueryClient()
  console.log(users)
  const { mutateAsync: removeUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })

  const navigate = useNavigate()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <p>Users</p>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) — {user.email}
            <button type="button" onClick={() => void removeUser(user._id)}>
              Delete
            </button>
            <button type="button" onClick={() => void navigate(user._id)}>
              navigate
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
