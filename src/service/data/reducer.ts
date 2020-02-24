import actionType from './actionType';
import { ComListData } from './../../model/com/ComListData';
import { ChildrenListByParentId } from './../../model/list/ChildrenListByParentId';

export type State = {
	treeClicked: ComListData,
	allTreeFolderList: Array<ComListData>,
	childrenListByParentId: Array<ChildrenListByParentId>
};


interface actionTypeInterface {
	type: actionType,
	payload: any
}

let initialState: State = {
	treeClicked: new ComListData(),
	allTreeFolderList: [],
	childrenListByParentId: []
}

export function dataReducer(state: State = initialState, action: actionTypeInterface) {
	switch (action.type) {
		case actionType.FOLDER_CLICKED:
			return {
				...state,
				treeClicked: action.payload,
			}
			case actionType.TREE_FOLDER_LIST_SUCCESS:

			return {
			  ...state,
			  allTreeFolderList: action.payload
			}
		  case actionType.CHILDREN_LIST_BY_PARENT_ID_SUCCESS:
	  
			return {
			  ...state,
			  childrenListByParentId: action.payload
			}
		default:
			return state;
	}
}

export default dataReducer;
