(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),s=a.n(l),o=(a(97),a(99),a(14)),c=a(15),m=a(17),i=a(16),u=a(18),d=a(2),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},h="http://localhost:3001/",f=a(24);function p(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{src:h+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),t.designation?r.a.createElement(d.i,null,t.designation):null,r.a.createElement(d.j,null,t.description))))}var g=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(p,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},b=a(6);function v(e){var t=e.dish;e.onClick;return r.a.createElement(d.d,null,r.a.createElement(b.b,{to:"/menu/".concat(t.id)},r.a.createElement(d.g,{width:"100%",src:h+t.image,alt:t.name}),r.a.createElement(d.h,null,r.a.createElement(d.k,null,t.name))))}var N=function(e){var t=e.dishes.dishes.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(v,{dish:e}))});return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},O=a(12),y=a(8),w=function(e){return e&&e.length},M=function(e){return function(t){return t&&t.length>=e}};function k(e){var t=e.dish;return r.a.createElement("div",null,r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{width:"100%",src:h+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),r.a.createElement(d.j,null,t.description)))))}function L(e){var t=e.comments,a=e.postComment,n=e.dishId;return null!=t?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(f.Stagger,{in:!0},t.map(function(e){return r.a.createElement(f.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e.date)))))}))),r.a.createElement(j,{dishId:n,postComment:a})):r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"))}var j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isModalOpen:!1},a.toggleModal=a.toggleModal.bind(Object(O.a)(Object(O.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(Object(O.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.comment),this.toggleModal()}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-lg fa-pencil"}," Submit Comment")),r.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.v,{toggle:this.toggleModal},r.a.createElement("h4",null,"Submit Comment")),r.a.createElement(d.u,null,r.a.createElement(y.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:12},r.a.createElement(d.r,{htmlFor:"rating"},"Rating")),r.a.createElement(d.l,{md:12},r.a.createElement(y.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:12},r.a.createElement(d.r,{htmlFor:"author"},"Your Name")),r.a.createElement(d.l,{md:12},r.a.createElement(y.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:w,maxLength:(e=15,function(t){return!t||t.length<=e}),minLength:M(3)}}),r.a.createElement(y.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",maxLength:"Must be 15 characters or less",minLength:"Must be greater than 2 characters"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:12},r.a.createElement(d.r,{htmlFor:"comment"},"Comment")),r.a.createElement(d.l,{md:12},r.a.createElement(y.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:12}},r.a.createElement(d.c,{color:"primary","type-":"submit",value:"submit"},"Submit")))))))}}]),t}(n.Component),S=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(b.b,{to:"/menu"},"Menu")),r.a.createElement(d.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(k,{dish:e.dish})),r.a.createElement(L,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(O.a)(Object(O.a)(a))),a.toggleModal=a.toggleModal.bind(Object(O.a)(Object(O.a)(a))),a.handleLogin=a.handleLogin.bind(Object(O.a)(Object(O.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username is : "+this.username.value+" Password is : "+this.password.value+" Checkbox is : "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(d.A,{onClick:this.toggleNav}),r.a.createElement(d.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(d.w,{navbar:!0},r.a.createElement(d.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}," Home"))),r.a.createElement(d.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"}," About Us"))),r.a.createElement(d.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"}," Menu"))),r.a.createElement(d.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-phone fa-lg"}," Contact Us")))),r.a.createElement(d.w,{className:"ml-auto",navbar:!0},r.a.createElement(d.x,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}),"Login")))))),r.a.createElement(d.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.v,{toggle:this.toggleModal},"Login"),r.a.createElement(d.u,null,r.a.createElement(d.n,{onSubmit:this.handleLogin},r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlfor:"Username"},"Username"),r.a.createElement(d.p,{type:"text",name:"username",id:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlfor:"Password"},"Password"),r.a.createElement(d.p,{type:"text",name:"password",id:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(d.o,{check:!0},r.a.createElement(d.r,{check:!0},r.a.createElement(d.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(d.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var D=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},F=function(e){return e&&e.length},x=function(e){return function(t){return!t||t.length<=e}},A=function(e){return function(t){return t&&t.length>=e}},I=function(e){return!isNaN(Number(e))},T=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(O.a)(Object(O.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is : "+JSON.stringify(e)),alert("Current State is : "+JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:""},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(y.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(d.l,{md:10},r.a.createElement(y.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:F,minLength:A(3),maxLength:x(15)}}),r.a.createElement(y.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 3 characters",maxLength:"Must be less than 15 characters"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(d.l,{md:10},r.a.createElement(y.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:F,minLength:A(3),maxLength:x(15)}}),r.a.createElement(y.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 3 characters",maxLength:"Must be less than 15 characters"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(d.l,{md:10},r.a.createElement(y.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Num",className:"form-control",validators:{required:F,minLength:A(3),maxLength:x(15),isNumber:I}}),r.a.createElement(y.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 3 characters",maxLength:"Must be less than 15 characters",isNumber:"Must be a number"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(d.l,{md:10},r.a.createElement(y.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:F,validEmail:T}}),r.a.createElement(y.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Must be a valid email address"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(d.r,{check:!0},r.a.createElement(y.Control.checkbox,{model:".agree",name:"agree",className:"form-control-check"})," ",r.a.createElement("strong",null,"May We Contact You?")))),r.a.createElement(d.l,{md:{size:3,offset:1}},r.a.createElement(y.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(d.l,{md:10},r.a.createElement(y.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:10,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"},"Send Feedback ")))))))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.contents.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-6"},e.name),r.a.createElement("dd",{className:"col-6"},e.value))});return r.a.createElement(d.d,null,r.a.createElement(d.f,{className:"bg-primary text-white"},this.props.title),r.a.createElement(d.e,null,r.a.createElement("dl",{className:"row p-1"},e)))}}]),t}(n.Component);function q(e){var t=e.leader;return r.a.createElement("div",{key:t.id,className:"col-12 mt-5"},r.a.createElement(f.Fade,{in:!0},r.a.createElement(d.s,{tag:"li"},r.a.createElement(d.s,{left:!0},r.a.createElement(d.s,{object:!0,src:h+t.image,alt:t.name})),r.a.createElement(d.s,{body:!0,className:"ml-5"},r.a.createElement(d.s,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description)))))}_.defaultProps={title:"test title",contents:[]};var P=function(e){var t=e.leaders.leaders.map(function(e){return r.a.createElement(f.Stagger,{in:!0},r.a.createElement(q,{leader:e}))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(_,{title:"",contents:[{name:"Started",value:"3 Feb. 2013"},{name:"Major Stake Holder",value:"HK Fine Foods Inc."},{name:"Last Year's Turnover",value:"$1,250,375"},{name:"Employees",value:"40"}]})),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.d,null,r.a.createElement(d.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.s,{list:!0},t))))},B=a(22),H=function(){return{type:"DISHES_LOADING"}},U=function(e){return{type:"DISHES_FAILED",payload:e}},Y=function(e){return{type:"ADD_DISHES",payload:e}},W=function(e){return{type:"COMMENTS_FAILED",payload:e}},G=function(e){return{type:"ADD_COMMENTS",payload:e}},K=function(){return{type:"PROMOS_LOADING"}},z=function(e){return{type:"PROMOS_FAILED",payload:e}},J=function(e){return{type:"ADD_PROMOS",payload:e}},Z=function(){return{type:"LEADERS_LOADING"}},$=function(e){return{type:"LEADERS_FAILED",payload:e}},Q=function(e){return{type:"ADD_LEADERS",payload:e}},V=a(47),X=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(V.TransitionGroup,null,r.a.createElement(V.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(b.f,null,r.a.createElement(b.e,{path:"/home",component:function(){return r.a.createElement(g,{dish:e.props.dishes.dishes.filter(function(e){return e.featured})[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter(function(e){return e.featured})[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter(function(e){return e.featured})[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(b.e,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(P,{leaders:e.props.leaders})}}),r.a.createElement(b.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(N,{dishes:e.props.dishes})}}),r.a.createElement(b.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(S,{dish:e.props.dishes.dishes.filter(function(e){return e.id===parseInt(a.params.dishId,10)})[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter(function(e){return e.dishId===parseInt(a.params.dishId,10)}),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(b.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(R,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(b.d,{to:"/home"})))),r.a.createElement(D,null))}}]),t}(n.Component),ee=Object(b.g)(Object(B.connect)(function(e){return{dishes:e.dishes,comments:e.comments,leaders:e.leaders,promotions:e.promotions}},function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(h+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return r({type:"ADD_COMMENT",payload:e})}).catch(function(e){console.log("post comments ",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(t,a,n,r))},fetchDishes:function(){e(function(e){return e(H(!0)),fetch(h+"dishes").then(function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(Y(t))}).catch(function(t){return e(U(t.message))})})},resetFeedbackForm:function(){e(y.actions.reset("feedback"))},fetchComments:function(){e(function(e){return fetch(h+"comments").then(function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(G(t))}).catch(function(t){return e(W(t.message))})})},fetchPromos:function(){e(function(e){return e(K(!0)),fetch(h+"promotions").then(function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(J(t))}).catch(function(t){return e(z(t.message))})})},fetchLeaders:function(){e(function(e){return e(Z(!0)),fetch(h+"leaders").then(function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(Q(t))}).catch(function(t){return e($(t.message))})})},postFeedback:function(t,a,n,r,l,s,o){return e(function(e,t,a,n,r,l,s){return function(o){var c={firstname:e,lastname:t,telnum:a,email:n,agree:r,contactType:l,message:s};return c.date=(new Date).toISOString(),fetch(h+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return o({type:"ADD_FEEDBACK",payload:e})}).catch(function(e){console.log("post feedback ",e.message),alert("Your Feedback could not be posted\nError: "+e.message)})}}(t,a,n,r,l,s,o))}}})(X)),te=(a(156),a(10)),ae=a(23),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(te.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(te.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(te.a)({},e,{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(te.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(te.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(te.a)({},e,{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(te.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(te.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(te.a)({},e,{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(te.a)({},e,{isLoading:!1,errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(te.a)({},e,{isLoading:!1,errMess:t.payload,comments:[]});case"ADD_COMMENT":var a=t.payload;return Object(te.a)({},e,{comments:e.comments.concat(a)});default:return e}},oe=a(90),ce=a.n(oe),me=a(91),ie=a.n(me),ue={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},de=Object(ae.createStore)(Object(ae.combineReducers)(Object(te.a)({dishes:ne,comments:se,promotions:le,leaders:re},Object(y.createForms)({feedback:ue}))),Object(ae.applyMiddleware)(ce.a,ie.a)),Ee=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(B.Provider,{store:de},r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(ee,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(158),a(160);s.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,a){e.exports=a(162)},99:function(e,t,a){}},[[92,2,1]]]);
//# sourceMappingURL=main.0fd3e328.chunk.js.map