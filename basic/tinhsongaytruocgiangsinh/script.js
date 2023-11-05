function christmas() {
  setInterval(function () {
    let today = new Date();
    let year = today.getFullYear();
    let cmas = new Date(today.getFullYear(), 11, 25);
    if (year === 11 && today.getDate() > 25) {
      cmas.setFullYear(cmas.getFullYear() + 1);
    }
    let t_one = cmas.getTime() - today.getTime();
    let one_day = 1000 * 60 * 60 * 24;
    let one_hour = 1000 * 60 * 60;
    let one_minhute = 1000 * 60;
    let one_second = 1000;
    let day = Math.floor(t_one / one_day);
    t_one = t_one % one_day;
    let hour = Math.floor(t_one / one_hour);
    t_one = t_one % one_hour;
    let minute = Math.floor(t_one / one_minhute);
    t_one = t_one % one_minhute;
    let second = Math.floor(t_one / one_second);
    document.querySelector(".day").innerHTML = `${day}`;
    document.querySelector(".hour").innerHTML = `${hour}`;
    document.querySelector(".minute").innerHTML = `${minute}`;
    document.querySelector(".second").innerHTML = `${second}`;
    console.log(1);
  }, 1000);
}
