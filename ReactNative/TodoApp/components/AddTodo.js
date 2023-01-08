import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddTodo(props) {
  const [text, setText] = useState('');

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  const onPress = () => {
    setText('');
    // 현재 나타난 키보드 닫기
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {/* 버튼을 눌렀을 때 효과 주기 */}
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback>{button}</TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#26a69a',
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
