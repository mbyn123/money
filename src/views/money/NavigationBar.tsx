
export const NavigationBar = ({ close }: { close: () => void }) => {
    function handleClick() {
        close()
    }
    return (
        <div>
            <button onClick={handleClick}>取消</button>
        </div>
    )
}