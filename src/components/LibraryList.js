import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

/*

*/


class LibraryList extends Component {
renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};
/*
the libraries name is arbitrary but pertains to the this.props in this file
the state.libraries isnt arbitrary. state.libraries pertains to the libraries from 
reducer which spits out a state of libraries. 
*/


export default connect(mapStateToProps)(LibraryList);
//connect(from what)(to what as a props.libraries);
