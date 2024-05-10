import React from 'react'

const Leftbar = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      چپ
      {children}
    </div>
  )
}

export default Leftbar
