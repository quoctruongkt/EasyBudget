export const getFont = (weight: number) => {
  if (weight >= 700) {
    return 'Quicksand-Bold';
  }

  if (weight >= 600) {
    return 'Quicksand-SemiBold';
  }

  if (weight >= 500) {
    return 'Quicksand-Medium';
  }

  if (weight >= 400) {
    return 'Quicksand-Regular';
  }

  return 'Quicksand-Light';
};
