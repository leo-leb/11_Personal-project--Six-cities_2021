import reducerMain from './main-screen/reducer';
import reducerRoom from './room-screen/reducer';
import reducerFavorite from './favorite-screen/reducer';
import reducerOffersList from './offers-list/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  main: reducerMain,
  room: reducerRoom,
  favorite: reducerFavorite,
  offersList: reducerOffersList
});
