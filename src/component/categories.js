import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import DishDetail from './DishDetail';

function Categories() {
  const [dishData, setDishData] = useState({ veg: [], nonveg: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://menu-restaurnt.p.rapidapi.com/', {
          headers: {
            'x-rapidapi-key': '1cff801dd4mshf13f99526f70557p1ea882jsn87d9691a3c04', // Replace with environment variable for production
            'x-rapidapi-host': 'menu-restaurnt.p.rapidapi.com',
          },
        });
        console.log('Response Status:', response.status);
        console.log('Response OK:', response.ok);
        if (!response.ok) {
          throw new Error('Failed to fetch menu data');
        }

        const apiData = await response.json();
       
        // Transform API data into the expected format
        const transformedData = {
          veg: apiData.veg || [], // Ensure fallback to empty array
          nonveg: apiData.nonveg || [],
        };

        setDishData(transformedData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load menu. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
   
    
    fetchDishes();
  }, []);

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  const DishCard = ({ dish }) => (
    <Col md={4} className="mb-3">
      <Card
        className="p-4 bg-dark text-white dish-card"
        role="button"
        onClick={() => handleDishClick(dish)}
      >
        <Row>
          <Col xs={4}>
            <img src={dish.image} alt={dish.name} className="w-100 rounded" />
          </Col>
          <Col xs={8}>
            <h5 className="mb-2">{dish.name}</h5>
            <p className="mb-0">Price: ₹{dish.price}</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container id="menu" className="mt-5">
      <h2 className="text-white text-center mb-4">Our Menu</h2>
      <Tabs defaultActiveKey="veg" id="menu-categories" className="mb-3 menu-tab" fill>
        {Object.entries(dishData).map(([category, dishes]) => (
          <Tab
            eventKey={category}
            title={category === 'veg' ? 'Veg' : 'Non-Veg'}
            key={category}
          >
            <Row>
              {dishes.map((dish, index) => (
                <DishCard key={index} dish={dish} />
              ))}
            </Row>
          </Tab>
        ))}
      </Tabs>

      {selectedDish && <DishDetail dish={selectedDish} />}
    </Container>
  );
}

export default Categories;
