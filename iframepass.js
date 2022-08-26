/*
iFramePass
(c) Arjun J
*/


// change proxy here:
proxy = "https://proxy.arjunjakkipally.repl.co/"

// iframes
frames = document.getElementsByTagName("iframe");


urlloaded = []
// add iframepass for every frame
for (let i = 0; i < frames.length; i++) {
	console.log("iFramePass:\nApplying iFramePass to " + frames[i].src)
	frames[i].srcdoc = `<span style='font-family: "Helvetica", sans-serif;'><center><span style="color: DodgerBlue;">i</span><span style="color: grey;">FramePass</span></center></span>`
  fetch(proxy + frames[i].src.replace("https://", "").replace("http://", ""))
      .then((response) => response.text())
      .then((data) => {
      	  urlloaded.push(false)
          frames[i].srcdoc = data.replace(/<head([^>]*)>/i, `<head$1><base href="${frames[i].src}">`)
          frames[i].setAttribute("data-iframepass", i)
          frames[i].setAttribute("onLoad", "loadnewurl(this)")
      });
}

// handle loading url
function loadnewurl(elem) {
	if (urlloaded[parseInt(elem.getAttribute("data-iframepass"))] == false) {
    	console.log("iFramePass:\nloaded url")
        urlloaded[parseInt(elem.getAttribute("data-iframepass"))] = true
    } else {
    	console.log("==================")
    	console.log("IMPORTANT:\nThe URL has been changed. iFramePass is not applied anymore due to crossorigin reasons.")
        console.log("==================")
    }
}
