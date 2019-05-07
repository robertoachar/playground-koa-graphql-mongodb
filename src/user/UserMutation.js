import { GraphQLNonNull, GraphQLString } from 'graphql';

import User from './UserModel';
import UserType from './UserType';
import { UserCreateInputType, UserUpdateInputType } from './UserInput';

const UserMutation = {
  createUser: {
    type: UserType,
    args: {
      input: {
        type: GraphQLNonNull(UserCreateInputType)
      }
    },
    resolve: async (root, { input }) => {
      const user = new User({
        name: input.name,
        country: input.country
      });

      await user.save();

      return user;
    }
  },
  deleteUser: {
    type: UserType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLString)
      }
    },
    resolve: async (root, { id }) => {
      const user = await User.findOneAndRemove({ _id: id });

      return user;
    }
  },
  updateUser: {
    type: UserType,
    args: {
      input: {
        type: GraphQLNonNull(UserUpdateInputType)
      }
    },
    resolve: async (root, { input }) => {
      const user = User.findOneAndUpdate(
        { _id: input.id },
        {
          name: input.name,
          country: input.country
        },
        { new: true }
      );

      return user;
    }
  }
};

export default UserMutation;
