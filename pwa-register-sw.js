                                 var swsource = "https://sportigoo.fr/pwa-sw.js";                                          
                                                                  
			         if("serviceWorker" in navigator) {
                                     window.addEventListener('load', function() {			         		
			                navigator.serviceWorker.register(swsource, {scope: 'https://sportigoo.fr/'}).then(function(reg){                                                                                        
			                    console.log('Congratulations!!Service Worker Registered ServiceWorker scope: ', reg.scope);
                                                                                                                    
			                }).catch(function(err) {
			                    console.log('ServiceWorker registration failed: ', err);
			                });	
                                                                                                                                                                                                                                                                              
			                var deferredPrompt;                                                                                                                                                                                                                                                                                                                        
                                                window.addEventListener('beforeinstallprompt', (e) => {
							  /*e.preventDefault();*/
							  deferredPrompt = e;
                                                          
                                                            if(deferredPrompt != null || deferredPrompt != undefined){

                                                                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                                if(a2hsviashortcode !== null){
                                                                    for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                      a2hsviashortcode[i].style.display="block"; 
                                                                  }
                                                                }
                                                                
                                                                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                                                                if(a2hsviashortcode !== null){
                                                                    for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                      a2hsviashortcode[i].style.display="flex"; 
                                                                  }
                                                                }

                                                             }
                                                                                                                    
							});			    
              // Safari 3.0+ "[object HTMLElementConstructor]" 
              var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
              if( isSafari ){
                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                  if(a2hsviashortcode !== null){
                      for (var i = 0; i < a2hsviashortcode.length; i++) {
                        a2hsviashortcode[i].style.display="block"; 
                    }
                  }
                  
                  var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                  if(a2hsviashortcode !== null){
                      for (var i = 0; i < a2hsviashortcode.length; i++) {
                        a2hsviashortcode[i].style.display="flex"; 
                    }
                  }
              }
                                                                                                                                                   
                                                                                                              
                                                     
                                                                                                                                                               
                                                     var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                        if(a2hsviashortcode !== null){
                                                            for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                              a2hsviashortcode[i].addEventListener("click", addToHome); 
                                                          }
                                                        }
                                         
                                                     window.addEventListener('appinstalled', (evt) => {
							  
                                                          var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                                 if(a2hsviashortcode !== null){
                                                                     for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                       a2hsviashortcode[i].style.display="none"; 
                                                                   }
                                                                 }
                                                                 
                                                                 var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                                                                    if(a2hsviashortcode !== null){
                                                                        for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                          a2hsviashortcode[i].style.display="none"; 
                                                                      }
                                                                    }
                                                                                                                    
                                                     });  
                                                                                                          
                                                     function addToHome(){
                                                         if(!deferredPrompt){return ;}
                                                         deferredPrompt.prompt();							  
                                                         deferredPrompt.userChoice
                                                           .then((choiceResult) => {
                                                             if (choiceResult.outcome === "accepted") {
                                                                 
                                                               document.getElementById("pwaforwp-add-to-home-click").style.display = "none"; 
                                                       
                                                                var a2hsviashortcode = document.getElementsByClassName("pwaforwp-add-via-class");
                                                                 if(a2hsviashortcode !== null){
                                                                     for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                       a2hsviashortcode[i].style.display="none"; 
                                                                   }
                                                                 }
                                                                 
                                                                 var a2hsviashortcode = document.getElementsByClassName("pwaforwp-sticky-banner");
                                                                    if(a2hsviashortcode !== null){
                                                                        for (var i = 0; i < a2hsviashortcode.length; i++) {
                                                                          a2hsviashortcode[i].style.display="none"; 
                                                                      }
                                                                    }
                                                                                                                                          
                                                               console.log("User accepted the prompt");

                                                             } else {
                                                               console.log("User dismissed the prompt");
                                                             }
                                                             deferredPrompt = null;
                                                         });
                                                         
                                                        }                                                                                                                                                               
                                                     });
			                             }  
                                                     
                                                     