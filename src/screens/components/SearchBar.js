import { React } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

// term, onTermChange passed in from searchScreen, like props in Vue
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        // using state passed in from parent to update the term
        value={term}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#afb1b2',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
