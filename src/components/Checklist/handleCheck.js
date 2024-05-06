//Handles retrieving and changing the active tags
'use server';
let activeTags = [];
export const handleCheck = async (checked, label) => {
  if (!checked) activeTags.push(label);
  else activeTags = activeTags.filter(x => x !== label);
};

export const getTags = async () => {
  return activeTags;
};
