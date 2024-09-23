import {Touchable} from '@components/buttons';
import {Icon} from '@components/Icon';
import {Text} from '@components/Text';
import {getFont} from '@utils/fonts';
import React, {useState} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface InputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  labelStyle?: StyleProp<TextStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  password?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  labelStyle,
  errorMessageStyle,
  containerStyle,
  style,
  password,
  secureTextEntry,
  ...props
}) => {
  const {styles} = useStyles(stylesheet);
  const [secureText, setSecureText] = useState(secureTextEntry);

  const toggleSecure = () => {
    setSecureText(pre => !pre);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      <View>
        <TextInput
          secureTextEntry={secureText}
          style={[styles.input(password), style]}
          {...props}
        />
        <View style={styles.eyeWrap}>
          <Touchable onPress={toggleSecure}>
            {password ? (
              <Icon name={secureText ? 'eye-slash' : 'eye'} size={20} />
            ) : null}
          </Touchable>
        </View>
      </View>
      <Text style={[styles.errorMessage, errorMessageStyle]}>
        {errorMessage}
      </Text>
    </View>
  );
};

const stylesheet = createStyleSheet(({colors, spacing}) => ({
  input: (iconRight?: boolean) => ({
    borderRadius: 90,
    backgroundColor: colors.lightGreen,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xl,
    fontFamily: getFont(500),
    fontSize: 14,
    color: colors.typography,
    paddingRight: iconRight ? 50 : spacing.xl,
  }),
  label: {paddingLeft: spacing.lg},
  errorMessage: {color: colors.error, fontSize: 12, paddingLeft: spacing.lg},
  container: {gap: spacing.md},
  eyeWrap: {
    position: 'absolute',
    right: spacing.lg,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
