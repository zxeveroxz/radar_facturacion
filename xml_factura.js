var builder = require('xmlbuilder')

var obj = {
   Invoice: {
      '@xmlns': 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2',
      '@xmlns:cac': 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
      '@xmlns:cbc': 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
      '@xmlns:ccts': 'urn:un:unece:uncefact:documentation:2',
      '@xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
      '@xmlns:ext': 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
      '@xmlns:qdt': 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2',
      '@xmlns:udt': 'urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2',
      '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'ext:UBLExtensions': {
         'ext:UBLExtensions': {
            'ext:ExtensionContent': {
               '#text': ''
            }
         }
      },
      'cbc:UBLVersionID': [
         {
            '#text': '2.1',
         },
         {
            '#text': '2.2',
         }
      ],
      'cbc:CustomizationID': {
         '#text': '2.0'
      },
      'cbc:ID': {
         '#text': 'FA01-12345'
      },
      'cbc:IssueDate': {
         '#text': '2022-01-31'
      },
      'cbc:cbc:IssueTime': {
         '#text': '23:59:23'
      },
      'cbc:DueDate': {
         '#text': '2022-01-31'
      },
      'cbc:InvoiceTypeCode': {
         '@listID': '0101',
         '#text': '01'
      },
      'cbc:Note': {
         '@languageLocaleID': '1000',
         '#text': 'aqui va ek numero convertido a texto'
      },
      'cbc:DocumentCurrencyCode': {
         '@listID': 'ISO 4217 Alpha',
         '@listName': 'Currency',
         '@listAgencyName': 'United Nations Economic Commission for Europe',
         '#text': 'PEN'
      },
      'cac:Signature': {
         'cbc:ID': {
            '#text': 'JSJ SIGN'
         },
         'cac:SignatoryParty': {
            'cac:PartyIdentification': {
               'cbc:ID': {
                  '#text': 'RUCCCC'
               }
            },
            'cac:PartyName': {
               'cbc:Name': {
                  '#text': 'RAZON SOCIAL VA AQUI'
               }
            }
         },
         'cac:DigitalSignatureAttachment': {
            'cac:ExternalReference': {
               'cbc:URI': {
                  '#text': '#JSJSign'
               }
            }
         }
      },
      'cac:AccountingSupplierParty': {
         'cac:Party': {
            'cac:PartyIdentification': {
               'cbc:ID': {
                  '@schemeID': '6',
                  '#text': '#JSJSign'
               }
            },
            'cac:PartyName': {
               'cbc:Name': {
                  '#text': 'RAZON SOCIAL'
               }
            },
            'cac:PartyLegalEntity': {
               'cbc:RegistrationName': {
                  '#text': 'RAZON SOCIALLLL'
               }
            }
         }
      },
      'cac:AccountingCustomerParty': {
         'cac:Party': {
            'cac:PartyIdentification': {
               'cbc:ID': {
                  '@schemeID': '6',
                  '#text': '#NUMERO DOC'
               }
            },
            'cac:PartyLegalEntity': {
               'cbc:RegistrationName': {
                  '#text': 'RAZON SOCIALLLL'
               }
            }
         }
      },
      "cac:AllowanceCharge": {
         "cbc:ChargeIndicator": {
            "#text": "true"
         },
         "cbc:AllowanceChargeReasonCode": {
            "@listAgencyName": "PE:SUNAT",
            "@listName": "Cargo/descuento",
            "@listURI": "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo53",
            "#text": "50"
         },
         "cbc:MultiplierFactorNumeric": {
            "#text": "0.25",
         },
         "cbc:Amount": {
            "#text": "1111.20",
            "@currencyID": "PEN",
         },
         "cbc:BaseAmount": {
            "@currencyID": "PEN",
            "#text": "190.2"
         }
      },
      "cac:TaxTotal": {
         "cbc:TaxAmount": {
            "#text": "1111.20",
            "@currencyID": "PEN",
         },
         "cac:TaxSubtotal": {
            "cbc:TaxableAmount": {
               "#text": "1111.20",
               "@currencyID": "PEN",
            },
            "cbc:TaxAmount": {
               "#text": "1111.20",
               "@currencyID": "PEN",
            },
            "cac:TaxCategory": {
               "cac:TaxScheme": {
                  "cbc:ID": {
                     "#text": "1000.00",
                     "@schemeID": "UN/ECE 5153",
                     "@schemeAgencyID": "6",
                  },
                  "cbc:Name": {
                     "#text": "IGV",
                  },
                  "cbc:TaxTypeCode": {
                     "#text": "VAT"
                  },
               },
            },
         },
      },
      "cac:LegalMonetaryTotal": {
         "cbc:LineExtensionAmount": {
            "#text": "1111.20",
            "@currencyID": "PEN",
         },
         "cbc:TaxInclusiveAmount": {
            "#text": "1111.20",
            "@currencyID": "PEN",
         },
         "cbc:ChargeTotalAmount": {
            "#text": "1111.20",
            "@currencyID": "PEN",
         },
         "cbc:PayableAmount": {
            "#text": "1111.20",
            "@currencyID": "PEN",
         },
      },
      
      
   }
};

