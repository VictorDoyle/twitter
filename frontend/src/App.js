import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./config/routes";

import "./App.css";
const client = new ApolloClient({
  uri: "http://localhost:4025",
  headers: {
    authorization: localStorage.getItem("uid") || "",
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allTweets: {
            ...offsetLimitPagination(),

            read(existing, { args: { offset, limit } }) {
              return existing && existing.slice(offset, offset + limit);
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
