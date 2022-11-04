export default function daysToXmas(date) {
    const XmasDate = new Date('Dec 25, 2021');
  
    const dif = XmasDate.getTime() - date.getTime();
  
    const difSeg = Math.floor(dif / 1000);
  
    const cantDias = Math.ceil(difSeg/3600/24);
   
    return cantDias;
  }