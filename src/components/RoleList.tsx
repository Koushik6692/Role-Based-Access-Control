import { Role } from '../types';
import { useStore } from '../store/useStore';
import { Shield, Edit2, Trash2 } from 'lucide-react';
import RoleModal from './modals/RoleModal';
import DeleteConfirmationModal from './modals/DeleteConfirmationModal';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function RoleList() {
  const roles = useStore((state) => state.roles);
  const deleteRole = useStore((state) => state.deleteRole);
  
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    if (selectedRole) {
      deleteRole(selectedRole.id);
      toast.success('Role deleted successfully');
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Roles</h1>
            <p className="mt-2 text-sm text-gray-700">
              Define and manage roles and their associated permissions
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              onClick={() => {
                setSelectedRole(null);
                setShowRoleModal(true);
              }}
              className="flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              <Shield className="mr-2 h-4 w-4" />
              Add role
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.id}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400"
            >
              <div className="flex justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-sm font-medium text-gray-900">{role.name}</h3>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => {
                      setSelectedRole(role);
                      setShowRoleModal(true);
                    }}
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => {
                      setSelectedRole(role);
                      setShowDeleteModal(true);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">{role.description}</p>
              <div className="mt-4">
                <h4 className="text-xs font-medium text-gray-500">Permissions</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {role.permissions.map((permission) => (
                    <span
                      key={permission.id}
                      className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                    >
                      {permission.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RoleModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        role={selectedRole || undefined}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete Role"
        message="Are you sure you want to delete this role? This action cannot be undone and will affect all users with this role."
      />
    </>
  );
}