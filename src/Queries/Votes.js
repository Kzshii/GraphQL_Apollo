import gql from 'graphql-tag';

export const NEW_VOTES_SUBSCRIPTION = gql`
 subscription {
   newVote {
     node {
       id
       link {
         id
         url
         description
         createdAt
         postedBy {
           id
           name
         }
         votes {
           id
           user {
             id
           }
         }
       }
       user {
         id
       }
     }
   }
 }
`

export const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`