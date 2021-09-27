import { HttpLink } from "@apollo/client";

export const createHttpLink = () => {
  return new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  });
};
