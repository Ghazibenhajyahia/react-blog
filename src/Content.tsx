import ItemList from "./ItemList"
import Table from "./Table"
type Props = {
    items: string[],
}



const Content = ({ items }: Props) => {
    return (
        <>
            {items.length ? (
                // <ItemList
                //     items={items}
                // />
                <Table items={items} />
            ) : (
                <p style={{ marginTop: '2rem', color: "red", textAlign: "center" }}>Your list is empty.</p >
            )}
        </ >
    )
}

export default Content