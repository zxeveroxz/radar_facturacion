var select = require('xml-crypto').xpath
  , dom = require('xmldom').DOMParser
  , SignedXml = require('xml-crypto').SignedXml
  , FileKeyInfo = require('xml-crypto').FileKeyInfo
  , fs = require('fs')

    function signXml(xml, xpath, key, dest) {
      var sig = new SignedXml()
      sig.signingKey = fs.readFileSync(key)

      // not working:
      sig.canonicalizationAlgorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315"
      sig.signatureAlgorithm = "http://www.w3.org/2000/09/xmldsig#rsa-sha1"
      sig.addReference(xpath, ["http://www.w3.org/2000/09/xmldsig#enveloped-signature", "http://www.w3.org/TR/2001/REC-xml-c14n-20010315"])

      // working:
      // sig.addReference(xpath)

      sig.computeSignature(xml)
      fs.writeFileSync(dest, sig.getSignedXml())
    }

    function MyKeyInfo() {
        this.getKeyInfo = function(key) {
            return "<X509Data>"+key+"</X509Data>"
        };
        this.getKey = function(keyInfo) {
            return fs.readFileSync("key.pem", 'utf-8');
        };
    }

    //formatando nota fiscal
    var xml = '<ns1:ReqConsultaNotas ' +
                  'xmlns:ns1="http://localhost:8080/WsNFe2/lote" ' +
                  'xmlns:tipos="http://localhost:8080/WsNFe2/tp" ' +
                  'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
                  'xsi:schemaLocation="http://localhost:8080/WsNFe2/lote http://localhost:8080/WsNFe2/xsd/ReqConsultaNotas.xsd">' +
                '<Header Id="Consulta:notas">' +
                  '<Version>1</Version>' +
                '</Header>' +
              '</ns1:ReqConsultaNotas>'

    //sign an xml document
    signXml(xml,"//*[@Id='Consulta:notas']","key.pem","result.xml")

    console.log("xml signed succesfully")

    var xml = fs.readFileSync("result.xml").toString()

    var sig = new SignedXml();
    sig.keyInfoProvider = new MyKeyInfo();
    //sig.addReference("//*[local-name(.)='InfNfse']");
    sig.signingKey = fs.readFileSync("key.pem");
    sig.computeSignature(xml);
    fs.writeFileSync("signed.xml", sig.getSignedXml());
