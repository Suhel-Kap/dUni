import {ApolloClient, ApolloLink, gql, HttpLink, InMemoryCache} from '@apollo/client'
import {AUTHENTICATE_MUTATION, CHALLENGE_QUERY, CREATE_PROFILE_MUTATION} from "../constants/graphql/queries";

const APIURL = 'https://api-mumbai.lens.dev/';

const apolloClient = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
})

export default function useLens() {
    const login = async (address: `0x${string}`, signer: any) => {
        const response = await apolloClient.query({
            query: gql(CHALLENGE_QUERY),
            variables: {
                address: address
            }
        })
        console.log('Lens example data: ', response)
        const signature = await signer.signMessage(response.data.challenge.text)
        console.log("signature", signature)
        const mutationRes = await apolloClient.mutate({
            mutation: gql(AUTHENTICATE_MUTATION),
            variables: {
                address: address,
                signature: signature
            }
        })

        const httpLink = new HttpLink({ uri: 'https://api-mumbai.lens.dev/' });

        const authLink = new ApolloLink((operation, forward) => {
            // Retrieve the authorization token from local storage.
            const token = mutationRes.data.authenticate.accessToken
            console.log("token", token)

            // Use the setContext method to set the HTTP headers.
            operation.setContext({
                headers: {
                    "x-access-token": token ? `Bearer ${token}` : ''
                }
            });

            // Call the next link in the middleware chain.
            return forward(operation);
        });

        return new ApolloClient({
            link: authLink.concat(httpLink), // Chain it with the HttpLink
            cache: new InMemoryCache()
        })
    }

    const createProfile = async (username: string,  address: `0x${string}`, signer: any, pfp? : string) => {
        const client = await login(address, signer)
        const createProfRes = await client.mutate({
            mutation: gql(CREATE_PROFILE_MUTATION),
            variables: {
                username: username,
                img: pfp
            }
        })
        console.log("createProfRes", createProfRes)
    }

    return {
        login,
        createProfile
    }
}