var builder = require('xmlbuilder');

var obj = {
    root: {
        Invoice: {
            "@xmlns": "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2",
            "@xmlns:cac": "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2",
            "@xmlns:cbc": "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2",
            "@xmlns:ccts": "urn:un:unece:uncefact:documentation:2",
            "@xmlns:ds": "http://www.w3.org/2000/09/xmldsig#",
            "@xmlns:ext": "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2",
            "@xmlns:qdt": "urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2",
            "@xmlns:udt": "urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2",
            "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "ext:UBLExtensions":{
                "ext:UBLExtensions":{
                    "ext:ExtensionContent":{
                        '#text':""
                    }
                }
            },
            "cbc:UBLVersionID":{
                '#text':"2.1"
            },
            "cbc:CustomizationID":{
                '#text':"2.0"
            },
            "cbc:ID":{
                '#text':"FA01-12345"
            },
            "cbc:IssueDate":{
                '#text':"2022-01-31"
            },
            "cbc:cbc:IssueTime":{
                '#text':"23:59:23"
            },
            "cbc:DueDate":{
                '#text':"2022-01-31"
            },
            "cbc:InvoiceTypeCode":{
                "@listID":"0101",
                '#text':"01"
            },
            "cbc:Note":{
                "@languageLocaleID":"1000",
                '#text':"aqui va ek numero convertido a texto"
            },
            "cbc:DocumentCurrencyCode":{
                "@listID":"ISO 4217 Alpha",
                "@listName":"Currency",
                "@listAgencyName":"United Nations Economic Commission for Europe",
                '#text':"PEN"
            },
            "cac:Signature":{
                "cbc:ID":{
                    "#text":"JSJ SIGN"
                },
                "cac:SignatoryParty":{
                    "cac:PartyIdentification":{
                        "cbc:ID":{
                            "#text":"RUCCCC"
                        }   
                    },
                    "cac:PartyName":{
                        "cbc:Name":{
                            "#text":"RAZON SOCIAL VA AQUI"
                        }   
                    }
                },
                "cac:DigitalSignatureAttachment":{
                    "cac:ExternalReference":{
                        "cbc:URI":{
                            "#text":"#JSJSign",
                        }
                    }   
                }
            },
            "cac:AccountingSupplierParty":{
                "cac:Party":{
                    "cac:PartyIdentification":{
                        "cbc:ID":{
                            "@schemeID":"6",
                            "#text":"#JSJSign"
                        }
                        
                    },
                    "cac:PartyName":{
                        "cbc:Name":{
                            "#text":"RAZON SOCIAL"
                        }
                        
                    },
                    "cac:PartyLegalEntity":{
                        "cbc:RegistrationName":{
                            "#text":"RAZON SOCIALLLL"
                        }
                        
                    }
                }
            },
            "cac:AccountingCustomerParty":{
                "cac:Party":{
                    "cac:PartyIdentification":{
                        "cbc:ID":{
                            "@schemeID":"6",
                            "#text":"#NUMERO DOC"
                        }
                        
                    },
                    "cac:PartyLegalEntity":{
                        "cbc:RegistrationName":{
                            "#text":"RAZON SOCIALLLL"
                        }
                        
                    }
                }
            },
            "cac:PaymentTerms":{
                "cbc:ID":{
                    "#text":"FORMAPAGO"
                },
                "cbc:PaymentMeansID":{
                    "#text":"CONTADO"
                }

            },

            repo: {
                '@type': 'git', // attributes start with @
                '#text': 'git://github.com/oozcitak/xmlbuilder-js.git' // text node
            }
        }
    }
};

var xml = builder.create(obj).end({ pretty: true });
console.log(xml);