let PaymentTerms = [];
let contado = {
   "cbc:ID":{
      "#text":"FormaPago"
   },
   "cbc:PaymentMeansID":{
      "#text":"Contado"
   }
};
let credito = {
   "cbc:ID":{
      "#text":"FormaPago"
   },
   "cbc:PaymentMeansID":{
      "#text":"Credito"
   },
   "cbc:Amount":{
      "@currencyID":"PEN",
      "#text":"150"
   }
};
PaymentTerms.push(credito);

for(let f=0;f<1;f++){
   let linea_credito = {
      "cbc:ID":{
         "#text":"FormaPago"
      },
      "cbc:PaymentMeansID":{
         "#text":"Cuota001"
      },
      "cbc:Amount":{
         "@currencyID":"PEN",
         "#text":100
      },
      "cbc:PaymentDueDate":{
         "#text":"2022-11-16"
      }
   }
   PaymentTerms.push(linea_credito);
}

let InvoiceLine = [];

for(let xx=0;xx<1;xx++){
   let linea= {
      "cbc:ID": { "#text": xx, },
      "cbc:InvoicedQuantity": {
         "@unitCode": "NIU",
         "#text": "10",
      },
      "cbc:LineExtensionAmount": {
         "@currencyID": "PEN",
         "#text": "100",
      },
      "cac:PricingReference": {
         "cac:AlternativeConditionPrice": {
            "cbc:PriceAmount": {
               "@currencyID": "PEN",
               "#text": "100",
            },
            "cbc:PriceTypeCode": {
               "#text": "01",
            },
         },
      },
      "cac:TaxTotal": {
         "cbc:TaxAmount": {
            "@currencyID": "PEN",
            "#text": "1",
         },
         "cac:TaxSubtotal": {
            "cbc:TaxAmount": {
               "@currencyID": "PEN",
               "#text": "1",
            },
            "cbc:BaseUnitMeasure": {
               "@unitCode": "NIU",
               "#text": "10",

            },
            "cac:TaxCategory": {
               "cbc:PerUnitAmount": {
                  "@currencyID": "PEN",
                  "#text": "0.20",
               },
               "cac:TaxScheme": {
                  "cbc:ID": {
                     "@schemeAgencyName": "PE:SUNAT",
                     "@schemeName": "Codigo de tributos",
                     "@schemeURI": "urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05",
                     "#text": "71.52",
                  },
                  "cbc:Name": {
                     "#text": "ICBPER",
                  },
                  "cbc:TaxTypeCode": {
                     "#text": "OTH",
                  }
               }
            }
         },
         "cac:TaxSubtotal": {
            "cbc:TaxableAmount": {
               "@currencyID": "PEN",
               "#text": "1",
            },
            "cbc:TaxAmount": {
               "@currencyID": "PEN",
               "#text": "1",
            },
            "cac:TaxCategory": {
               "cbc:Percent": {
                  "#text": "18",
               },
               "cbc:TaxExemptionReasonCode": {
                  "#text": "10",
               },
               "cac:TaxScheme": {
                  "cbc:ID": {
                     "#text": "1000",
                  },
                  "cbc:Name": {
                     "#text": "IGV",
                  },
                  "cbc:TaxTypeCode": {
                     "#text": "VAT",
                  }
               }
            }
         }
      },
      "cac:Item": {
         "cbc:Description": {
            "#text": "DESCRIPTCION",
         },
         "cac:SellersItemIdentification": {
            "cbc:ID": {
               "#text": "PRODUCTO",
            }
         }
      },
      "cac:Price": {
         "cbc:PriceAmount": {
            "@currencyID": "PEN",
            "#text": "1",
         }
      }
   }
InvoiceLine.push(linea);
};

