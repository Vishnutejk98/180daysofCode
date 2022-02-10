/*
Requirements: 
1. Write a function astroguru that:
A: Takes four arguments: number of children, spouses name, location and job
B: Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”
*/
function astroguru(params){
    return `You will be a ${params.job} in ${params.location} and married to ${params.partner} with ${params.numkids} kids.`;
}

console.log(astroguru({
    job:"MicroSoft",
    location:"Bangalore",
    partner:"Someone",
    numkids:"1"
}))