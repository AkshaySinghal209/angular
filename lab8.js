angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var hotels = [
        {name:'Kake da dhabha',doa:new Date("January 31 2016"),location:"Delhi",rating:"5 Star",price:2000},
        {name:'Chatkara',doa:new Date("February 12 2016"),location:"Bangalore",rating:"4 star",price:1500},
        {name:'Hira halwai',doa:new Date("February 21 2016"),location:"Delhi",rating:"4.5 star",price:1800},
        {name:'Veer ji Chap',doa:new Date("March 10 2015"),location:"Delhi",rating:"3 star",price:1200},
        {name:'Jagannath foods',doa:new Date("January 12 2016"),location:"Bhubaneshwar",rating:"5 star",price:2500},
        {name:'Xero degrees',doa:new Date("April 1 2015"),location:"Gurugram",rating:"4.1 star",price:1600},
        {name:'Taj',doa:new Date("April 2 2015"),location:"Mumbai",rating:"5 star",price:5000}
    ];
    $scope.hotels = hotels;
    $scope.rowlimit = 7;
});