obj.Invoice["cac:PaymentTerms"] = PaymentTerms;
obj.Invoice["cac:InvoiceLine"] = InvoiceLine;

var xml = builder.create(obj).end({ pretty: true })
//console.log(xml)

const transforms = [
   'http://www.w3.org/2000/09/xmldsig#enveloped-signature',
 ];
 
 const infoProvider = (pem) => {
   return {
     getKeyInfo() {
       const cert = this.getCert();
       return `<X509Data><X509Certificate>${cert}</X509Certificate></X509Data>`;
     },
     getCert() {
       const certLines = pem.cert.split('\n');
       return certLines.filter((e, i) => i && e && e.indexOf('-----') !== 0).
           join('');
     },
   };
 };


const fs = require("fs");
const path = require("path")

 localName = 'Invoice';
 pin_certif = '12345678';
 ruta_certif = '10424517912.pfx'; //'ruta donde esta tu certificado';
 rutaXML =xml;// 'ruta donde esta tu xml';
 
     function signXML(rutaXML, ruta_certif, pin_certif, localName) {
    return new Promise( async (resolve, reject) => {
       try {
          let SignedXml = require('xml-crypto').SignedXml;
          let DOMParser = require('xmldom').DOMParser;
          ///////////////////////////////
          let xml = rutaXML; //fs.readFileSync(rutaXML, 'utf8');
          ///
          let json_pem = await crearPEM_from_PFX(ruta_certif, pin_certif);
          ///
          let transf = ['http://www.w3.org/2000/09/xmldsig#enveloped-signature'];
          let sig = new SignedXml()
          sig.addReference(`//*[local-name(.)='${localName}']`, transf, '', '', '', '', true)
          sig.signingKey =  new Buffer(json_pem.value.key);
          //sig.signingKey = fs.readFileSync("key.pem");
          sig.keyInfoProvider = KeyInfoProvider(json_pem.value);
          sig.canonicalizationAlgorithm = 'http://www.w3.org/2001/10/xml-exc-c14n#';
          sig.signatureAlgorithm        = 'http://www.w3.org/2000/09/xmldsig#rsa-sha1';
          sig.computeSignature(xml, { location: { reference: `//*[local-name(.)='ExtensionContent']`}, prefix: 'ds', attrs: {Id: 'SignatureSP'} });
          const __signedXML = sig.getSignedXml();
          await crearXML(rutaXML,  __signedXML);
          ///////////////////////////////
          let parser = new DOMParser();
          let doc = parser.parseFromString(__signedXML, 'text/xml');
          let hash_cpe = doc.getElementsByTagName('ds:DigestValue')[0].firstChild.data;
    
          return resolve({ msj : 'El xml ha sido firmado', hash_cpe : hash_cpe, __signedXML : __signedXML });
       } catch(err) {
          return reject({ msj : 'Hubo un error al firmar el XML', stack : err });
       }
    });
 }

 function crearXML(rutaFile, xmlData) {
	return new Promise( (resolve, reject) => {
		try {
			fs.writeFileSync(rutaFile, xmlData, 'utf8');
			return resolve({ msj : 'Se creo el xml' });
		} catch(err) {
			return reject({ err : err, msj : 'Hubo un error al crear el XML' });
		}
	});
}

