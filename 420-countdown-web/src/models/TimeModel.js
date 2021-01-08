class TimeModel {
  getCountdownDateTime(countUntilPM) {
    var countDownDateTemp;
    const currDate = new Date();
    const today420 = countUntilPM
      ? new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 16, 20, 0, 0)
      : new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 4, 20, 0, 0);

    if (currDate < today420) {
      countDownDateTemp = today420;
    } else {
      countDownDateTemp = countUntilPM
        ? new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 16, 20, 0, 0)
        : new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() + 1, 4, 20, 0, 0);
    }

    return countDownDateTemp.getTime();
  }
}

export default new TimeModel();
