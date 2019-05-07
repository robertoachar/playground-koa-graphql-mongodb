import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

import User from './UserModel';
import UserType from './UserType';

const UserQuery = {
  users: {
    type: GraphQLList(UserType),
    resolve: async () => {
      const users = await User.find();

      return users;
    }
  },
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (root, { id }) => {
      const user = await User.findById(id);

      return user;
    }
  }
};

export default UserQuery;
