import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor() { }

  getCountries(){
    return [{"name":"Afghanistan","alpha-2":"AF","alpha-3":"AFG","country-code":"004","iso_3166-2":"ISO 3166-2:AF","region":"Asia","sub-region":"Southern Asia","intermediate-region":"","region-code":"142","sub-region-code":"034","intermediate-region-code":""},
    {"name":"Albania","alpha-2":"AL","alpha-3":"ALB","country-code":"008","iso_3166-2":"ISO 3166-2:AL","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},
    {"name":"Algeria","alpha-2":"DZ","alpha-3":"DZA","country-code":"012","iso_3166-2":"ISO 3166-2:DZ","region":"Africa","sub-region":"Northern Africa","intermediate-region":"","region-code":"002","sub-region-code":"015","intermediate-region-code":""},
    {"name":"Andorra","alpha-2":"AD","alpha-3":"AND","country-code":"020","iso_3166-2":"ISO 3166-2:AD","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},
    {"name":"Venezuela","alpha-2":"VE","alpha-3":"VEN","country-code":"862","iso_3166-2":"ISO 3166-2:VE","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"South America","region-code":"019","sub-region-code":"419","intermediate-region-code":"005"},
    {"name":"Vietnam","alpha-2":"VN","alpha-3":"VNM","country-code":"704","iso_3166-2":"ISO 3166-2:VN","region":"Asia","sub-region":"South-eastern Asia","intermediate-region":"","region-code":"142","sub-region-code":"035","intermediate-region-code":""}
    ,{"name":"Yemen","alpha-2":"YE","alpha-3":"YEM","country-code":"887","iso_3166-2":"ISO 3166-2:YE","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},
    {"name":"Zambia","alpha-2":"ZM","alpha-3":"ZMB","country-code":"894","iso_3166-2":"ISO 3166-2:ZM","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Eastern Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"014"},
    {"name":"Zimbabwe","alpha-2":"ZW","alpha-3":"ZWE","country-code":"716","iso_3166-2":"ISO 3166-2:ZW","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Eastern Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"014"},
  {"name":"Australia","alpha-2":"AU","alpha-3":"AUS","country-code":"036","iso_3166-2":"ISO 3166-2:AU","region":"Oceania","sub-region":"Australia and New Zealand","intermediate-region":"","region-code":"009","sub-region-code":"053","intermediate-region-code":""}
  ,{"name":"Austria","alpha-2":"AT","alpha-3":"AUT","country-code":"040","iso_3166-2":"ISO 3166-2:AT","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},
  {"name":"Azerbaijan","alpha-2":"AZ","alpha-3":"AZE","country-code":"031","iso_3166-2":"ISO 3166-2:AZ","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},
  {"name":"Bahamas","alpha-2":"BS","alpha-3":"BHS","country-code":"044","iso_3166-2":"ISO 3166-2:BS","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Caribbean","region-code":"019","sub-region-code":"419","intermediate-region-code":"029"},
  {"name":"Bahrein","alpha-2":"BH","alpha-3":"BHR","country-code":"048","iso_3166-2":"ISO 3166-2:BH","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},
  {"name":"Bangladesh","alpha-2":"BD","alpha-3":"BGD","country-code":"050","iso_3166-2":"ISO 3166-2:BD","region":"Asia","sub-region":"Southern Asia","intermediate-region":"","region-code":"142","sub-region-code":"034","intermediate-region-code":""},
{"name":"Bielorussia","alpha-2":"BY","alpha-3":"BLR","country-code":"112","iso_3166-2":"ISO 3166-2:BY","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},
{"name":"Belgica","alpha-2":"BE","alpha-3":"BEL","country-code":"056","iso_3166-2":"ISO 3166-2:BE","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},
{"name":"Cuba","alpha-2":"CU","alpha-3":"CUB","country-code":"192","iso_3166-2":"ISO 3166-2:CU","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Caribbean","region-code":"019","sub-region-code":"419","intermediate-region-code":"029"},
{"name":"Curazao","alpha-2":"CW","alpha-3":"CUW","country-code":"531","iso_3166-2":"ISO 3166-2:CW","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Caribbean","region-code":"019","sub-region-code":"419","intermediate-region-code":"029"},
{"name":"Chipre","alpha-2":"CY","alpha-3":"CYP","country-code":"196","iso_3166-2":"ISO 3166-2:CY","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},
{"name":"Chequia","alpha-2":"CZ","alpha-3":"CZE","country-code":"203","iso_3166-2":"ISO 3166-2:CZ","region":"Europe","sub-region":"Eastern Europe","intermediate-region":"","region-code":"150","sub-region-code":"151","intermediate-region-code":""},
{"name":"Dinamarca","alpha-2":"DK","alpha-3":"DNK","country-code":"208","iso_3166-2":"ISO 3166-2:DK","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},
{"name":"Yibuti","alpha-2":"DJ","alpha-3":"DJI","country-code":"262","iso_3166-2":"ISO 3166-2:DJ","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Eastern Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"014"},
{"name":"Dominica","alpha-2":"DM","alpha-3":"DMA","country-code":"212","iso_3166-2":"ISO 3166-2:DM","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Caribbean","region-code":"019","sub-region-code":"419","intermediate-region-code":"029"},
{"name":"Republica Dominicana","alpha-2":"DO","alpha-3":"DOM","country-code":"214","iso_3166-2":"ISO 3166-2:DO","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Caribbean","region-code":"019","sub-region-code":"419","intermediate-region-code":"029"},
{"name":"Ecuador","alpha-2":"EC","alpha-3":"ECU","country-code":"218","iso_3166-2":"ISO 3166-2:EC","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"South America","region-code":"019","sub-region-code":"419","intermediate-region-code":"005"},
{"name":"Egipto","alpha-2":"EG","alpha-3":"EGY","country-code":"818","iso_3166-2":"ISO 3166-2:EG","region":"Africa","sub-region":"Northern Africa","intermediate-region":"","region-code":"002","sub-region-code":"015","intermediate-region-code":""},
{"name":"El Salvador","alpha-2":"SV","alpha-3":"SLV","country-code":"222","iso_3166-2":"ISO 3166-2:SV","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Central America","region-code":"019","sub-region-code":"419","intermediate-region-code":"013"},
{"name":"Guinea Ecuatorial","alpha-2":"GQ","alpha-3":"GNQ","country-code":"226","iso_3166-2":"ISO 3166-2:GQ","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Middle Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"017"},
{"name":"Eritrea","alpha-2":"ER","alpha-3":"ERI","country-code":"232","iso_3166-2":"ISO 3166-2:ER","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Eastern Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"014"},
{"name":"Estonia","alpha-2":"EE","alpha-3":"EST","country-code":"233","iso_3166-2":"ISO 3166-2:EE","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},
{"name":"Esuatini","alpha-2":"SZ","alpha-3":"SWZ","country-code":"748","iso_3166-2":"ISO 3166-2:SZ","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Southern Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"018"},
{"name":"Etiopia","alpha-2":"ET","alpha-3":"ETH","country-code":"231","iso_3166-2":"ISO 3166-2:ET","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Eastern Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"014"},
{"name":"Islas Feroe","alpha-2":"FO","alpha-3":"FRO","country-code":"234","iso_3166-2":"ISO 3166-2:FO","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},
{"name":"Fiji","alpha-2":"FJ","alpha-3":"FJI","country-code":"242","iso_3166-2":"ISO 3166-2:FJ","region":"Oceania","sub-region":"Melanesia","intermediate-region":"","region-code":"009","sub-region-code":"054","intermediate-region-code":""},
{"name":"Finlandia","alpha-2":"FI","alpha-3":"FIN","country-code":"246","iso_3166-2":"ISO 3166-2:FI","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},
{"name":"Francia","alpha-2":"FR","alpha-3":"FRA","country-code":"250","iso_3166-2":"ISO 3166-2:FR","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},
{"name":"Polinesia Francesa","alpha-2":"PF","alpha-3":"PYF","country-code":"258","iso_3166-2":"ISO 3166-2:PF","region":"Oceania","sub-region":"Polynesia","intermediate-region":"","region-code":"009","sub-region-code":"061","intermediate-region-code":""},
{"name":"Gabon","alpha-2":"GA","alpha-3":"GAB","country-code":"266","iso_3166-2":"ISO 3166-2:GA","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Middle Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"017"},
{"name":"Gambia","alpha-2":"GM","alpha-3":"GMB","country-code":"270","iso_3166-2":"ISO 3166-2:GM","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Western Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"011"},
{"name":"Georgia","alpha-2":"GE","alpha-3":"GEO","country-code":"268","iso_3166-2":"ISO 3166-2:GE","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},
{"name":"Alemania","alpha-2":"DE","alpha-3":"DEU","country-code":"276","iso_3166-2":"ISO 3166-2:DE","region":"Europe","sub-region":"Western Europe","intermediate-region":"","region-code":"150","sub-region-code":"155","intermediate-region-code":""},
{"name":"Ghana","alpha-2":"GH","alpha-3":"GHA","country-code":"288","iso_3166-2":"ISO 3166-2:GH","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Western Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"011"},
{"name":"Gibraltar","alpha-2":"GI","alpha-3":"GIB","country-code":"292","iso_3166-2":"ISO 3166-2:GI","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},
{"name":"Grecia","alpha-2":"GR","alpha-3":"GRC","country-code":"300","iso_3166-2":"ISO 3166-2:GR","region":"Europe","sub-region":"Southern Europe","intermediate-region":"","region-code":"150","sub-region-code":"039","intermediate-region-code":""},
{"name":"Granada","alpha-2":"GD","alpha-3":"GRD","country-code":"308","iso_3166-2":"ISO 3166-2:GD","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Caribbean","region-code":"019","sub-region-code":"419","intermediate-region-code":"029"},
{"name":"Guam","alpha-2":"GU","alpha-3":"GUM","country-code":"316","iso_3166-2":"ISO 3166-2:GU","region":"Oceania","sub-region":"Micronesia","intermediate-region":"","region-code":"009","sub-region-code":"057","intermediate-region-code":""},
{"name":"Guatemala","alpha-2":"GT","alpha-3":"GTM","country-code":"320","iso_3166-2":"ISO 3166-2:GT","region":"Americas","sub-region":"Latin America and the Caribbean","intermediate-region":"Central America","region-code":"019","sub-region-code":"419","intermediate-region-code":"013"},
{"name":"Korea","alpha-2":"KR","alpha-3":"KOR","country-code":"410","iso_3166-2":"ISO 3166-2:KR","region":"Asia","sub-region":"Eastern Asia","intermediate-region":"","region-code":"142","sub-region-code":"030","intermediate-region-code":""},
{"name":"Kuwait","alpha-2":"KW","alpha-3":"KWT","country-code":"414","iso_3166-2":"ISO 3166-2:KW","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},
{"name":"Kirguistan","alpha-2":"KG","alpha-3":"KGZ","country-code":"417","iso_3166-2":"ISO 3166-2:KG","region":"Asia","sub-region":"Central Asia","intermediate-region":"","region-code":"142","sub-region-code":"143","intermediate-region-code":""},
{"name":"Laos","alpha-2":"LA","alpha-3":"LAO","country-code":"418","iso_3166-2":"ISO 3166-2:LA","region":"Asia","sub-region":"South-eastern Asia","intermediate-region":"","region-code":"142","sub-region-code":"035","intermediate-region-code":""},
{"name":"Letonia","alpha-2":"LV","alpha-3":"LVA","country-code":"428","iso_3166-2":"ISO 3166-2:LV","region":"Europe","sub-region":"Northern Europe","intermediate-region":"","region-code":"150","sub-region-code":"154","intermediate-region-code":""},
{"name":"Líbano","alpha-2":"LB","alpha-3":"LBN","country-code":"422","iso_3166-2":"ISO 3166-2:LB","region":"Asia","sub-region":"Western Asia","intermediate-region":"","region-code":"142","sub-region-code":"145","intermediate-region-code":""},
{"name":"Lesoto","alpha-2":"LS","alpha-3":"LSO","country-code":"426","iso_3166-2":"ISO 3166-2:LS","region":"Africa","sub-region":"Sub-Saharan Africa","intermediate-region":"Southern Africa","region-code":"002","sub-region-code":"202","intermediate-region-code":"018"}

]
}



}




