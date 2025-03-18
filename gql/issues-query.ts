import { gql } from '@urql/next'

export const issues_query = gql`
  query Issues {
    issues {
      id
      name
      content
      status
    }
  }
`
