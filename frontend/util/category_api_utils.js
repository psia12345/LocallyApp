export const filter = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/categories/${id}`,
    success,
    error
  });
};
