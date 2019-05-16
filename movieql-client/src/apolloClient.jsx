//apollo client생성
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:4000"
});
//아폴로 클라이언트 기본 설정

export default client;