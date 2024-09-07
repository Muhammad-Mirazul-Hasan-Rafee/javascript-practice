const mobile = {
    brand:'Samsung',
    prize: 62000,
    color: 'White',
    camera: '50 mp',
    isNew: true,
}

for(const prop in mobile){
    console.log(prop);
    console.log([mobile[prop]]);
}