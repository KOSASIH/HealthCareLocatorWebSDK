import { gql } from 'graphql-request';
import { graphqlClient } from './helpers';
const QUERY_CODE_BY_LABEL = gql `
  query codesByLabel($first: Int!, $offset: Int!, $criteria: String!, $codeTypes: [String!]!, $locale: String) {
    codesByLabel(
      codeTypes: $codeTypes
      criteria: $criteria
      first: $first
      offset: $offset
      locale: $locale
    )  {
      codes {
        id
        lisCode
        lisLbl
        longLbl
      }
    }
  }
`;
export default function codesByLabel(variables, config) {
  return graphqlClient(QUERY_CODE_BY_LABEL, variables, config);
}
