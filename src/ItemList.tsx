import ListItem from "./ListItem"
type Props = {
    items: string[],
}

const ItemList = ({ items }: Props) => {
    return (
        <ul>
            {items.map((item) => (
                <ListItem
                    item={item}
                    key={item + Math.random()}
                />
            ))}
        </ul>
    )
}

export default ItemList