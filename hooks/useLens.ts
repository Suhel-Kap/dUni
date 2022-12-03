import {ApolloClient, InMemoryCache} from '@apollo/client'
import {gql} from '@apollo/client'

const APIURL = 'https://api-mumbai.lens.dev/';

const apolloClient = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
})

export default function useLens() {

}