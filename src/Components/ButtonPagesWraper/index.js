import React from "react";
import ButtonPage from "../Buttons/ButtonPage";

class ButtonPagesWrapper extends React.Component {
  render() {
    return (
      <div className="div-btn-pages">
        {this.props.prevPage && (
          <ButtonPage
            type="previous"
            clickCallback={() => {
              this.props.pageCallback(this.props.prevPage )
            }}
          />
        )}
        {this.props.nextPage && (
          <ButtonPage
            type="next"
            clickCallback={() => {
                this.props.pageCallback(this.props.nextPage);
            }}
          />
        )}
      </div>
    );
  }
}

export default ButtonPagesWrapper;