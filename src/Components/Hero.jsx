import  Carousel  from 'react-bootstrap/Carousel'


function Hero() {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="text-center heroArea">
            <p className="mt-5">Meet your new car</p>
            <h1>Honda Civic Type R</h1>
            <div className="mt-4 herobtn">
              <button className="btn  moreDetails me-3">More Details</button>
              <button className="btn btn-primary testDrive">Test Drive</button>
            </div>
          </div>
          <div className="heroimg">
            <img
              className="d-block w-100"
              src="/img/Hero.png"
              alt="Car Photo"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="text-center heroArea">
            <p className="mt-5">Join your new car</p>
            <h1>Bentley Motors Limited</h1>
            <div className="mt-4 herobtn">
              <button className="btn btn-outline-secondary moreDetails me-3">
                More Details
              </button>
              <button className="btn btn-primary testDrive">Test Drive</button>
            </div>
          </div>
          <div className="heroimg">
            <img
              className="d-block w-100 bmw"
              src="/img/Hero.png"
              alt="Car Photo"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="text-center heroArea">
            <p className="mt-5">Meet your new car</p>
            <h1>Dodge</h1>
            <div className="mt-4 herobtn">
              <button className="btn btn-outline-secondary moreDetails me-3">
                More Details
              </button>
              <button className="btn btn-primary testDrive">Test Drive</button>
            </div>
          </div>
          <div className="heroimg">
            <img
              className="d-block w-100 bmw"
              src="/img/Hero.png"
              alt="Car Photo"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hero