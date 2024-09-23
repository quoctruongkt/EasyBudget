import React from 'react';
import {Touchable, TouchableProps} from './Touchable';
import {Text} from '@components/Text';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface TextButtonProps extends Omit<TouchableProps, 'children'> {
  label: string;
}

export const TextButton: React.FC<TextButtonProps> = ({label, ...props}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <Touchable
      style={styles.container}
      contentStyle={styles.content}
      {...props}>
      <Text weight={700}>{label}</Text>
    </Touchable>
  );
};

const stylesheet = createStyleSheet(({spacing}) => ({
  content: {alignItems: 'center', justifyContent: 'center'},
  container: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.lg,
  },
}));
