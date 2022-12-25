import { actions } from '../actions/actions';

export default function useAction(actionName) {
    return actions[actionName];
}
