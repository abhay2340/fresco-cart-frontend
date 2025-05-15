import UserForm from 'features/users/components/userForm'
import UserList from 'features/users/components/userList'

export default function UsersPage() {
  return (
    <div>
      <h2>User Management</h2>
      <UserForm />
      <UserList />
    </div>
  )
}
