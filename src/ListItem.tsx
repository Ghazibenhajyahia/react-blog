type Props = {
  item: string,
}

const ListItem = ({ item }: Props) => {
  return (
    <li>
      <label>
        {JSON.stringify(item)}
      </label>
    </li>
  )
}

export default ListItem