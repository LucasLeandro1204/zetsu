import render from 'lodash.template';
import { defineAbility } from '@casl/ability';

export const auth = ({
  userId,
}) => defineAbility((can, cannot) => {
  can('manage', 'Member', {  });
});
