import React from 'react'
import '../css/menu_item_right.css'
import toColor from '../helpers/color_utils'

function MenuItemRight({ menuItem, settings, currency }) {

    return (
        <div className='menu-item-right-cont'>
            <p className='menu-right-title' style={
                    {
                        fontFamily: settings.textFont,
                        color: toColor(settings.textColor)
                    }
                }>{menuItem.name}</p>
            <p className='menu-right-description' style={
                    {
                        fontFamily: settings.textFont,
                        color: toColor(settings.textColor)
                    }
                }>{menuItem.description}</p>
            <p className='menu-right-price' style={
                    {
                        fontFamily: settings.textFont,
                        color: toColor(settings.textColor)
                    }
                }>{menuItem.price} {currency}</p>
        </div>
    )
}

export default MenuItemRight
