import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import MenuButton from './MenuButton';

const uniqueList = [
    ...new Set(
        Menu.map(curElem => {
            return curElem.category;
        })
    ), "All"
    ,
]

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterData = category => {

        if(category === 'All') {
            setMenuData(Menu);
            return
        }

        const updateList = Menu.filter(menu => {
            return menu.category === category
        })
        setMenuData(updateList)
    }

    return (
        <>
            <MenuButton filterData={filterData} menuList={menuList} />           
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant
