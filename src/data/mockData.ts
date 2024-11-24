import { User, Role, Permission } from '../types';

export const permissions: Permission[] = [
  {
    id: '1',
    name: 'read:users',
    description: 'View user information',
    module: 'users'
  },
  {
    id: '2',
    name: 'write:users',
    description: 'Create and edit users',
    module: 'users'
  },
  {
    id: '3',
    name: 'delete:users',
    description: 'Delete users',
    module: 'users'
  },
  {
    id: '4',
    name: 'manage:roles',
    description: 'Manage roles and permissions',
    module: 'roles'
  },
  {
    id: '5',
    name: 'read:reports',
    description: 'View reports',
    module: 'reports'
  }
];

export const roles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: permissions
  },
  {
    id: '2',
    name: 'Manager',
    description: 'Can manage users and view reports',
    permissions: [permissions[0], permissions[1], permissions[4]]
  },
  {
    id: '3',
    name: 'User',
    description: 'Basic user access',
    permissions: [permissions[0], permissions[4]]
  }
];

export const users: User[] = [
  {
    id: '0',
    name: 'Koushik Sarabu',
    email: 'koushik@vrvsecurity.com',
    role: roles[0],
    status: 'active',
    avatar: 'image.png',
    lastActive: '2024-03-15T10:30:00Z'
  },
  {
    id: '1',
    name: 'John Smith',
    email: 'john@vrvsecurity.com',
    role: roles[1],
    status: 'active',
    avatar: 'image.png',
    lastActive: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@vrvsecurity.com',
    role: roles[2],
    status: 'active',
    avatar: 'image.png',
    lastActive: '2024-03-15T09:15:00Z'
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael@vrvsecurity.com',
    role: roles[2],
    status: 'inactive',
    avatar: 'image.png',
    lastActive: '2024-03-14T16:45:00Z'
  }
];