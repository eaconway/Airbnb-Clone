export const fetchHomes = () => (
  $.ajax({
    url: 'api/homes',
    method: 'GET'
  })
);

export const fetchUserHomes = () => (
  $.ajax({
    url: 'api/homes/user_index',
    method: 'GET'
  })
);

export const fetchHome = (id) => (
  $.ajax({
    url: `api/homes/${id}`,
    method: 'GET'
  })
);

export const createHome = (formData) => (
  $.ajax({
    url: 'api/homes',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteHome = (id) => (
  $.ajax({
    url: `api/homes/${id}`,
    method: 'DELETE'
  })
);
