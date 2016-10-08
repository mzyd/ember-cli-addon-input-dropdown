import Ember from 'ember';
import layout from '../templates/components/input-dropdown';

export default Ember.Component.extend({
	layout: layout,

	showUl: false,

	locationOfLi: false,

	isDisabled: false,

	showScroll: false,

	isFixedWidth: Ember.computed("fixedWidth",function(){
		if ( this.get("fixedWidth") ){
			// console.log("isFixedWidth return true");
			return true;
		}else{
			// console.log("isFixedWidth return false");
			return false;
		}
	}),
	

	didRender(){
		if(this.get("default") === undefined){
			this.set("default", this.get("valueList")[0]);
			// 下面这句回头网络测试的时候打开, 不然会报错, 不显示默认值
			this.set("respondValue",this.get("respondList")[0]);
		}
		if(this.get("location") === undefined){
			this.set("location","left");
		}

		if (this.get("valueList").length > 10) {
			this.set("showScroll", true);
		}
	},

	actions: {
		openUl() {
			this.set("isChanging",false);
			if (this.get("isDisabled") === true) { return; }

			this.set("showUl", !this.get("showUl"));
		},

		replaceVal(index) {
			console.log("click！！！！！");
			this.set("showUl", false);
			this.set("default", this.get("valueList")[index]);
            // 下面这句回头网络测试的时候打开, 不然会报错, 不显示默认值
			this.set("respondValue", this.get("respondList")[index]);
			return;
		},

		replaceValDouble(){
			console.log("Double click！！！！！");
		},

		moveDropdownUl(){
			console.log("enter！！！！！");
			this.set("showUl", true);
		},

		leaveDropdownUl(){
			this.set("showUl", false);
		}
	}
});
