"use strict";var colectionInputs=document.querySelectorAll("form input");colectionInputs.forEach(function(e){var t=document.createElement("label"),n=e.name[0].toUpperCase()+e.name.slice(1);e.placeholder=n,t.textContent=n,t.classList.add("field-label"),t.setAttribute("for",e.id),e.parentElement.prepend(t)});
//# sourceMappingURL=js_task_fix_form_DOM.96e7e1d5.js.map
