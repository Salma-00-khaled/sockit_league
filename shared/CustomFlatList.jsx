import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

const CustomFlatList = ({
  data,
  keyExtractor,
  renderItem,
  contentContainerStyle,
  ...props
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor || ((item, index) => index.toString())} // Default key extractor
      renderItem={renderItem}
      contentContainerStyle={contentContainerStyle || { paddingBottom: 20 }} // Default padding
      {...props} // Pass all other props
    />
  );
};

// PropTypes for type checking
CustomFlatList.propTypes = {
  data: PropTypes.array.isRequired,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  contentContainerStyle: PropTypes.object,
};

export default CustomFlatList;
