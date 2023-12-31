import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { APIs } from "../Const/APIs";
import { useExamContext } from "../Const/EcommerceContext";

function AllProducts() {
  const [products, setProducts] = useState([]);
  // const [products, setProducts] = useExamContext();

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCTS);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Organize products by category
  const productsByCategory = {};
  products.forEach((product) => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  });

  return (
    <Container>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <Row>
            {productsByCategory[category].map((product, index) => (
              <Col key={product.id} sm={12} md={6} lg={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Link href={`/product/${product.id}`}>
                      View Details
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default AllProducts;
