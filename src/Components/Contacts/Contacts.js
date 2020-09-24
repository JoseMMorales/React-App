import React from 'react';

export const Contacts = ({title, text1, text2}) => {
  return (
      <div>
        <h3 className="text-center">{title}</h3>
        <div>
          <p className="text-center">{text1}</p>
          <p className="text-center">{text2}</p>
        </div>
      </div>
  )
}