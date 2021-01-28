import render from 'lodash.template';
import { defineAbility } from '@casl/ability';

export const auth = ({
  userId,
  companyId,
  permissions,
}) => defineAbility((can, cannot) => {
  can('user.store');
});

