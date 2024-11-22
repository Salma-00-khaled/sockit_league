// hooks/useShowToast.js
import { useToast, View } from 'native-base';
import CustomAlert from '../shared/CustomAlert';
import React from 'react';

const useShowToast = () => {
  const toast = useToast();

  const showToast = (
    title,
    description,
    status = 'error',
    placement = 'top',
    duration = 5000,
  ) => {
    toast.show({
      render: () => (
        <View style={{ paddingHorizontal: 10 }}>
          <CustomAlert
            title={title}
            description={description}
            status={status}
          />
        </View>
      ),
      placement,
      duration,
    });
  };

  return showToast;
};

export default useShowToast;
