import React from "react";

export const DEFAULT_STYLE = {
    footerStyle: {
        backgroundColor: 'aquamarine',
        border: '1px solid red'

    },

    itemStyle: {
        backgroundColor: '#d3d3FF'
    },

    containerStyle: {
        border: '2px solid orange'
    }

}

const StyleContext = React.createContext()

export default StyleContext