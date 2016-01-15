/*
---
name: widget.js
description: Now make your own temperature meter using random number
authors: Rajiv

---
*/
(function() {
	
    var meter, m_Id, m_Att, m_Id, Elem, div;
    	
    meter = document.createElement("METER");
    
    meter.setAttribute("min", "0");
    meter.setAttribute("max", "10");
    meter.setAttribute("low", "2");
    meter.setAttribute("high", "8");
    meter.setAttribute("optimum", "9");
    
    document.body.appendChild(meter);
    
	m_Id = document.getElementsByTagName("METER")[0]; 
	m_Att = document.createAttribute("id");
	m_Att.value = "my_meter";
	m_Id.setAttributeNode(m_Att);
	
	document.getElementById("my_meter").style.width = "400px";   
	document.getElementById("my_meter").style.height = "30px";   
	Elem = document.getElementById("my_meter");
	div = document.createElement("div");
	div.style.fontSize = "xx-large";
	div.style.color = "grey";
	document.body.appendChild(div);
		
		
	setInterval(function() {
	    	
		Elem.value = (0.5)+(Math.random()*(10));
	   	div.innerHTML = Math.round(Elem.value) +' &#8451;';
	   		
	    }, 1000);
  
}).call(this);
