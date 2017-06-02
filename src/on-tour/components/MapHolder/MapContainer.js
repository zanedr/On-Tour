import { connect } from 'react-redux';
import Map from './Map';

const mapStateToProps = (state) => {
  return {Locations: state.Locations}
};

export default connect(mapStateToProps, null)(Map);
