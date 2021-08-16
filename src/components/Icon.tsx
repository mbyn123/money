import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('svg', true, /\.svg$/));} catch (error) {console.log(error);}

type props = {
    name: string,
    onClick?: () => void,
}

export const Icon:React.FC<props> = ({ name ,onClick}) => {
    return (
        <svg className="icon" onClick={onClick}><use xlinkHref={"#" + name}></use> </svg>
    )
}