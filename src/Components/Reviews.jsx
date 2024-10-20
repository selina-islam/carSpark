import { Row,Col } from "react-bootstrap";
const Reviews = [
  {
    img: "/img/img.png",
    title: "2021 Cadillac Escalade",
    content:
      "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
    user: {
      img: "/img/Oval.png",
      name: "Hironaka Hiroe",
      possition: "Chief Editor",
      stars: "4.91",
      total: "(98)",
    },
  },
  {
    img: "/img/img-1.png",
    title: "2021 Hyundai Elantra",
    content:
      "If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ",
    user: {
      img: "/img/Oval Copy.png",
      name: "Debashis Bhuiyan",
      possition: "News Editor",
      stars: "4.65",
      total: "(93)",
    },
  },
  {
    img: "/img/img-2.png",
    title: "2021 Mercedes-Benz GLA250",
    content:
      "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
    user: {
      img: "/img/Oval Copy 2.png",
      name: "Lew Silverton",
      possition: "Chief Editor",
      stars: "4.55",
      total: "(35)",
    },
  },
];


export const Review = () => {
        return (
          <div className=" review-section container" >
            <h1 className="text-center mb-5 fw-bold">Recent reviews</h1>

            {/* card section */}

            <Row>
              {Reviews.map(({img, title,content, user}) => (
                <Col key={Math.random()}>
                  <div className="card border-0 review-card">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body ">
                      <h5 className="card-title fw-bolder">
                        {title}
                      </h5>
                      <p className="card-text opacity-50">
                        {content}
                      </p>
                      <div className="d-flex rating-section justify-content-between">
                        <div className="d-flex align-items-center mt-3">
                          <img
                            src={user.img}
                            alt=""
                            className="rounded-circle me-3"
                          />

                          <div className="d-flex flex-column">
                            <h6 className="fw-bold mb-0">{ user.name}</h6>
                            <small>{ user.possition}</small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <img src="public/img/star.png" alt="" />
                          </span>
                          <span className="fw-bold ms-1">{ user.stars}</span>
                          <span className="text-muted ms-2">{ user.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        );  
}