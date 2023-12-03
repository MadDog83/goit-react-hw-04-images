import React from 'react';


class Button extends React.Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    const { imagesLoaded } = this.props;

    return (
      imagesLoaded && (
        <button className="Button" onClick={this.handleClick}>Load more</button>
      )
    );
  }
}

export default Button;