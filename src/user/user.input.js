import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

const UserCreateInputType = new GraphQLInputObjectType({
  name: 'UserCreateInputType',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    country: {
      type: GraphQLNonNull(GraphQLID)
    }
  }
});

const UserUpdateInputType = new GraphQLInputObjectType({
  name: 'UserUpdateInputType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    country: {
      type: GraphQLNonNull(GraphQLID)
    }
  }
});

export { UserCreateInputType, UserUpdateInputType };
