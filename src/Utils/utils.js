export async function awaitTime(times) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const yourFunction = async (time) => {
    await delay(time);
    console.log(String(time / 1000) + "segundos");
  };
  await yourFunction(times);
}

export const filterAnimalById = (data,id) => {

  /* var result = data.filter(function(d) {
    return d.pl === match[0]['value'] || d.sh === match[1]['value']
  )
 */
  var filtered = data.map((dict)=>{
    var x = undefined;
    console.log(dict.id,'=',id)
    if(dict.id === id){
      x = dict;
    }
    return x;
  })
  filtered = filtered.filter((value)=>{return value !== undefined})
  console.log(filtered)
  return filtered[0]
};
