import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function Test() {
  return (
    <section className="h-100 h-custom gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6 bg-light">
                    <div className="p-5">
                      <LeftPanel />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>
                      <RightPanel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
