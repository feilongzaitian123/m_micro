define(["View",getViewTemplatePath("MyInfo-detail-droplist"),"MyInfoDContactModel","UIGroupList"],function(a,b,c,d){return _.inherit(a,{onCreate:function(){this.$el.html(_.template(b)({title:"通讯"}))},events:{},initialize:function($super,a,b){$super(a,b)},onPreShow:function(){if(!this.grouplist1){var a=c.getInstance();a.execute(function(a){var b=[];_.each(a.data,function(a){var d=[];_.each(a.info,function(a){d.push({gname:a.title,name:a.value})}),b.push(c.viewMenuInfoModel("",a.title,"",d))}),this.grouplist1=new d({datamodel:{data:b},wrapper:this.$(".wrapper1")}),this.grouplist1.show()},function(){},this)}this.turning()},onShow:function(){},onHide:function(){}})});