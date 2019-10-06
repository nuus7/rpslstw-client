import { toBlob } from './communication';

export const GET_TOKEN = 'getToken';
export const NEW_ROOM = 'newRoom';
export const GET_ROOMS = 'getRooms';
export const JOIN_ROOM = 'joinRoom';
export const CLEAR_ROOMS = 'clearRooms';

export const getToken = () => (
  toBlob({
    type: GET_TOKEN,
  })
);

export const newRoom = (maxUsers = 2) => (
  toBlob({
    type: NEW_ROOM,
    maxUsers,
  })
);

export const getRooms = () => (
  toBlob({
    type: GET_ROOMS,
  })
);

export const joinRoom = (roomId, token) => (
  toBlob({
    type: JOIN_ROOM,
    roomId,
    token,
  })
);

export const clearRooms = () => (
  toBlob({
    type: CLEAR_ROOMS,
  })
);