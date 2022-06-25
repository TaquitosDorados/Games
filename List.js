import React from 'react'
import { FlatList, Text } from 'react-native'

const List = ({data}) => {
  return (
    <FlatList
        data={data}
        renderItem = {({item}) => <Text>{item.value}</Text>}
    />
  )
}

export default List;