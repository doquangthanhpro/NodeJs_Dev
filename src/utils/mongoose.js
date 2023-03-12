module.exports = {
     extraObject: function (item) {
         return item.map((e) => e.toObject())
     },
     muntyObject : function (item) {
     return item.forEach((e) => e.toObject())
  }
}
