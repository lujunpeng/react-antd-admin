import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(isOnline) {
    setIsOnline(isOnline);
  }

  useEffect(() => {
    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    handleStatusChange(friendID)
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    // };
  });

  return isOnline;
}

export default useFriendStatus