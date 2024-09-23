import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export interface TouchableProps extends PressableProps {
  children: React.ReactNode;

  /**
   * Style cho phần tử bên trong
   */
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export const Touchable: React.FC<TouchableProps> = ({
  children,
  contentStyle,
  onPressIn,
  onPressOut,
  style,
  disabled,
  ...props
}) => {
  const scaleAnimated = useSharedValue(1);

  const {styles} = useStyles(stylesheet);
  const stylez = useAnimatedStyle(() => ({
    transform: [{scale: scaleAnimated.value}],
  }));

  const pressIn = (event: GestureResponderEvent) => {
    scaleAnimated.value = withSpring(0.8);

    onPressIn?.(event);
  };

  const pressOut = (event: GestureResponderEvent) => {
    scaleAnimated.value = withTiming(1, {duration: 100});

    onPressOut?.(event);
  };

  return (
    <Pressable
      style={[styles.default(disabled), style]}
      onPressIn={pressIn}
      onPressOut={pressOut}
      disabled={disabled}
      {...props}>
      <Animated.View style={[stylez, contentStyle]}>{children}</Animated.View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet(() => ({
  default: (disabled?: boolean | null) => ({
    opacity: disabled ? 0.6 : 1,
  }),
}));
