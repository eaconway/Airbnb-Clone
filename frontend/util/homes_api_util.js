export const fetchHomes = () => (
  $.ajax({
    url: 'api/homes',
    method: 'GET'
  })
);

export const fetchHome = (id) => (
  $.ajax({
    url: `api/homes/${id}`,
    method: 'GET'
  })
)

export const createHome = (formData) => (
  $.ajax({
    url: 'api/homes',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)
