import React from 'react';
import {Touchable, TouchableProps} from './Touchable';
import {Text} from '@components/Text';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface PrimaryButtonProps extends Omit<TouchableProps, 'children'> {
  label: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  ...props
}) => {
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

const stylesheet = createStyleSheet(({colors, spacing}) => ({
  content: {alignItems: 'center', justifyContent: 'center'},
  container: {
    backgroundColor: colors.mainGreen,
    borderRadius: 90,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xl,
  },
}));
