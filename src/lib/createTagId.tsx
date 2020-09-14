let id = parseInt(window.localStorage.getItem('maxTagId') || '0');

export const createTagId = () => {
  id += 1;
  window.localStorage.setItem('maxTagId', id.toString());
  return id;
}