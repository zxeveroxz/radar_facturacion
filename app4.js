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
         'ext:UBLExtension': {
            'ext:ExtensionContent': {
               '#text': ''
            }
         }
      },
      'cbc:UBLVersionID': [
         {
            '#text': '2.1',
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
      'cbc:IssueTime': {
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





var SignedXml = require('xml-crypto').SignedXml	  
  , fs = require('fs');

// Importing crypto module
const crypto  = require('crypto');

const cert = new crypto.X509Certificate(fs.readFileSync('key.pem'))

var sig = new SignedXml();
sig.addReference("//*[local-name(.)='UBLExtensions']");
sig.signingKey = fs.readFileSync("key.pem");
//sig.computeSignature(xml, { location: { reference: "//*[local-name(.)='ExtensionContent']", action: "prepend" }, prefix: 'ds', attrs: {Id: 'SignatureSP'} });
sig.keyInfoProvider = new MyKeyInfo();
sig.computeSignature(xml,{
  location: { reference: "//*[local-name(.)='ExtensionContent']", action: "prepend" } ,//This will place the signature after the book element
  prefix: 'ds', attrs: {Id: 'SignatureSP'} 
});

/**/
function MyKeyInfo() {
    this.getKeyInfo = function(key, prefix) {

       
      prefix = prefix || ''
      prefix = prefix ? prefix + ':' : prefix
      return "<" + prefix + "X509Data><"+prefix+"X509Certificate>"+key+"</" + prefix + "X509Certificate></" + prefix + "X509Data>"
    }
    this.getKey = function(keyInfo) {
      //you can use the keyInfo parameter to extract the key in any way you want      
      return fs.readFileSync("key.pem");
    }
  }


fs.writeFileSync("signed2.xml", sig.getSignedXml());
//console.log(sig.getSignedXml());