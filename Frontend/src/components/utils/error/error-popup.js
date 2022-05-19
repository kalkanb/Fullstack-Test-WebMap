import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ServerErrorPanel } from "./panel/server-error-panel";
import { ValidationErrorPanel } from "./panel/validation-error-panel";
import { ForbiddenErrorPanel } from "./panel/forbidden-error-panel";
import { NetworkErrorPanel } from "./panel/network-error-panel";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../../common/modal";
import constants from "../../../store/constants";

export const ErrorPopup = (props) => {
  const renderDetail = (item, status) => {
    if (status === 404 && item && item.message === "No message available") {
      item.message = "URL not found!";
    }
    switch (status) {
      case 404:
      case 500:
        return <ServerErrorPanel detail={item} />;
      case 400:
        return <ValidationErrorPanel detail={item} />;
      case 403:
        return <ForbiddenErrorPanel detail={item} />;
      default:
        return <NetworkErrorPanel detail={item} />;
    }
  };

  const renderHeader = (level) => {
    if (level === constants.ErrorLevel.Error) return "Error";
    else if (level === constants.ErrorLevel.Warn) return "Warning";
  };

  return (
    <>
      <Modal show={props.visible} setShow={props.onHide}>
        <ModalHeader>
          <h2>{renderHeader(props.level)}</h2>
        </ModalHeader>
        <ModalBody>
          {props.detail && renderDetail(props.detail, props.detail.status)}
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              props.onHide();
              e.preventDefault();
            }}
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

ErrorPopup.displayName = "ErrorPopup";

ErrorPopup.defaultProps = {
  visible: false,
};

ErrorPopup.propTypes = {
  level: PropTypes.oneOf(["error", "warning"]),
  detail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
