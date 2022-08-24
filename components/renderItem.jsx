export const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteView}
          onPress={() => onPressItemDelete(item.key)}
        >
          <Text style={styles.deleteText}>削除</Text>
        </TouchableOpacity>
      </View>
    )
  } 