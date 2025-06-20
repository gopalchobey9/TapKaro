import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { AuthActionTypes } from '../actions/authActions';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
}

const CHANGE_EVENT = 'change';

let _state: AuthState = {
  isAuthenticated: false,
  user: null,
};

class AuthStore extends EventEmitter {
  getState() {
    return _state;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback: () => void) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: () => void) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const store = new AuthStore();

AppDispatcher.register((action: any) => {
  switch (action.type) {
    case AuthActionTypes.SIGNUP:
    case AuthActionTypes.SIGNIN:
      _state = {
        isAuthenticated: true,
        user: { email: action.payload.email },
      };
      store.emitChange();
      break;
    case AuthActionTypes.SIGNOUT:
      _state = {
        isAuthenticated: false,
        user: null,
      };
      store.emitChange();
      break;
    default:
    // do nothing
  }
});

export default store; 