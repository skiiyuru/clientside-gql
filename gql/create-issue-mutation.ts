import { gql } from '@urql/next'

export const create_issue_mutation = gql`
  mutation CreateIssue($input: CreateIssueInput!) {
    createIssue(input: $input) {
      id
      name
      content
      status
    }
  }
`
