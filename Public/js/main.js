const submitBtn = document.getElementById("submitBtn");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const cityName = document.getElementById("cityName");
// const date_hide = document.querySelector("date_hide");

const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city.innerText = `Please write the Name before Search`;
        // date_hide.classList.add("date_hide");
    } else {
            try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=2622b35fa92294562b63fd7af0dabee3`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        temp.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].temp;
        cityName.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      } catch {
        // date_hide.classList.remove("date_hide")};
        city.innerText = `Please write the Name city name properly`;
        //   date_hide.classList.add("date_hide");
      }
    };
  }
// };
submitBtn.addEventListener("click", getInfo);
