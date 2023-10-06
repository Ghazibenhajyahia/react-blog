import Row from './Row'

type Props = {
    items: string[],
}

const Table = ({ items }: Props) => {
    return (
        <div className="table-container">
            <table>
                <tbody>
                    {items.map((item, key) => (

                        <Row key={key} item={item} />

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table