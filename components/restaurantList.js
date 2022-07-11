import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button} from 'reactstrap';
import {gql, useQuery} from '@apollo/client';

const RestaurantList = ({setId}) => {

    const GET_RESTAURANTS = gql`
        query {
            restaurants {
                id
                name
                description
                image {
                    url
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_RESTAURANTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    if (!data) return <p>Restaurants not found...</p>;
    console.log("data: " + JSON.stringify(data));
    const restaurants = data.restaurants;

    return (
        <>
        <Container>
            <br></br>
            <h3>Restaurant List</h3>
            <br></br>
            <Row xs='3'>
            {restaurants.map(item => {
                return (
                    <Col xs="6" sm="4">
                    <Card style={{ width: '20rem' }}>
                        <CardImg variant="top" style={{height: 200}} src={`http://localhost:1337${item.image.url}`}/>
                        <CardBody>
                            <CardText>
                                {item.description}
                            </CardText>
                            <Button variant="primary" onClick={()=>setId(item.id)}>{item.name}</Button>
                        </CardBody>
                    </Card>
                    </Col>
                );
            })}
            </Row>
        </Container>
        </>
    );
};

export default RestaurantList;