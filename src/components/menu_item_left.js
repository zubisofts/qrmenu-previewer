import React from 'react'
import '../css/menu_item_left.css'
import toColor from '../helpers/color_utils'

function MenuItemLeft({ menuItem, settings, currency }) {
    return (
        <div className='menu-item-left-cont'>
            <p className='menu-left-title' style={
                    {
                        fontFamily: settings.textFont,
                        color: toColor(settings.textColor)
                    }
                }>{menuItem.name}</p>
            <p className='menu-left-description' style={
                    {
                        fontFamily: settings.textFont,
                        color: toColor(settings.textColor)
                    }
                }>{menuItem.description}</p>
            <p className='menu-left-price' style={
                    {
                        fontFamily: settings.textFont,
                        color: toColor(settings.textColor)
                    }
                }>{menuItem.price} {currency}</p>
        </div>
    )
}

export default MenuItemLeft
