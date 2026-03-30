export default function TabList( { tabs }) {

    return (
        <div className="tab-list">
            {
                tabs?.map((Tab, key) => (
                    <div className="tab">
                        <Tab id={key}></Tab>
                    </div>
                ))
            }
        </div>
    )
}