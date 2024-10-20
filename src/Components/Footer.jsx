export const Footer = () => {
        return (
          <div className="container footer-container d-flex justify-content-between">
            <div>
              <p>
                <span className="fw-bold">Privacy Policy</span>
                <span className="fw-bold ps-4">Term of Use</span>
                <span className="ps-4 opacity-80">
                  © 2021 All rights reserved
                </span>
              </p>
            </div>
            <div>
              <div className="d-flex gap-5">
                <p className="d-flex gap-1">
                  <img src="/img/icon.png" alt="" />
                  <span>English</span>
                </p>
                <p>
                  <img src="/img/icon (2).png" alt="" />
                  <span>USD</span>
                </p>
              </div>
            </div>
          </div>
        );
}