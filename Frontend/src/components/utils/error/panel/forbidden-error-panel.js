import React from "react";
import PropTypes from "prop-types";

export const ForbiddenErrorPanel = (props) => {
  return (
    <div className="p-grid">
      <div className="p-col-12">
        <label className="big-bold">Message: </label>
        Unauthorized
      </div>
      <div className="p-col-12">
        <label className="big-bold">URL: </label>
        {props.detail.path}
      </div>
    </div>
  );
};

ForbiddenErrorPanel.displayName = "ForbiddenErrorPanel";

ForbiddenErrorPanel.propTypes = {
  detail: PropTypes.object,
};
