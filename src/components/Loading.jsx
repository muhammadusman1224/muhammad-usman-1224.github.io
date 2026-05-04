import React from 'react'

export default function Loading(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary" />
    </div>
  )
}
