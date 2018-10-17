export const fetchHomes = (filters) => (
  $.ajax({
    url: 'api/homes',
    method: 'GET',
    data: { filters }
  })
);

export const fetchUserHomes = () => (
  $.ajax({
    url: 'api/users/:user_id/homes/user_index',
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

export const updateHome = (formData) => (
  $.ajax({
    url: `api/homes/${formData.get('home[id]')}`,
    method: 'PATCH',
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
