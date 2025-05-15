import { useQuery } from '@tanstack/react-query'

import { getBuses } from '../api/userApi'

export const useBus = () => {
  return useQuery({
    queryKey: ['bus'],
    queryFn: getBuses,
    refetchInterval: 2000,
  })
}
