define(["View",getViewTemplatePath("commercialInsurance"),"UISlide","LanguageStore"],function(a,b,c,d){var e=d.getInstance();return _.inherit(a,{onCreate:function(){this.$el.html(b),$("#insurance-title")[0].innerHTML=e.getAttr("language").commercialInsurance,this.$("#insurance_box").append(_.template(this.$("#commercialInsurance").html())({lanStore:e.getAttr("language")}))},events:{},onPreShow:function(){this.turning()},onShow:function(){this.slider&&this.slider._resize()},onHide:function(){}})});