const particlesJSON = {
	"particles":{
		"number":{
			"value": 50,
			"density":{
				"enable": true,
				"value_area": 1200
			},
		},
		"color":{
			"value": "#3c61dc"
		},
		"shape":{
			"stroke":{
				"width": 7,
				"color": "#d3a3f5"
			}
		},
		"size":{
			"value": 4,
			"random": true
		},
		"opacity": {
            "value": 0.5,
            "random": true
        },
        "line_linked": {
        	"enable_auto": true,
        	"distance": 140,
        	"color": "#fff",
        	"opacity": 0.5,
        	"width": 1.2
        },
        "move":{
        	"enable": true,
        	"direction": "none",
        	"random": true,
        	"speed": 7.5,
        	"out_mode": "bounce"
        }
	},
	"interactivity": {
		"detect_on": "window",
		"onhover":{
			"enable": true,
			"mode": "repulse"
		},
		"onclick":{
			"enable": false
		},
		"modes":{
			"repulse":{
				"distance": 150,
			}
		}
	},
	"retina_detect": true
}

particlesJS("particles-js",particlesJSON)