import React from 'react';
import FontAwesome6, {
  FontAwesome6IconProps,
} from 'react-native-vector-icons/FontAwesome6';

interface IconProps extends FontAwesome6IconProps {}

export const Icon: React.FC<IconProps> = props => {
  return <FontAwesome6 {...props} />;
};
