const getCurrentDate = () => {

    const myDate = new Date(Date.now()).toLocaleString().split(',')[0];
     
    return console.log(myDate.split('/')[2]+'/'+myDate.split('/')[1]+'/'+myDate.split('/')[0]); 
};

getCurrentDate()
module.exports = {
    getCurrentDate
}