import { gql } from '@urql/next'

export const sign_in_mutation = gql`
  mutation sign_in($input: AuthInput!) {
    signin(input: $input) {
      token
    }
  }
`
