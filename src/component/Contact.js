import React from "react";
import { Prompt } from "react-router-dom";
//
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello Contact</h1>

        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            this.setState({
              isChecked: false,
            });
          }}
        >
          Cho Phép
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              isChecked: true,
            });
          }}
        >
          KhôngCho Phép
        </button>
        <Prompt
          when={this.state.isChecked}
          message={(location) =>
            `Bạn chắc chắn muốn thoát ${location.pathname}`
          }
        />
      </div>
    );
  }
}
export default Contact;
