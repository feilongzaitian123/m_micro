define(['View',getViewTemplatePath('Advice')], function (View, viewhtml) {
  return _.inherit(View,{
    onCreate: function () {
      this.$el.html(viewhtml);
    },

    events: {

    },

    onPreShow: function () {
      this.turning();
    },

    onShow: function () {

    },

    onHide: function () {

    }
  });
});
