export const fetchUserLikes = () => (
  $.ajax({
    url: `api/users/:user_id/likes/userIndex`,
    method: 'GET'
  })
);

export const fetchLikes = () => (
  $.ajax({
    url: `api/likes`,
    method: 'GET'
  })
);

export const createLike = (like) => (
  $.ajax({
    url: `api/likes`,
    method: 'POST',
    data: { like }
  })
);

export const deleteLike = (id) => (
  $.ajax({
    url: `api/likes/${id}`,
    method: 'DELETE'
  })
);
