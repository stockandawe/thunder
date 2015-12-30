angular.module('thunder.services', [])
  .factory('User', function() {
    var o = {
      favorites: []
    }

    o.addProductToFavorites = function(product) {
      // make sure there's a product to add
      if (!product) return false;

      // add to favorites array
      o.favorites.unshift(product);
    }
    return o;
});
