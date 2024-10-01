import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-28">
      <h1 className="text-4xl text-white bg-indigo-950 rounded-md p-1 xl:mt-4">{title}</h1>
    </div>
  );
};

export default Header;
