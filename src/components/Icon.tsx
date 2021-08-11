// require('svg/money.svg')
// require('svg/detail.svg')
// require('svg/chart.svg')

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('svg', true, /\.svg$/));} catch (error) {console.log(error);}

export const Icon = ({ name }: { name: string }) => {
    return (
        <svg className="iocn"><use xlinkHref={"#" + name}></use> </svg>
    )
}