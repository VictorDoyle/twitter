import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { offsetLimitPagination } from "@apollo/client/utilities";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./config/routes";
// authorization: localStorage.getItem("uid") || "",

import "./App.css";
const client = new ApolloClient({
  uri: "http://localhost:4025",
  headers: {
    authorization: localStorage.uid || "",
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allTweets: {
            keyArgs: ["type"],
            merge(existing = [], incoming = []) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
