import render from 'lodash.template';
import { Ability, AbilityBuilder } from '@casl/ability';

/**
 * User pre-defined roles.
 */
export const roles = {
  /**
   * Root user can do and see everything.
   */
  ROOT: 'root',

  /**
   * Admin user can do and se everything of the company it belongs to.
   */
  ADMIN: 'admin',
};

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
