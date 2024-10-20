import { Col, Row } from "react-bootstrap";

const bestsellings = [
  {
    img: "img/Bitmap.png",
    name: "Subaru",
    price: "$40k",
  },
  {
    img: "img/Bitmaptwo.png",
    name: "Volkswagen",
    price: "from $15k",
  },
  {
    img: "img/Bitmapthree.png",
    name: "Toyota",
    price: "from $27k",
  },
  {
    img: "img/Bitmapfour.png",
    name: "Mercedes-Benz",
    price: "from $60k",
  },
  {
    img: "img/Bitmap@2x.png",
    name: "Hyundai",
    price: "from $30k",
  },
  {
    img: "img/Bitmapfive.png",
    name: "Infiniti",
    price: "from $54k",
  },
];


export const BestSelling = () => {
        return (
          <>
            <div className="container" style={{ paddingTop: "86px" }}>
              <h1 className="text-center fw-bold mb-5">
                Explore best selling car makes
              </h1>
              <Row className="d-flex justify-content-center" style={{paddingTop:"50px"}}>


                {bestsellings.map(({ img, name, price }) => (
                  <Col md={4} className="Sellingcard">
                    <div className="vw-add">
                      <img src={img} alt="" className="vw-logo w-[100px]" />

                      <div>
                        <div className="vw-text">{name}</div>
                        <div className="vw-price">From {price}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </>
        );
}