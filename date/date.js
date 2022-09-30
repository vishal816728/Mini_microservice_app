// function date(typee,fromDate,toDate){
//     if(typee=="1Day"){
//         console.log("1")
//         // console.log(new Date('11/1/2012'))
//     }else if(typee=="week"){
//       console.log("7")
//     }else if(typee=="custom"){
//         console.log("custom")
//         const date1 = new Date(fromDate);
//         const date2 = new Date(toDate);
//         const diffTime = Math.abs(date2 - date1);
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//         console.log(diffTime + " milliseconds");
//         console.log(diffDays + " days");
//     }
// }

// date("custom",'11/7/2010','12/12/2010')
const moment=require('moment')

function getDates(typo,startDate, stopDate) {
    if(typo=="1Day"){
        var dateArray=[]
        dateArray.push(startDate)
        console.log(dateArray)
        return dateArray
    }else if(typo=="week"){
        var sevendays=1
        var dateArray=[]
        var currentDate = moment(startDate);
        while(sevendays<=7){
            dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
            currentDate = moment(currentDate).add(1, 'days');
            sevendays++
        }
        console.log(dateArray)
        return dateArray
    }else if(typo=="custom"){
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('DD-MM-YYYY') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        console.log(dateArray)
        return dateArray;
    }
    
}

getDates("custom",'2022-01-12','2022-02-12')