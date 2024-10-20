import { Card, Col, Row,Button } from "react-bootstrap"


const Trendings = [
  {
    img: " img/trendone.png",
    title: "Used 2019 Audi S4 Premium Plus",
    miles: "11 475 Miles",
    transmission: "AWD",
    chylinders: "4-Cylinder Turbo",
    price: "$41,400",
  },
  {
    img: "img/trendtwo.png",
    title: "2013 Subaru Forester Premium Plus",
    miles: "40 475 Miles",
    transmission: "AWD",
    chylinders: "4-Cylinder Turbo",
    price: "$22,500",
  },
  {
    img: "img/trendthree.png",
    title: "Used 2010 BMW X3 Sport package",
    miles: "20 850 Miles",
    transmission: "RWD",
    chylinders: "4-Cylinder Turbo",
    price: "$39,200",
  },
];
export const Trending = () => {
        return (
          <>
            <div className="container">
              <h1 className="text-center fw-bold  headingmargin">
                Trending near you
              </h1>
              <Row className="d-flex justify-content-center">
                {Trendings.map(
                  ({ img, title, chylinders, miles, transmission, price }) => (
                    <Col key={Math.random()}>
                      <Card style={{ width: "25rem", border: "none" }}>
                        <Card.Img variant="top" src={img} />

                        <Card.Body>
                          <Card.Title>{title}</Card.Title>

                          <Card.Text className="opacity-500 cardText">{miles}</Card.Text>

                          <Card.Text className="opacity-500 cardText">
                            {chylinders} .{transmission}
                          </Card.Text>

                          <div className="d-flex flex-row gap-3">
                            <Button variant="primary" className="fw-bold pricebtn">
                              {price}
                            </Button>
                            <Button variant="secondary" className="fw-bold bestselllerbtn">
                              Bestseller
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                )}
              </Row>
            </div>
          </>
        );
    }    
