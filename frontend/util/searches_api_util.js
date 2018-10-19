export const fetchSearches = (authorId) => (
  $.ajax({
    url:'api/searches',
    method: 'GET',
    data: {authorId}
  })
);

export const fetchSearch = (id) => (
  $.ajax({
    url:`api/searches/${id}`,
    method: 'GET'
  })
);

export const createSearch = search => (
  $.ajax({
    url: 'api/searches',
    method: 'POST',
    data: { search }
  })
);
