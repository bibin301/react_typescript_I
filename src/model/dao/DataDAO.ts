'use strict';

import axios from 'axios';
import { APIConstants } from './../../constants/APIConstants';

export class DataDAO {
  constructor() {
  }

  public async getTreeFolderList(id: number, userId: string, name: string) {
    return (await axios.post(APIConstants.getTree, {
      user: {
        id,
        userId,
        name
      }
    })).data;
  }

  public async getChildrenListByParentID(dataID: string, id: number, userId: string, name: string) {
    return (await axios.post(APIConstants.getChildrenListByParentID, {
      navigatorData: {
        id: dataID
      },
      user: {
        id: id,
        userId: userId,
        name: name
      }
    })).data;
  }
}
