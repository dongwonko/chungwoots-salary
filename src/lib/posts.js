import axios from 'axios';

export function getSalaryInfo({salaryPeriod, sawonCode, sawonName}) {
    /*
    let form = new FormData();
    form.append('sawon_code', sawonCode);
    form.append('sawon_name', sawonName);
    */
   
    return axios.get(`http://chungwootsapi.cafe24app.com/salary/${salaryPeriod}`, {
        params: {
            sawon_code: sawonCode,
            sawon_name: sawonName
        }
    })
    .then( response => { console.log(response) })
    .catch( response => { console.log(response) });
}