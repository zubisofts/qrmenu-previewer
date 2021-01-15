function extractMenuCategory(menuList){

    var categories=Array.from(new Set(menuList.map((val)=>{
        return val.category
    })))

    var items=categories.map((val)=>{
        return menuList.filter(item=>{
            return item.category===val
        })
    })

    items.sort((item1, item2) => item1.timestamp > item2.timestamp ? 1 : -1)

    // items.forEach(val=>{
    //     console.log(val)
    // })

    return items
}

export default extractMenuCategory