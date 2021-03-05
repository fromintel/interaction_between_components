export interface Person {
  name: string,
  role: PersonRole,
  permissions: PersonPermission
}

export enum PersonRole {
  VILLAIN,
  HERO,
  ROBBER
}

interface PersonPermission {
  hasEntity: boolean;
  isActiveAbility?: boolean
}
