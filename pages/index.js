import {useState} from 'react';
import {ApolloProvider, ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList.js';
import DishList from '../components/dishList.js';

const Home = () => {

  const API_URL = "http://localhost:1337";
  const link = new HttpLink({uri: `${API_URL}/graphql`});
  const cache = new InMemoryCache();
  const client = new ApolloClient({link, cache});

  const [id, setId] = useState(null);

  return (
    <>
      <ApolloProvider client={client}>
        <RestaurantList setId={setId}></RestaurantList>
        {id ? <DishList restId={id}></DishList> : ""}
      </ApolloProvider>
    </>
  );
};

export default Home;
