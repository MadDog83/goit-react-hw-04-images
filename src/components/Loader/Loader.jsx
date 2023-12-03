import React from 'react';
import { Puff } from 'react-loader-spinner';


class Loader extends React.Component {
  render() {
    return (
      <div className="Loader">
        <Puff
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}

export default Loader;