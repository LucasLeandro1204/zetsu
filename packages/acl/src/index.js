import render from 'lodash.template';
import { Ability, AbilityBuilder } from '@casl/ability';

// readonly action: Tuple<A>[0] | Tuple<A>[0][];
// readonly subject: Tuple<A>[1] | Tuple<A>[1][];
// readonly inverted: boolean;
// readonly conditions: C | undefined;
// readonly fields: string[] | undefined;
// readonly reason: string | undefined;

/**
 *
 */
export const auth = ({
  _id,
  permissions = [],
}) => {
  if ()
  const { can, build } = new AbilityBuilder(Ability);

  for (const { action, subject, conditions } of permissions) {
    can(
      action,
      subject,
      render(conditions, { _id }),
    );
  }

  return build;
};
