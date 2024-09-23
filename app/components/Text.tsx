import React from 'react';
import {TextProps, Text as TextRN} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

import {getFont} from '@utils/fonts';

interface TextAppProps extends TextProps {
  weight?: number;
}

export const Text: React.FC<TextAppProps> = ({weight = 500, ...props}) => {
  const {styles} = useStyles(stylesheet);

  return <TextRN style={[styles.default(weight)]} {...props} />;
};

const stylesheet = createStyleSheet(({colors}) => ({
  default: (weight: number) => ({
    fontFamily: getFont(weight),
    fontSize: 16,
    color: colors.typography,
  }),
}));
