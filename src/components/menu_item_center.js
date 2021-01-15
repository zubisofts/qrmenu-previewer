import React from 'react'
import '../css/menu_item_center.css'
import toColor from '../helpers/color_utils'

function MenuItemCenter({ menuItem, settings, currency }) {

    return (
        <div className='menu-item-center-cont'>
            <p className='menu-center-title'
                style={
                    {
                        fontFamily: settings.textFont,
                        color: toColor(settings.textColor)
                    }
                }>{menuItem.name}</p>
            <p className='menu-center-description'
                style={{
                    fontFamily: settings.textFont, color: toColor(settings.textColor)
                }}>{menuItem.description}</p>
            <p className='menu-center-price'
                style={{
                    fontFamily: settings.textFont,
                    color: toColor(settings.textColor)
                }}>{menuItem.price} {currency}</p>
        </div>
    )
}

export default MenuItemCenter
