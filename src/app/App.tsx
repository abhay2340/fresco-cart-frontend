import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UsersPage from 'pages/Users/UserPage'
import { EditUserForm } from 'features/users/components/editUserForm'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ backgroundColor: 'blue' }}>asfwefwe</div>
        <Routes>
          <Route path="/" element={<UsersPage />} />
        </Routes>
        <Routes>
          <Route path="/:id" element={<EditUserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
