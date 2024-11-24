import { create } from 'zustand';
import { User, Role, Permission} from '../types';
import { users as initialUsers, roles as initialRoles, permissions as initialPermissions } from '../data/mockData';

interface Store {
  users: User[];
  roles: Role[];
  permissions: Permission[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Omit<Role, 'id'>) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  users: initialUsers,
  roles: initialRoles,
  permissions: initialPermissions,

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: Math.random().toString(36).substr(2, 9) }],
    })),

  updateUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ),
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  addRole: (role) =>
    set((state) => ({
      roles: [...state.roles, { ...role, id: Math.random().toString(36).substr(2, 9) }],
    })),

  updateRole: (id, updatedRole) =>
    set((state) => ({
      roles: state.roles.map((role) =>
        role.id === id ? { ...role, ...updatedRole } : role
      ),
    })),

  deleteRole: (id) =>
    set((state) => ({
      roles: state.roles.filter((role) => role.id !== id),
    })),
}));