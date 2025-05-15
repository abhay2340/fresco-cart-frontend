import { useQuery } from '@tanstack/react-query'

import { getUser } from '../api/userApi'

export const useUser = (id?: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ['users'],
    queryFn: () => getUser(id),
  })
}
