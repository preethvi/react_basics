import React from 'react'
const List = () => {
    const url=[
    {id:0,"url":'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg'},
    {id:1,"url":'https://clipart-library.com/images/pcqra6XXi.jpg'},
    {id:2,"url":'https://wallpapertag.com/wallpaper/full/c/c/6/892758-cool-flower-wallpapers-1920x1200-720p.jpg'},
    {id:3,"url":'https://img.freepik.com/free-photo/closeup-shot-purple-flower_181624-25863.jpg'},
    {id:4,"url":'https://img.freepik.com/free-photo/closeup-african-daisies-surrounded-by-greenery-field-sunlight-daytime_181624-29877.jpg?w=360'},
    {id:5,"url":'https://images.unsplash.com/photo-1599238826222-0334ef62ccce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80'},
    {id:6,"url":'https://wallpapers.com/images/featured/rose-easfrj48zd8k79z9.jpg'},
    {id:7,"url":'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/two-plumeria-flowers-sara-ricer.jpg'},
   ]
  return (
    <>
    <h1>Flowers</h1>
    <div className="image-container">
        {url.map((src)=>
            <div className="images" key={src.id}>
             <img src={src.url} alt="Flowers"/>
            </div>
        )}
    </div>
    </>
  )
}

export default List