import gql from 'graphql-tag';

export const NEW_LINKS_SUBSCRIPTION = gql`
 subscription {
   newLink {
     node {
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
   }
 }
`

export const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`