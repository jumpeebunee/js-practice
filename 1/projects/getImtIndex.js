const getImtIndex = (height, weight) => {
  const smHeight = height * 2.54;
  const kgWeight = Math.ceil(weight * 0.453592);
  const heightMeters = smHeight / 100;

  return Math.floor(kgWeight / heightMeters ** 2);
};
