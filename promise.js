const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>{
  try{
    const cekEmosiTheaterIXX = await promiseTheaterIXX();
    const cekEmosiTheaterVGC = await promiseTheaterVGC();

    const cekHasilEmosiTheaterVGC = cekEmosiTheaterVGC.filter((res)=> res.hasil === emosi);
    const cekHasilEmosiTheaterIXX = cekEmosiTheaterIXX.filter((res)=> res.hasil === emosi);
    return cekHasilEmosiTheaterVGC.length + cekHasilEmosiTheaterIXX.length;
  }
catch(error) {}
};

module.exports = {
  promiseOutput,
};
