var update_state=function(e,t){"use strict";var n=$("span#"+e+"country .select2").select2("val"),a=$("span#"+e+"state select.select2"),s=$("span#"+e+"state input.state_name");$.get(Spree.routes.states_search+"?country_id="+n,function(e){var n=e.states;if(n.length>0){a.html("");var i=[{name:"",id:""}].concat(n);$.each(i,function(e,t){var n=$(document.createElement("option")).prop("value",t.id).html(t.name);a.append(n)}),a.prop("disabled",!1).show(),a.select2(),s.hide().prop("disabled",!0)}else s.prop("disabled",!1).show(),a.select2("destroy").hide();t&&t()})};