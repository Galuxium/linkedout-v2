// App Directory: app/loading.tsx
import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-8">
      <div className="h-12 w-12 bg-blue-100 rounded-full animate-spin"></div>
      <span className="ml-4 text-blue-700 text-lg">Loading jobs...</span>
    </div>
  );
}