import Cell from './Cell'
type Props = {
    key: number,
    item: string,
}

const Row = ({ item }: any) => {
    return (
        <tr>
            {Object.entries(item).map(([key, value]) => {
                return <Cell key={key} cellData={JSON.stringify(value)} />
            })}
        </tr>
    )
}

export default Row