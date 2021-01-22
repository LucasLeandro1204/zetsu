import { Ability, AbilityBuilder } from '@casl/ability';

export const permissions = [
  {
    subject: 'all',
    action: 'manage',
    description: 'Can control company.',

  },
  {
    action: 'publish',

  },
  action: string | string[]
  ?: string | string[]
  /** an array of fields to which user has (or not) access */
  fields?: string[]
  /** an object of conditions which restricts the rule scope */
  conditions?: any
  /** indicates whether rule allows or forbids something */
  inverted?: boolean
  /** message which explains why rule is forbidden */
  reason?: string
];

/**
 *
 */
export const auth = ({
  _id,
}) => {
  const { can, rules } = new AbilityBuilder(Ability);


  if (_id !== null) {
    can('fetch', 'Dashboard');
  }
};
