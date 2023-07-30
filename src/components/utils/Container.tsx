'use client';

import '../../assets/css/containers.scss';

interface PropsContainer {
    children: React.ReactNode;
}

const Container:React.FC<PropsContainer> = ({
    children
}) => {
  return (
    <div className="wrapper">
        {children}
    </div>
  )
}

export default Container;