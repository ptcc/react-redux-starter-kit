import { fetchEntitiesFactory, fetchEntityFactory } from 'app/entities/fetchEntities';

export const fetchUsers = fetchEntitiesFactory('users');
export const fetchUser = fetchEntityFactory('users');
