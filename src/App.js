import React, { Component } from 'react';
import "./assets/style/CustomAlert.css";
import SuccessIcon from "./assets/img/success-icon.png";
import FailedIcon from "./assets/img/fail-icon.png";
import ConfirmationIcon from "./assets/img/confirmation-icon.png";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        let { isOpen, type, title, infoText } = this.props;
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
                            <img src={titleIcon} />
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
}

export default App