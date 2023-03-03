import React from 'react';

function DeleteForm() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-600 mt-8">
        <span className="text-red-400">D</span>ELETE -{' '}
        <span className="text-red-400">DELETE</span>
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400 mt-5">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            ID
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="I.D à supprimer"
          />
        </div>
        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm mt-5 bg-red-400 text-white hover:bg-red-500">
          <button className="w-full">Supprimer 🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteForm;
