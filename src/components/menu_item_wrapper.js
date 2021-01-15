import React, { useEffect, useState } from 'react'
import MenuItemCenter from './menu_item_center';
import MenuItemLeft from './menu_item_left'
import MenuItemRight from './menu_item_right';

function MenuItemWrapper({menu, menuItem }) {

    const [MenuItem, setMenuItem]=useState()

    useEffect(() => {
        const alignment=menu.preferences.textAlignment
        function resolveAlignment(){
            switch (alignment) {
                case 'Right':
                    return <MenuItemRight menuItem={menuItem} settings={menu.preferences} currency={menu.currency} />
                case 'Center':
                    return <MenuItemCenter menuItem={menuItem} settings={menu.preferences} currency={menu.currency} />
                default:
                    return <MenuItemLeft menuItem={menuItem} settings={menu.preferences} currency={menu.currency} />
            }
        }
        setMenuItem(resolveAlignment)

    }, [])

    return (
        <div>
            {
                MenuItem
            }
        </div>
    )
}

export default MenuItemWrapper
