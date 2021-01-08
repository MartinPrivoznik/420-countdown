class TimeModel {
  getCountdownDateTime() {
    var countDownDateTemp;
    const currDate = new Date();
    const today420 = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 4, 20, 0, 0);

    if (currDate < today420) {
      countDownDateTemp = today420;
    } else {
      countDownDateTemp = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() + 1, 4, 20, 0, 0);
    }

    return countDownDateTemp.getTime();
  }
}

export default new TimeModel();
