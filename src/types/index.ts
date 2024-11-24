export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'active' | 'inactive';
  avatar: any;
  lastActive: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  module: string;
}

export type Module = 'users' | 'roles' | 'settings' | 'reports' | 'billing';

export type UserStatus = 'active' | 'inactive';