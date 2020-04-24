import React from 'react';
import PropTypes from 'prop-types';

class CustomSweetAlert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, type, title, infoText } = this.props;
    let titleIcon = SuccessIcon;
    if (type === "confirm") {
      titleIcon = ConfirmationIcon;
    }
    else if (type === "fail") {
      titleIcon = FailedIcon
    }
    else {
      titleIcon = SuccessIcon;
    }
    return (
      <div className="custom-alert-main">
        <div class={isOpen ? "custom-alert" : "custom-alert off"} id="modal">
          <div className="title">
            <div className="title-icon-style">
              <img src={titleIcon} alt="icon not found" />
            </div>
            <div className="title-text-style">{title && title !== "" ? title : "Alert Title"}</div>
          </div>
          <div className="content">
            {infoText && infoText !== "" ? infoText :
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti,ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo   accusantium nihil doloremque consequuntur."}
          </div>
          <div className="actions">
            <button className="request-btn" >OK</button>
            {type === "confirm" && <button className="request-cancel-btn" >CANCEL</button>}
          </div>
        </div>
      </div>
    )
  }
};

CustomSweetAlert.propTypes = {
  isOpen: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  infoText: PropTypes.string,
};

CustomSweetAlert.defaultProps = {
  isOpen: true,
  type: "confirm",
  title: "Sure ?",
  infoText: "Are you sure to remove this card ?",
}

export default TextInput;
