'use server';
//Handles retrieving and changing the active tags
import { clubSearch } from '@/app/clubsearch/clubSearch';
let activeTags = [];
export const tagHandleCheck = async (checked, label, search, setFiltData) => {
  console.log("checked: ", checked, " label: ", label, " search: ", search)
  if (!checked) activeTags.push(label);
  else activeTags = activeTags.filter(x => x !== label);
  const filteredSearch = await clubSearch(search, activeTags);
  console.log("filteredSearch: ", filteredSearch)
  setFiltData(filteredSearch);
};

export const handleCheck = async (checked, label) => {
  if (!checked) activeTags.push(label);
  else activeTags = activeTags.filter(x => x !== label);
};

export const getTags = async () => {
  return activeTags;
};
