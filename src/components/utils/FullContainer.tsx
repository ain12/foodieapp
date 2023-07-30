'use client';

import '../../assets/css/header.scss';

interface PropsFullContainer {
    children: React.ReactNode;
}

const FullContainer:React.FC<PropsFullContainer> = ({
    children
}) => {
  return (
    <div className="wrapper">
        {children}
    </div>
  )
}

export default FullContainer;