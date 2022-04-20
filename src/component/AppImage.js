import React from "react";
import PropTypes from "prop-types";

function AppImage({item}) {

    AppImage.propTypes = {
        item: PropTypes.any
    }
    return (
        <img key={item.id} className='imagegif' src={item.images.fixed_width.url} alt={item.title}/>
    )
}
export default AppImage;