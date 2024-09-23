import React from 'react';
import {TextProps} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

import {Text} from '@components/Text';

interface TextActionButtonProps extends Omit<TextProps, 'children'> {
  label: string;
  actionText: string;
  onPress?: () => void;
}

export const TextActionButton: React.FC<TextActionButtonProps> = ({
  label,
  actionText,
  onPress,
  ...props
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <Text {...props}>
      <Text>{`${label} `}</Text>
      <Text onPress={onPress} style={styles.action}>
        {actionText}
      </Text>
    </Text>
  );
};

const stylesheet = createStyleSheet(({colors}) => ({
  action: {
    color: colors.blueAction,
  },
}));
