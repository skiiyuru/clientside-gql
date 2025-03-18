import { gql } from '@urql/next'

export const sign_up_mutation = gql`
  mutation CreateUser($input: AuthInput!) {
    createUser(input: $input) {
      id
      token
    }
  }
`
