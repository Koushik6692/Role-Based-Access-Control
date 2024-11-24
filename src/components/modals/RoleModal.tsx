import React from 'react';
import { Dialog } from '@headlessui/react';
import { Role } from '../../types';
import { useStore } from '../../store/useStore';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  role?: Role;
}

export default function RoleModal({ isOpen, onClose, role }: RoleModalProps) {
  const permissions = useStore((state) => state.permissions);
  const addRole = useStore((state) => state.addRole);
  const updateRole = useStore((state) => state.updateRole);

  const [formData, setFormData] = React.useState({
    name: role?.name || '',
    description: role?.description || '',
    permissionIds: role?.permissions.map((p) => p.id) || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPermissions = permissions.filter((p) => formData.permissionIds.includes(p.id));
    
    if (role) {
      updateRole(role.id, {
        name: formData.name,
        description: formData.description,
        permissions: selectedPermissions,
      });
    } else {
      addRole({
        name: formData.name,
        description: formData.description,
        permissions: selectedPermissions,
      });
    }
    setFormData({ name:"",description:"", permissionIds:[]})
    onClose();
  };

  const togglePermission = (permissionId: string) => {
    setFormData((prev) => ({
      ...prev,
      permissionIds: prev.permissionIds.includes(permissionId)
        ? prev.permissionIds.filter((id) => id !== permissionId)
        : [...prev.permissionIds, permissionId],
    }));
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md md:w-[30vw] rounded-lg bg-white p-6">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">
            {role ? 'Edit Role' : 'Add Role'}
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
              <div className="space-y-2">
                {permissions.map((permission) => (
                  <label key={permission.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.permissionIds.includes(permission.id)}
                      onChange={() => togglePermission(permission.id)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm text-gray-700">{permission.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                {role ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}