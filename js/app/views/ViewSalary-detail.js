define(["View",getViewTemplatePath("ViewSalary-detail"),"SalaryStore"],function(a,b,c){return _.inherit(a,{onCreate:function(){},events:{},onPreShow:function(){var a=c.getInstance(),d=a.getAttr("salary-detail-title"),e=JSON.parse(a.getAttr("salary-detail-data"));this.$el.html(_.template(b)({title:d,data:e})),this._initHead(),this.turning()},onShow:function(){},onHide:function(){}})});