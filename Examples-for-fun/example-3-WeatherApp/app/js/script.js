window.addEventListener("load", () => {
    // Html elems
    const timezone = document.querySelector(".location-timezone")
    const degreeValue = document.querySelector(".temperature-degree-value")
    const description = document.querySelector(".temperature-description")
    const alert = document.querySelector(".alert")
    const iconElem = document.getElementById("icon")
    // Html elems end

    let long, lat
    const apikey = "656fe7748517e268aa2f96ec322857dd"


    if(navigator.geolocation){
        // get current position
        navigator.geolocation.getCurrentPosition(location => {
            long = location.coords.longitude
            lat = location.coords.latitude

            // url: https://api.openweathermap.org/data/2.5/onecall?lat=40.8911872&lon=29.261823999999997&appid=656fe7748517e268aa2f96ec322857dd
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`
            fetch(api).then(response => response.json())
            .then( data => {
                timezone.textContent = data.timezone
                degreeValue.textContent = Math.floor(data.current.temp)
                description.textContent = data.current.weather[0].main
                const icon = data.current.weather[0].main
                setIcon(icon, iconElem)
            })
            // catch
            .catch(err => {
                const span = document.querySelector(".temperature-degree span")
                span.setAttribute("style","display:none")
                alert.classList.add("alert-active");                
            })
            // catch end
        })
        // get current position end
    }
    // if end

    // set icon
    function setIcon(icon, iconID) {
        const skycons = new Skycons({color:"white"})
        skycons.play()
        return skycons.set(iconID, Skycons[icon.toUpperCase()])
    }
    // set icon end
})