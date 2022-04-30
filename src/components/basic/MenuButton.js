import React from "react";

const MenuButton = ({ filterData, menuList }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          {menuList.map((curElem) => {
            return (
              <button
                onClick={() => filterData(curElem)}
                className='btn-group__item'
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MenuButton;
