import render from 'lodash.template';
import { subject } from '@casl/ability';
import { Ability, AbilityBuilder } from '@casl/ability';

export const permissions = {
  user: {
    view: [
      {
        value: null,
        label: 'All',
      },
      {

      },
    ],
  },
};

/**
 *
 */
// export const roles =

/**
 * Build authenticated user permissions.
 */
export const auth = ({
  userId,

  role,
}) => {
  const { can, build } = new AbilityBuilder(Ability);



  // switch (role) {
  //   case roles.ADMIN: {
  //     can('manage', 'all');
  //   }

  //   default: {

  //   }
  // }

  can('store', 'User', {  });

  return build();
};

export const app = () => {

};
