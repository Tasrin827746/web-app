import React from 'react';
interface HeadingComponentProps{
  headingLabel:string;
}

const HeadingComponent:React.FC<HeadingComponentProps> = ({headingLabel}) => {
  return (
    <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-6">
      {headingLabel}
    </h1>
  )
}

export default HeadingComponent