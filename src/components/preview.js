import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMenu } from '../services/firebase';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import '../css/preview.css'
import Loader from 'react-loader-spinner'
import MenuItemWrapper from './menu_item_wrapper';
import toColor from '../helpers/color_utils';
import extractMenuCategory from '../helpers/utils';

function Preview() {

    const [menu, setMenu] = useState({});
    const [loading, setLoading] = useState(true);
    let { id } = useParams();
    const arr = id.split("_")

    useEffect(() => {
        fetchMenu(arr[0], arr[1])
            .then(doc => {
                setMenu(doc.data())
                setLoading(false)
                // console.log(doc.data())
            }).catch(error => {
                // console.log(error)
                setLoading(false)
            });

    }, [])

    return (
        <div>
            {
                loading ? <center>
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} />
                </center>
                    :
                    <div className="container" style={{ backgroundColor: toColor(menu.preferences.bgColor) }}>
                        <img className='preview-logo' src={menu.iconUrl} alt="restaurant logo" width={100} height={100}></img>
                        <h2 className='preview-name' style={{ fontFamily: menu.preferences.headerFont, color: toColor(menu.preferences.headerColor) }}>{menu.name}</h2>
                        <div>
                        <hr/>
                            {
                                extractMenuCategory(menu.menuItems).map((val, index) => {
                                    return <div className="preview-section-container" key={index}>
                                        <h3 className='preview-section-header' style={{ fontFamily: menu.preferences.headerFont, color: toColor(menu.preferences.headerColor), textAlign:menu.preferences.textAlignment }} >{val[0].category}</h3>
                                        {
                                            val.map((m) => (
                                                <MenuItemWrapper menuItem={m} menu={menu} key={m.id} />
                                            ))
                                        }
                                        <hr />
                                    </div>
                                })

                            }
                        </div>
                    </div>
            }

        </div>
    )
}

export default Preview
