import React, { Component } from 'react';
import CustomSweetAlert from "custom-sweet-alert";
class App extends Component {
    render() {
        debugger
        return (
            <div>
                <CustomSweetAlert
                    isOpen={true}
                    type="confirm"
                    title="Sure ?"
                    infoText="Are you sure to remove this card ?"
                />
            </div>
        )
    }
}

export default App