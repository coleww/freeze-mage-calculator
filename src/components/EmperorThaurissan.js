import React from 'react';

const EmperorThaurissan = React.createClass({
  render() {
    return (
      <div className="thaurissan">
        <img
          className="cardImg"
          src={`${process.env.PUBLIC_URL}/imgs/emperorThaurissan.png`}
          alt="Emperor Thaurissan"
          onClick={this.props.thaurissanTick} />
      </div>
    );
  }
});

export default EmperorThaurissan;