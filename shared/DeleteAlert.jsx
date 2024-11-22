import React, { useRef } from 'react';
import { AlertDialog, Button, Text } from 'native-base';
import PropTypes from 'prop-types'; // Import PropTypes
function DeleteAlert({ id = 0, title = 'error', updateState, deleteFunction }) {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={id}
      onClose={updateState}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Delete {title}</AlertDialog.Header>
        <AlertDialog.Body flex={1}>
          <Text>Are you sure to delete ({title}) ?</Text>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group size='xs' space={2}>
            <Button
              variant='unstyled'
              colorScheme='coolGray'
              onPress={updateState}
              ref={cancelRef}
            >
              Cancel
            </Button>
            <Button colorScheme='danger' onPress={deleteFunction}>
              Delete
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}

DeleteAlert.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};
export default DeleteAlert;