/*
            $XMLL = '<?xml version="1.0" encoding="utf-8"?>
<!--facturacion electronica - www.jsjfact.com-->
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" 
xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" 
....
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<ext:UBLExtensions>
    <ext:UBLExtension>
      <ext:ExtensionContent>        
      </ext:ExtensionContent>
    </ext:UBLExtension>
  </ext:UBLExtensions>
  <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
  <cbc:CustomizationID>2.0</cbc:CustomizationID>
  <cbc:ID>' . $SERIE . '-' . $NUMERO . '</cbc:ID>
  <cbc:IssueDate>' . $fecha . '</cbc:IssueDate>
  <cbc:IssueTime>23:59:23</cbc:IssueTime>
  <cbc:DueDate>' . $fecha . '</cbc:DueDate>
  <cbc:InvoiceTypeCode listID="0101">' . $doc . '</cbc:InvoiceTypeCode>
  <cbc:Note languageLocaleID="1000">' . ($CAB->total >= 1 ? Ayudas::numerosaletras(Ayudas::numerosSunat($CAB->total), false, true, '') : 'Cero Soles') . '</cbc:Note>
  <cbc:DocumentCurrencyCode listID="ISO 4217 Alpha"
                            listName="Currency"
                            listAgencyName="United Nations Economic Commission for Europe">' . $moneda . '</cbc:DocumentCurrencyCode>

   <cac:Signature>
    <cbc:ID>JSJSign</cbc:ID>
    <cac:SignatoryParty>
      <cac:PartyIdentification>
        <cbc:ID>' . $ruc . '</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name><![CDATA[' . $this->SESSION_['raz'] . ']]></cbc:Name>
      </cac:PartyName>
    </cac:SignatoryParty>
    <cac:DigitalSignatureAttachment>
      <cac:ExternalReference>
        <cbc:URI>#JSJSign</cbc:URI>
      </cac:ExternalReference>
    </cac:DigitalSignatureAttachment>
  </cac:Signature>
  <cac:AccountingSupplierParty>
    <cac:Party>
      <cac:PartyIdentification>
        <cbc:ID schemeID="6">' . $ruc . '</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyName>
        <cbc:Name><![CDATA[' . $this->SESSION_['raz'] . ']]></cbc:Name>
      </cac:PartyName>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName><![CDATA[' . $this->SESSION_['raz'] . ']]></cbc:RegistrationName>
        <cac:RegistrationAddress>
          <cbc:AddressTypeCode>0000</cbc:AddressTypeCode>
        </cac:RegistrationAddress>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingSupplierParty>                             

  <cac:AccountingCustomerParty>
    <cac:Party>
      <cac:PartyIdentification>
        <cbc:ID schemeID="' . $CLI->tip_doc . '">' . $CLI->nro_doc . '</cbc:ID>
      </cac:PartyIdentification>
      <cac:PartyLegalEntity>
        <cbc:RegistrationName><![CDATA[' . trim($CLI->nom) . ']]></cbc:RegistrationName>
      </cac:PartyLegalEntity>
    </cac:Party>
  </cac:AccountingCustomerParty>

    <cac:PaymentTerms>
        <cbc:ID>FormaPago</cbc:ID> 
        <cbc:PaymentMeansID>Contado</cbc:PaymentMeansID>
    </cac:PaymentTerms>

    ' . $RRCC . '
  
    <cac:TaxTotal>
    <cbc:TaxAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($CAB->igv) . '</cbc:TaxAmount>
    <cac:TaxSubtotal>
      <cbc:TaxableAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($CAB->base) . '</cbc:TaxableAmount>
      <cbc:TaxAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($CAB->igv) . '</cbc:TaxAmount>
      <cac:TaxCategory>
        <cac:TaxScheme>
          <cbc:ID schemeID="UN/ECE 5153" schemeAgencyID="6">1000</cbc:ID>
          <cbc:Name>IGV</cbc:Name>
          <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
        </cac:TaxScheme>
      </cac:TaxCategory>
    </cac:TaxSubtotal>
  </cac:TaxTotal>  
  <cac:LegalMonetaryTotal>
    <cbc:LineExtensionAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($CAB->base) . '</cbc:LineExtensionAmount>
    <cbc:TaxInclusiveAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($CAB->base + $CAB->igv) . '</cbc:TaxInclusiveAmount>
    <cbc:ChargeTotalAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($CAB->rrcc) . '</cbc:ChargeTotalAmount>
    <cbc:PayableAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($CAB->total) . '</cbc:PayableAmount>
  </cac:LegalMonetaryTotal>
';

            $i = 1;
            foreach ($DET as $d) {
                $XMLL .= '<cac:InvoiceLine><cbc:ID>' . $i . '</cbc:ID>
    <cbc:InvoicedQuantity unitCode="NIU">' . $d->can . '</cbc:InvoicedQuantity>
    <cbc:LineExtensionAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($d->val_vta) . '</cbc:LineExtensionAmount>
    <cac:PricingReference>
      <cac:AlternativeConditionPrice>
        <cbc:PriceAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat(($d->val_vta + $d->tot_igv) / $d->can, 6) . '</cbc:PriceAmount>
        <cbc:PriceTypeCode>01</cbc:PriceTypeCode>
      </cac:AlternativeConditionPrice>
    </cac:PricingReference>
    <cac:TaxTotal>
      <cbc:TaxAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($d->tot_igv) . '</cbc:TaxAmount>';

                if ($d->TIPOIVA == 2) {
                    $XMLL .= '
        <cac:TaxSubtotal>
        <cbc:TaxAmount currencyID="' . $moneda . '">' . number_format(($d->can * 0.40), 2) . '</cbc:TaxAmount>
        <cbc:BaseUnitMeasure unitCode="NIU">' . (int) $d->can . '</cbc:BaseUnitMeasure>
            <cac:TaxCategory>
                <cbc:PerUnitAmount currencyID="' . $moneda . '">0.20</cbc:PerUnitAmount>
                <cac:TaxScheme>
                    <cbc:ID schemeAgencyName="PE:SUNAT" schemeName="Codigo de tributos" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo05">7152</cbc:ID>
                    <cbc:Name>ICBPER</cbc:Name>
                    <cbc:TaxTypeCode>OTH</cbc:TaxTypeCode>                        
                </cac:TaxScheme>
            </cac:TaxCategory>
        </cac:TaxSubtotal>            
        ';
                }

                $XMLL .= '<cac:TaxSubtotal>
                            <cbc:TaxableAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($d->val_vta) . '</cbc:TaxableAmount>
                            <cbc:TaxAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat($d->tot_igv) . '</cbc:TaxAmount>
                            <cac:TaxCategory>
                            <cbc:Percent>' . ($ruc == "20603587929" ? '10.00' : '18.00') . '</cbc:Percent>
                            <cbc:TaxExemptionReasonCode>10</cbc:TaxExemptionReasonCode>
                            <cac:TaxScheme>
                                <cbc:ID>1000</cbc:ID>
                                <cbc:Name>IGV</cbc:Name>
                                <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                            </cac:TaxScheme>
                            </cac:TaxCategory>
                        </cac:TaxSubtotal>
                        </cac:TaxTotal>
                        <cac:Item>
                        <cbc:Description><![CDATA[' . trim($d->nom) . ']]></cbc:Description>
                        <cac:SellersItemIdentification>
                            <cbc:ID>' . $d->producto . '</cbc:ID>
                        </cac:SellersItemIdentification>
                        </cac:Item>
                        <cac:Price>
                        <cbc:PriceAmount currencyID="' . $moneda . '">' . Ayudas::numerosSunat(number_format(($d->val_vta / $d->can), 6, '.', '')) . '</cbc:PriceAmount>
                        </cac:Price>    
                    </cac:InvoiceLine>';
                ++$i;
            }
            $XMLL .= '</Invoice>';

            $nom = $ruc . '-' . $doc . '-' . $SERIE . '-' . $NUMERO;
            $doc = new DOMDocument();
            $doc->loadXML($XMLL);
            $objDSig = new XMLSecurityDSig();
            $objDSig->setCanonicalMethod(XMLSecurityDSig::EXC_C14N);
            $objDSig->addReference($doc, XMLSecurityDSig::SHA1, ['http://www.w3.org/2000/09/xmldsig#enveloped-signature'], ['force_uri' => true]);
            $objKey = new XMLSecurityKey(XMLSecurityKey::RSA_SHA1, ['type' => 'private']);
            $objKey->loadKey($DATOS->private_key, false); //$DATOS
            $objDSig->sign($objKey);
            $objDSig->add509Cert($DATOS->public_key, true, false, ['issuerSerial' => false]); // array('issuerSerial' => true, 'subjectName' => true));
            $objDSig->appendSignature($doc->getElementsByTagName('ExtensionContent')->item(0));
            $strings_xml = $doc->saveXML();
            file_put_contents('__CLIENTT/XML/' . $IDX_CPE . '_' . $nom . '.xml', $strings_xml);

            */