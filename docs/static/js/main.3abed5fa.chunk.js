(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(7),r=a.n(l),i=(a(14),a(15),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),h=(a(16),a(17),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e)))._handleSubmit=function(e){e.preventDefault(),a.props.updateFilters(a.state.filters)},a._handleType=function(e){var t=Object.assign({},a.state.filters);e.target.checked?t.types.push(e.target.name):t.types.splice(t.types.indexOf(e.target.name),1),a.setState({filters:t})},a._handleDifficulty=function(e){var t=Object.assign({},a.state.filters);e.target.checked?t.difficulties.push(e.target.name):t.difficulties.splice(t.difficulties.indexOf(e.target.name),1),a.setState({filters:t})},a._handleSelect=function(e){var t=Object.assign({},a.state.filters);t.sortOrder="lowest"===e.target.value,a.setState({filters:t})},a.state={filters:{types:[],difficulties:[],sortOrder:!0}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("aside",{className:"SideBar module"},n.a.createElement("form",{className:"SideBar-filter-form",onSubmit:this._handleSubmit},n.a.createElement("fieldset",{className:"Sidebar-category"},n.a.createElement("legend",{className:"SideBar-category-label"},"Sort:"),n.a.createElement("select",{id:"sort",onChange:this._handleSelect},n.a.createElement("option",{value:"lowest"},"Lowest to Highest"),n.a.createElement("option",{value:"highest"},"Highest to Lowest"))),n.a.createElement("fieldset",{className:"Sidebar-category"},n.a.createElement("legend",{className:"SideBar-category-label"},"Type:"),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"type-checkbox",id:"sport",name:"sport",onChange:this._handleType}),n.a.createElement("label",{htmlFor:"sport"},"Sport")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"type-checkbox",id:"top-rope",name:"top-rope",onChange:this._handleType}),n.a.createElement("label",{htmlFor:"top-rope"},"Top-rope")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"type-checkbox",id:"trad",name:"trad",onChange:this._handleType}),n.a.createElement("label",{htmlFor:"trad"},"Trad"))),n.a.createElement("fieldset",{className:"Sidebar-category"},n.a.createElement("legend",{className:"SideBar-category-label"},"Difficulty:"),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.13",name:"5.13",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.13"},"5.13")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.12",name:"5.12",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.12"},"5.12")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.11",name:"5.11",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.11"},"5.11")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.10",name:"5.10",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.10"},"5.10")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.9",name:"5.9",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.9"},"5.9")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.8",name:"5.8",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.8"},"5.8")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.7",name:"5.7",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.7"},"5.7")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.6",name:"5.6",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.6"},"5.6")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.5",name:"5.5",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.5"},"5.5")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.4",name:"5.4",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.4"},"5.4")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.3",name:"5.3",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.3"},"5.3")),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement("input",{type:"checkbox",className:"difficulty-checkbox",id:"5.2",name:"5.2",onChange:this._handleDifficulty}),n.a.createElement("label",{htmlFor:"5.2"},"5.2"))),n.a.createElement("input",{className:"Sidebar-form-submit-btn",type:"submit",value:"Filter"})))}}]),t}(c.Component)),f=(a(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this)))._handleFavoriteClick=function(){e.setState({favorite:!e.state.favorite})},e.componentDidUpdate=function(){localStorage.setItem(e.props.routeName,JSON.stringify(e.state.favorite))},e.componentDidMount=function(){e.setState({favorite:JSON.parse(localStorage.getItem(e.props.routeName))||!1})},e.state={favorite:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.area,a=e.routeName,c=e.difficultyLevel,l=e.type;return n.a.createElement("section",{className:"Route"},n.a.createElement("div",{className:"Route-info-container"},n.a.createElement("h4",{className:"Route-name"},a),n.a.createElement("h5",{className:"Route-area"},"Area: ",t),n.a.createElement("h5",{className:"Route-difficulty"},"Difficulty: ",c),n.a.createElement("h5",{className:"Route-type"},"Type: ",l.join(", "))),n.a.createElement("i",{className:"fas fa-heart Route-favorite-button"+(this.state.favorite?" favorited":""),onClick:this._handleFavoriteClick}))}}]),t}(c.Component)),p=(a(19),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.place,c=t.closestTown,l=t.routes;return e=this.props.routes.length>0?l.map(function(e,t){return n.a.createElement(f,{key:t,climbingPlaceId:e.climbingPlaceId,area:e.area,routeName:e.routeName,difficultyLevel:e.difficultyLevel,type:e.type})}):n.a.createElement("h3",{className:"Place-no-results-text"},"No routes to display"),n.a.createElement("article",{className:"Place module"},n.a.createElement("section",{className:"Place-header-container"},n.a.createElement("div",{className:"Place-info"},n.a.createElement("h3",{className:"Place-name"},a),n.a.createElement("h4",{className:"Place-nearest-town"},"Closest City: ",c))),n.a.createElement("section",{className:"Place-routes-container"},e))}}]),t}(c.Component)),d=(a(20),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"Places",id:"Places"},n.a.createElement("h2",{className:"Places-header"},"Results"),n.a.createElement(h,{updateFilters:this.props.updateFilters}),n.a.createElement("section",{className:"Places-container"},this.props.places.map(function(e,t){return n.a.createElement(p,{key:t,place:e.place,closestTown:e.closestTown,climbingId:e.climbingId,routes:e.routes})})))}}]),t}(c.Component)),b=(a(21),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this)))._handleChange=function(t){e.setState({inputValue:t.target.value})},e._handleSubmit=function(t){t.preventDefault(),e.props.updateSearch(e.state.inputValue)},e.state={inputValue:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"SearchForm"},n.a.createElement("h1",{className:"SearchForm-logo"},"Climb",n.a.createElement("span",null,"On")),n.a.createElement("form",{className:"SearchForm-form",onSubmit:this._handleSubmit},n.a.createElement("input",{className:"SearchForm-search-bar",type:"text",name:"search",autoComplete:"on",placeholder:"Search an area or town...",onChange:this._handleChange}),n.a.createElement("button",{className:"SearchForm-submit-button"},n.a.createElement("i",{className:"fas fa-search"}))))}}]),t}(c.Component)),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){var t=fetch("https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/routes").then(function(e){return e.json()}),a=fetch("https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/climbingPlaces").then(function(e){return e.json()});Promise.all([t,a]).then(function(t){var a=e.mergeData(t[0].routes,t[1].climbingPlaces);e.setState({combinedData:a})}).catch(function(e){return console.log(e)})},e.mergeData=function(e,t){return t.map(function(t){return t.routes=e.filter(function(e){return e.climbingPlaceId===t.climbingId}),t})},e.sortByDifficulty=function(e,t){e.forEach(function(e){e.routes.sort(function(e,a){var c=parseInt(e.difficultyLevel.slice(2).replace("a","1").replace("b","2").replace("c","3").replace("d","4")),n=parseInt(a.difficultyLevel.slice(2).replace("a","1").replace("b","2").replace("c","3").replace("d","4"));return t?c-n:n-c})})},e.updateSearch=function(t){e.setState({searchQuery:t})},e.searchData=function(){var t=e.state.searchQuery.toLowerCase();return e.state.combinedData.filter(function(e){return e.place.toLowerCase().includes(t)||e.closestTown.toLowerCase().includes(t)})},e.filterResults=function(t){return t.map(function(t){var a=Object.assign({},t);return a.routes=e.filterRoutes(a.routes),a})},e.updateFilters=function(t){e.setState({filters:t})},e.getDataToDisplay=function(){var t=e.state.combinedData?e.searchData():[],a=e.filterResults(t);return e.sortByDifficulty(a,e.state.filters.sortOrder),a},e.state={combinedData:null,searchQuery:"",filters:{types:[],difficulties:[],sortOrder:!0}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"filterRoutes",value:function(e){var t=this,a=this.state.filters,c=a.types,n=a.difficulties;return e.filter(function(e){var a=t.isRouteTypeAllowed(c,e),l=t.isRouteDifficultyAllowed(n,e);return c.length>0&&n.length>0?a&&l:c.length>0?a:!(n.length>0)||l})}},{key:"isRouteTypeAllowed",value:function(e,t){return t.type.some(function(t){return e.includes(t)})}},{key:"isRouteDifficultyAllowed",value:function(e,t){return e.includes(t.difficultyLevel.match(/.+[^a-d]/)[0])}},{key:"render",value:function(){var e,t,a=this.getDataToDisplay();return a.length>0&&(e=n.a.createElement(d,{places:a,updateFilters:this.updateFilters}),t=n.a.createElement("a",{href:"#Places",className:"App-arrow-container bounce"},n.a.createElement("i",{className:"fas fa-chevron-down App-down-arrow"}))),n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(b,{updateSearch:this.updateSearch}),t),e)}}]),t}(c.Component);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3abed5fa.chunk.js.map