function crearPEM_from_PFX(ruta_certif, pin_certif) {
	return new Promise( (resolve, reject) => {
		try {
			const pem = require('pem'); 
			pem.config({
				pathOpenSSL: path.resolve('C:\\Program Files\\OpenSSL-Win64\\bin\\openssl.exe')
			});
			const pfx = fs.readFileSync(ruta_certif);
			pem.readPkcs12(pfx, { p12Password : pin_certif }, async (err, new_pem) => {
				if(err) {
					return reject({ msj : 'Hubo un error en el pem.readPkcs12', stack : err });
				}
				return resolve({ value : new_pem });
			});
		} catch(err) {
			return reject({ err : err, msj : 'Hubo un error al crear el PEM' });
		}
	});
}

function KeyInfoProvider(pem) {
	return {
		getKey() {
			const cert = this.getCert();
		  	return `<ds:X509Data><ds:X509Certificate>${cert}</ds:X509Certificate></ds:X509Data>`;
		},
		getKeyInfo() {
			  const cert = this.getCert();
		  	  return `<ds:X509Data><ds:X509Certificate>${cert}</ds:X509Certificate></ds:X509Data>`;
		},
		getCert() {
		  	try {
				const certLines = pem.cert.split('\n');
				return certLines.filter((e, i) => i && e && e.indexOf('-----') !== 0).join('');
		  	} catch (err) {
				throw Error(err);
		 	}
		}
	};
}


 signXML(rutaXML,ruta_certif,pin_certif,localName)
 /*

  localName = 'Invoice';
 pin_certif = '12345678';
 ruta_certif = '10424517912.pfx'; //'ruta donde esta tu certificado';
 rutaXML =xml;// 'ruta donde esta tu xml';

var SignedXml = require('xml-crypto').SignedXml	  
	  , fs = require('fs')

/*	var xml = "<library>" +
	            "<book>" +
	              "<name>Harry Potter</name>" +
	            "</book>" +
	          "</library>"

   
	var sig = new SignedXml()
	//sig.addReference('//*[local-name(.)=\'ExtensionContent\']');  
	sig.signingKey = fs.readFileSync("key.pem");
   sig.canonicalizationAlgorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315"
   sig.addReference("//*[local-name(.)=\'ExtensionContent\']", ["http://www.w3.org/2000/09/xmldsig#enveloped-signature"])
   sig.computeSignature(xml, {
      location: {
         reference: "//*[local-name(.)='ExtensionContent']",
         action: "prepend"
      },
      prefix: 'ds',
      attrs: {
         Id: 'SignatureSP'
      }
   })


 //  sig.canonicalizationAlgorithm = 'http://www.w3.org/TR/2001/REC-xml-c14n-20010315';
//sig.keyInfoProvider = infoProvider(pem);
//sig.computeSignature(xml, {prefix: 'ds', attrs: {Id: 'SignatureSP'}});
sig.computeSignature(xml, { location: { reference: "//*[local-name(.)='ExtensionContent']", action: "prepend" }, prefix: 'ds', attrs: {Id: 'SignatureSP'} });

	//sig.computeSignature(xml)
	fs.writeFileSync("signed.xml", sig.getSignedXml())


//.signXML(xml, '10424517912.pfx', '12345678')
//.then(xmlFirmado => console.log("XML firmado", xmlFirmado));
/*
const Dsig = require('pkcs12-xml');
var dsig = new Dsig('10424517912.pfx');
try {
   dsig.openSession('12345678');
   console.log(dsig.computeSignature(xml, 'ext:UBLExtensions'));
} catch(e) {
   console.error(e);
} finally {
   dsig.closeSession();
}*/