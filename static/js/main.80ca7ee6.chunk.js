(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":0,"clicked":false,"name":"F-104","image":"https://nationalinterest.org/sites/default/files/styles/desktop__1260_/public/main_images/E83%20%281%29.jpg?itok=QJL7lF_Vg"},{"id":1,"clicked":false,"name":"QF-4","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/QF-4_Holloman_AFB.jpg/440px-QF-4_Holloman_AFB.jpg"},{"id":2,"clicked":false,"name":"F-111","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/An_air-to-air_left_front_view_of_an_F-111_aircraft_during_a_refueling_mission_over_the_North_Sea_DF-ST-89-03609_%28altered%29.jpg/600px-An_air-to-air_left_front_view_of_an_F-111_aircraft_during_a_refueling_mission_over_the_North_Sea_DF-ST-89-03609_%28altered%29.jpg"},{"id":3,"clicked":false,"name":"F-16","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/F-16_CJ_Fighting_Falcon.jpg/440px-F-16_CJ_Fighting_Falcon.jpg"},{"id":4,"clicked":false,"name":"F-15C","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/F-15C.jpg/440px-F-15C.jpg"},{"id":5,"clicked":false,"name":"F-22","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/F22_Pacific.jpg/440px-F22_Pacific.jpg"},{"id":6,"clicked":false,"name":"F-35A","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/440px-F-35A_flight_%28cropped%29.jpg"},{"id":7,"clicked":false,"name":"A-10","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/A10Thunderbolt2_990422-F-7910D-517.jpg/600px-A10Thunderbolt2_990422-F-7910D-517.jpg"},{"id":8,"clicked":false,"name":"AV-8B","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/United_States_Marine_Corps_AV-8B_Harrier_II_hovering.jpg/600px-United_States_Marine_Corps_AV-8B_Harrier_II_hovering.jpg"},{"id":9,"clicked":false,"name":"F-14D","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg/600px-US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg"},{"id":10,"clicked":false,"name":"A-7E","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A-7E_Corsair_II_of_VA-146_in_flight_on_16_November_1974_%28NNAM.1996.253.7100.039%29.jpg/600px-A-7E_Corsair_II_of_VA-146_in_flight_on_16_November_1974_%28NNAM.1996.253.7100.039%29.jpg"},{"id":11,"clicked":false,"name":"F-5E","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Northrop_F-5E_%28Tail_No._11419%29_%28cropped%29.jpg/440px-Northrop_F-5E_%28Tail_No._11419%29_%28cropped%29.jpg"}]')},,,,,,,,function(e,a,i){e.exports=i(19)},,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),o=i(3),c=i.n(o),l=i(4),r=i(5),m=i(7),s=i(6),_=i(8);i(14);var d=function(e){return n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"}),n.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id,e.name)},className:"clicked"}))};i(15);var p=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};i(16);var g=function(e){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"bottom"},n.a.createElement("em",null,"A Reactjs Radioactive Game!")))},u=i(1),f=(i(17),0),h=0,k="",b=[],F="Click on a fighter to ID..but only 1 time each!";function v(e){for(var a=e.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),t=e[a];e[a]=e[i],e[i]=t}return e}console.log("initial items array: "),console.log(u),console.log("=======================================");var E=function(e){function a(){var e,i;Object(l.a)(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(i=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={count:0,items:u},i.resetGame=function(e){h=0,k="",b=[],F="Click on a fighter to ID..but only 1 time each!",i.forceUpdate()},i.handleClick=function(e,a){console.log("clicked id = "+e),console.log("clicked fighter =  "+a),console.log(u),console.log(b),console.log("======================================="),b.includes(a)?(console.log("clicked is true"),h=0,F="Sorry, you already clicked that one! Click EJECT to play again.",i.setState({count:0})):(console.log("clicked is false"),F="ID: "+a,b.push(a),i.setState({count:i.state.count+1}),h=i.state.count+1,f=h,console.log("score = "+h),console.log("hi score = "+f),console.log("======================================="),console.log(u),console.log(b),v(u))},i}return Object(_.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(p,null,n.a.createElement("nav",{className:"navbar navbar-expand-sm"},n.a.createElement("span",{className:"navbar-brand"},"US Fighter Recognition Game!"),n.a.createElement("span",{className:"navbar-text"},"Score = ",h,"   //  Hi Score = ",f),n.a.createElement("button",{type:"button",className:"btn btn-warning clicked",onClick:function(){return e.resetGame(e.items)}},"EJECT!"),n.a.createElement("span",{className:"navbar-text",onClick:function(){return e.resetGame(e.items)}},n.a.createElement("em",null,F,k))),n.a.createElement("div",{className:"game-space"},u.map((function(a){return n.a.createElement(d,{id:a.id,key:a.id,clicked:a.clicked,name:a.name,image:a.image,handleClick:e.handleClick})}))),n.a.createElement(g,null))}}]),a}(t.Component);i(18);c.a.render(n.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.80ca7ee6.chunk.js.map