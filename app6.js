const Dsig = require('pkcs12-xml');
const fs = require("fs");
var dsig = new Dsig('10424517912.pfx');
try {
    dsig.openSession('12345678');
    var xml = fs.readFileSync("./signed2.xml","utf-8"); //'<libro><titulo>Viaje al centro de la tierra</titulo><autor>Julio Berne</autor></libro>';
    //console.log(xml);
let obj = [{"ext:UBLExtensions":{"ext:UBLExtension":{"ext:ExtensionContent":""}}}];
console.log(obj);
  let r =  dsig.computeSignature(xml, obj);
  fs.writeFileSync("signed22.xml", r);
    /*
    dsig.computeSignature(xml,{
        location: { reference: 'ext:UBLExtensions', action: "prepend" } ,//This will place the signature after the book element
        prefix: 'ds', attrs: {Id: 'SignatureSP'} 
      });
      */
} catch(e) {
    console.error(e);
} finally {
    dsig.closeSession();
}