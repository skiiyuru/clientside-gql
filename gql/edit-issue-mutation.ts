import { gql } from '@urql/next'

export const edit_issue_mutation = gql`
  mutation EditIssue($input: EditIssueInput!) {
    editIssue(input: $input) {
      id
      name
      content
      status
    }
  }
`
