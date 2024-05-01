let activeTags = [];
export const handleCheck = (checked, label) => {
  if (!checked) activeTags.push(label);
  else activeTags = activeTags.filter(x => x !== label);
};

export const getTags = () => {
  return activeTags;
};
