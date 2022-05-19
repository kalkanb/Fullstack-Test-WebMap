import React from "react";
import PropTypes from "prop-types";

export const ServerErrorPanel = (props) => {
    <div className="p-grid">
      <div className="p-col-12">
        <label className="big-bold">Trace Id: </label>
        <span>{props.detail.traceId}</span>
      </div>
      <div className="p-col-12">
        <label className="big-bold">Error Time: </label>
        {props.detail.timestamp}
      </div>
      <div className="p-col-12">
        <label className="big-bold">Http Status: </label>
        {props.detail.status}
      </div>
      <div className="p-col-12">
        <label className="big-bold">Error Type: </label>
        {props.detail.errorType}
      </div>
      <div className="p-col-12">
        <label className="big-bold">Message: </label>
        {props.detail.message}
      </div>
      <div className="p-col-12">
        <label className="big-bold">URL: </label>
        {props.detail.path}
      </div>
    </div>;
};

ServerErrorPanel.displayName = "ServerErrorPanel";

ServerErrorPanel.propTypes = {
  detail: PropTypes.object
};
