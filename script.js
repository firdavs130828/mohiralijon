    // let ism="Firdavs";
// console.log(ism.trim());
    // console.log(ism.length);
    // console.log(ism.toUpperCase())
    // console.log(ism.toLowerCase())
    // console.log(ism.includes("s"));
    // console.log(ism.repeat(10));
    // console.log(ism.startsWith("f"));
    // console.log(ism.endsWith("davs"));
    // console.log(ism.slice(1.6));
    // console.log(ism.replace("i","u"))
    // console.log(ism.replaceAll("fir", "dir"))

let ism=prompt("ism kiriting:")
let harf=prompt("harf kiriting:")

if(ism.toLowerCase().includes(harf.toLowerCase())){
    alert(ism+" ismida " +harf+" harfi mavjud ")
}else{
    alert( ism+ " ismida " +harf+ " harfi mavjud emas")

}
