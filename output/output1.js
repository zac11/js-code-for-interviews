var car = new Vehicle("Honda","white","2010","India");
console.log(car);

function Vehicle(model,color,year,country){
        this.model = model;
        this.color = color;
        this.year = year;
        this.country = country;
}