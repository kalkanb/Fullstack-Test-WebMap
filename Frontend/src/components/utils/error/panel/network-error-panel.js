import React from "react";
import PropTypes from "prop-types";

export const NetworkErrorPanel = (props) => {
  return (
    <div className="p-grid">
      <div className="p-col-12">
        <label className="big-bold">Message: </label>
        {props.detail.message}
      </div>
      <div className="p-col-12">
        <label className="big-bold">Detail: </label>
        {props.detail.stack}
      </div>
    </div>
  );
};

NetworkErrorPanel.displayName = "NetworkErrorPanel";

NetworkErrorPanel.propTypes = {
  detail: PropTypes.object,
};
