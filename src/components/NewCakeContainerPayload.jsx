import { connect } from 'react-redux';
import { buyCake } from '../store';
import React, { useState } from 'react';

const NewCakeContainerPayload = (props) => {
  const [numberOfCakes, setNumberOfCakes] = useState(1);

  return (
    <div>
      <h2>Number of cake {`${props.numOfCakes}`}</h2>
      <input
        type='text'
        value={numberOfCakes}
        onChange={(e) => setNumberOfCakes(e.target.value)}
      />
      <button onClick={() => props.buyCake(numberOfCakes)}>
        Buy {`${numberOfCakes}`} Cake
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (numberOfCakesToBuy) => dispatch(buyCake(numberOfCakesToBuy)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainerPayload);
