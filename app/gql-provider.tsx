'use client'

import {
  UrqlProvider,
  ssrExchange,
  fetchExchange,
  createClient,
  gql,
} from '@urql/next'
import { ReactNode, useMemo } from 'react'
import { cacheExchange } from '@urql/next'
import { url } from '@/utils/url'
import { getToken } from '@/utils/token'

const GQLProvider = ({ children }: { children: ReactNode }) => {
  const [client, ssr] = useMemo(() => {
    // Enables hydration
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    })

    const client = createClient({
      url,
      // plugin options
      exchanges: [ssr, fetchExchange],
      fetchOptions: () => {
        const token = getToken()

        return token
          ? {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          : {}
      },
    })

    return [client, ssr]
  }, [])

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  )
}

export default GQLProvider
