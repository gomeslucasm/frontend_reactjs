import React from "react";
import './index.css'

class ButtonPage extends React.Component {
  render() {
    if (this.props.type === "next") {
      return (
        <button
          type = 'button'
          className="button custom-btn btn-page action"
          id = 'btn-next'
          onClick={() => {
            this.props.clickCallback();
          }}
        >
          Póxima página {'>'}
        </button>
      );
    } else {
      return (
        <button
          type = 'button'
          className= "button custom-btn btn-page action"
          id = 'btn-prev'
          onClick={() => {
            this.props.clickCallback();
          }}
        >
          {'< '} Página anterior
        </button>
      );
    }
  }
}

export default ButtonPage;
