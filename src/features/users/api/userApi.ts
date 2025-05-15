import type { User } from 'entities/model'
import axiosInstance from '../../../axiosInstance'

export const getUser = async (id?: string): Promise<User> => {
  const res = await axiosInstance.get(`/users/${id}`)
  return res.data
}
export const getUsers = async (): Promise<User[]> => {
  const res = await axiosInstance.get('/users')
  return res.data
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const res = await axiosInstance.post('/users', user)
  return res.data
}

export const updateUser = async (user: User): Promise<User> => {
  const res = await axiosInstance.put(`/users/${user.id}`, user)
  return res.data
}

export const deleteUser = async (id: string): Promise<{ message: string }> => {
  const res = await axiosInstance.delete(`/users/${id}`)
  return res.data
}

export const getBuses = async (): Promise<{ message: string }> => {
  const res = await axiosInstance.get('/dtc/live')
  return res.data
}
