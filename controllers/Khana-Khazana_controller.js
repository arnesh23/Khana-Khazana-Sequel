module.exports = {
    renderHome: function(res,dbKhana) {
      res.render("index", {khana:dbKhana});
    }
  };