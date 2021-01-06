class TimeModel {
  getCountdownDateTime() {
    var countDownDateTemp;
    const currDate = new Date();
    const today420 = new Date(
      currDate.getFullYear(),
      currDate.getMonth(),
      currDate.getDate(),
      4,
      20,
      0,
      0
    );

    if (currDate < today420) {
      countDownDateTemp = today420;
    } else {
      countDownDateTemp = new Date(
        currDate.getFullYear(),
        currDate.getMonth(),
        currDate.getDate() + 1,
        4,
        20,
        0,
        0
      );
    }

    return countDownDateTemp.getTime();
  }

  getRemainingTime(countdownDate) {
    const currentTime = new Date().getTime();

    // Get the time remaining until the countdown date
    const distanceToDate = countdownDate - currentTime;

    // Calculate days, hours, minutes and seconds remaining
    let hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    return { hours: hours, minutes: minutes, seconds: seconds };
  }
}

export default new TimeModel();
