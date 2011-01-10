function(data) {
  var format_date = function(date) {
    return new Date(date).toUTCString();
  };
  // $.log(data)
  var p;
  return {
    items : data.rows.map(function(r) {
      p = (r.value && r.value.profile) || {};
      p.message = r.value && r.value.message;
      p.created_at = r.value && r.value.created_at && format_date(r.value.created_at);
      return p;
    })
  }
};