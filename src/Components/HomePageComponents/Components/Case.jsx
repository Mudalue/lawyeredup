import React from "react";
import { Clipboard } from "react-feather";

const Case = ({ usercase }) => {
  return (
    <div className="col-md-4 " data-aos="zoom-in">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h4>
              <Clipboard /> {usercase.title}
            </h4>
          </div>
          <div className="card-text">
            <p>Category: Homicide</p>
            <p>Name of Plaintiff: {usercase.postedBy}</p>
            <p>Submited: {usercase.createdAt}</p>
            <p>
              Status: <span className="badge bg-danger">Urgent</span>
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-md btn-info">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
