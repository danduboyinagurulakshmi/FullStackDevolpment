import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* ===== HERO / LANDING SECTION ===== */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607083206968-13611e3d76db')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "40px", borderRadius: "12px" }}>
          <h1 className="display-4 fw-bold">Welcome to Demo Store</h1>
          <p className="lead">Best products at the best prices</p>
          <Link to="/products" className="btn btn-warning btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </div>

      {/* ===== FEATURED SECTION ===== */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                className="card-img-top"
                alt="product"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Smart Phone</h5>
                <p className="card-text">₹15,999</p>
                <Link to="/products" className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                className="card-img-top"
                alt="product"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Laptop</h5>
                <p className="card-text">₹55,999</p>
                <Link to="/products" className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1518441902110-6b7c2e6b8d4a"
                className="card-img-top"
                alt="product"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Headphones</h5>
                <p className="card-text">₹2,999</p>
                <Link to="/products" className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 Demo Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;