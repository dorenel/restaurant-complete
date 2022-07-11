import {Container, Row, Col, Card, CardImg, CardBody, CardText, Button} from 'reactstrap';
import {gql, useQuery} from '@apollo/client';

const DishList = ({restId}) => {

    const GET_DISHES = gql`
        query($id: ID!) {
            restaurant(id: $id) {
                id
                name
                dishes {
                    id
                    name
                    description
                    price
                    image {
                        url
                    }
                }
            }
        }
    `;

    const {loading, error, data} = useQuery(GET_DISHES, {variables: {id: restId}});
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error...</p>;
    };
    if (!data) return <p>Dishes not found...</p>

    console.log(JSON.stringify(data));

    let dishes = data.restaurant.dishes;

    return (
        <>
        <Container>
            <br></br>
            <h3>Available Dishes</h3>
            <br></br>
            <Row xs='3'>
            {dishes.map(item => {
                return (
                    <Col xs="6" sm="3">
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" style={{height: 200}} src={`http://localhost:1337${item.image.url}`}/>
                        <CardBody>
                            <CardText>
                                {item.name}
                            </CardText>
                            <CardText>
                                {item.description}
                            </CardText>
                            <Button variant="primary">Add to cart</Button>
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

export default DishList;